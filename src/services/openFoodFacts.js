import { getFallbackProduct, FALLBACK_PRODUCTS } from '../data/fallbackProducts';

const API_BASE = 'https://world.openfoodfacts.org/api/v2';
const SEARCH_BASE = 'https://world.openfoodfacts.org/cgi/search.pl';

/**
 * Normalizes Open Food Facts raw product JSON into standardized HealthScan format
 */
export function normalizeOFFProduct(rawProduct, barcode) {
  if (!rawProduct) return null;

  const n = rawProduct.nutriments || {};

  // Extract ingredients text
  const ingredientsText = rawProduct.ingredients_text_en || rawProduct.ingredients_text || rawProduct.ingredients_text_in || '';

  // Extract allergens
  const rawAllergens = rawProduct.allergens_tags || [];
  const allergens = rawAllergens.map(a => a.replace(/^[a-z]{2}:/, '').replace(/-/g, ' '));

  return {
    barcode: rawProduct.code || barcode,
    name: rawProduct.product_name_en || rawProduct.product_name || rawProduct.product_name_in || 'Unknown Product',
    brand: rawProduct.brands || rawProduct.brand_owner || 'Unknown Brand',
    category: rawProduct.categories_tags ? rawProduct.categories_tags[0]?.replace(/^[a-z]{2}:/, '').replace(/-/g, ' ') : 'Packaged Food',
    image: rawProduct.image_front_url || rawProduct.image_url || rawProduct.image_small_url || null,
    servingSize: rawProduct.serving_size || '100g',
    servingUnit: 'g',
    nutriments: {
      energy100g: Math.round(n['energy-kcal_100g'] || n['energy-kcal'] || (n['energy_100g'] ? n['energy_100g'] / 4.184 : 0)),
      energyServing: Math.round(n['energy-kcal_serving'] || (n['energy_serving'] ? n['energy_serving'] / 4.184 : 0)),
      sugars100g: parseFloat((n.sugars_100g || n.sugars || 0).toFixed(1)),
      sugarsServing: parseFloat((n.sugars_serving || 0).toFixed(1)),
      fat100g: parseFloat((n.fat_100g || n.fat || 0).toFixed(1)),
      fatServing: parseFloat((n.fat_serving || 0).toFixed(1)),
      saturatedFat100g: parseFloat((n['saturated-fat_100g'] || n['saturated-fat'] || 0).toFixed(1)),
      saturatedFatServing: parseFloat((n['saturated-fat_serving'] || 0).toFixed(1)),
      transFat100g: parseFloat((n['trans-fat_100g'] || n['trans-fat'] || 0).toFixed(1)),
      transFatServing: parseFloat((n['trans-fat_serving'] || 0).toFixed(1)),
      sodium100g: Math.round((n.sodium_100g ? n.sodium_100g * 1000 : (n.salt_100g ? n.salt_100g * 400 : 0))), // in mg
      sodiumServing: Math.round((n.sodium_serving ? n.sodium_serving * 1000 : (n.salt_serving ? n.salt_serving * 400 : 0))),
      protein100g: parseFloat((n.proteins_100g || n.proteins || 0).toFixed(1)),
      proteinServing: parseFloat((n.proteins_serving || 0).toFixed(1)),
      fiber100g: parseFloat((n.fiber_100g || n.fiber || 0).toFixed(1)),
      fiberServing: parseFloat((n.fiber_serving || 0).toFixed(1)),
      carbohydrates100g: parseFloat((n.carbohydrates_100g || n.carbohydrates || 0).toFixed(1)),
      carbohydratesServing: parseFloat((n.carbohydrates_serving || 0).toFixed(1))
    },
    ingredientsText,
    allergens,
    offGrade: rawProduct.nutriscore_grade ? rawProduct.nutriscore_grade.toUpperCase() : null,
    shelfLifeInfo: rawProduct.expiration_date ? `Package expiration note: ${rawProduct.expiration_date}` : 'Expiry not available on database — check physical packaging stamp.',
    isPartialData: !ingredientsText || Object.keys(n).length < 3
  };
}

/**
 * Fetch product by Barcode with API + Fallback logic
 */
export async function fetchProductByBarcode(barcode) {
  if (!barcode) throw new Error('No barcode provided');
  const cleanBarcode = String(barcode).trim();

  // 1. Check local fallback dataset first for instant response if matched
  const fallback = getFallbackProduct(cleanBarcode);
  if (fallback) {
    return { product: fallback, source: 'Local Cache / Regional DB' };
  }

  // 2. Fetch from Open Food Facts API
  try {
    const response = await fetch(`${API_BASE}/product/${cleanBarcode}.json`, {
      headers: {
        'User-Agent': 'HealthScan - WebApp - Version 1.0'
      }
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status === 1 && data.product) {
        const normalized = normalizeOFFProduct(data.product, cleanBarcode);
        return { product: normalized, source: 'Open Food Facts API' };
      }
    }
  } catch (err) {
    console.warn('Open Food Facts API request failed, relying on local fallback logic:', err);
  }

  // 3. If API failed or status != 1, check again fallback
  return { product: null, source: 'None' };
}

/**
 * Search products by Name (API + Local DB)
 */
export async function searchProductsByName(query) {
  if (!query || query.trim().length < 2) return [];

  const cleanQuery = query.toLowerCase().trim();

  // 1. Filter local fallback items
  const localMatches = FALLBACK_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(cleanQuery) ||
    p.brand.toLowerCase().includes(cleanQuery) ||
    p.category.toLowerCase().includes(cleanQuery)
  );

  // 2. Fetch from Open Food Facts Search API
  let apiMatches = [];
  try {
    const url = `${SEARCH_BASE}?search_terms=${encodeURIComponent(cleanQuery)}&search_simple=1&action=process&json=1&page_size=8`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      if (data.products && Array.isArray(data.products)) {
        apiMatches = data.products
          .filter(p => p.product_name)
          .map(p => normalizeOFFProduct(p, p.code));
      }
    }
  } catch (err) {
    console.warn('Open Food Facts search error:', err);
  }

  // Combine results with local matches prioritized
  const combined = [...localMatches];
  apiMatches.forEach(apiItem => {
    if (!combined.some(c => c.barcode === apiItem.barcode)) {
      combined.push(apiItem);
    }
  });

  return combined;
}
