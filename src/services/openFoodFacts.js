import { getFallbackProduct, FALLBACK_PRODUCTS } from '../data/fallbackProducts';
import { API_BASE } from './api';

const OFF_API_BASE = 'https://world.openfoodfacts.org/api/v2';
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

  try {
    const response = await fetch(`${API_BASE}/products/barcode/${cleanBarcode}`);
    if (response.ok) {
      const data = await response.json();
      let rawProduct = data;
      if (typeof data === 'string') {
        try { rawProduct = JSON.parse(data); } catch (e) {}
      }
      if (rawProduct.product) {
        return { product: normalizeOFFProduct(rawProduct.product, cleanBarcode), source: 'Aiven MySQL DB / Backend' };
      }
      if (rawProduct.status === 1) {
        return { product: normalizeOFFProduct(rawProduct, cleanBarcode), source: 'Aiven MySQL DB / Backend' };
      }
      if (rawProduct.barcode || rawProduct.productName) {
        return {
          product: {
            barcode: rawProduct.barcode || cleanBarcode,
            name: rawProduct.productName || rawProduct.name || 'Unknown Product',
            brand: rawProduct.brand || 'Unknown Brand',
            category: rawProduct.categories || 'Packaged Food',
            image: rawProduct.image || null,
            servingSize: rawProduct.servingSize || '100g',
            servingUnit: 'g',
            nutriments: {
              energy100g: rawProduct.energyKcal || 0,
              sugars100g: rawProduct.sugar || 0,
              fat100g: rawProduct.fat || 0,
              saturatedFat100g: rawProduct.saturatedFat || 0,
              transFat100g: rawProduct.transFat || 0,
              sodium100g: rawProduct.sodium || 0,
              protein100g: rawProduct.protein || 0,
              fiber100g: rawProduct.fiber || 0,
              carbohydrates100g: rawProduct.carbohydrates || 0
            },
            ingredientsText: rawProduct.ingredientsText || '',
            allergens: rawProduct.allergens ? rawProduct.allergens.split(',') : []
          },
          source: 'Aiven MySQL DB'
        };
      }
    }
  } catch (err) {
    console.warn('Backend barcode lookup error, attempting direct client fetch:', err);
  }

  // Tier 2: Direct Browser Fetch to Open Food Facts (bypasses Render IP block & uses user's browser session)
  try {
    const offUrls = [
      `https://world.openfoodfacts.org/api/v2/product/${cleanBarcode}.json`,
      `https://world.openfoodfacts.org/api/v0/product/${cleanBarcode}.json`
    ];

    for (const url of offUrls) {
      try {
        const offRes = await fetch(url);
        if (offRes.ok) {
          const offData = await offRes.json();
          if ((offData.status === 1 || offData.product) && offData.product) {
            // Asynchronously cache this product into Aiven MySQL via backend
            fetch(`${API_BASE}/products/cache`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ barcode: cleanBarcode, rawJson: JSON.stringify(offData) })
            }).catch(() => {});

            return {
              product: normalizeOFFProduct(offData.product, cleanBarcode),
              source: 'Open Food Facts (Live + Cached to Aiven)'
            };
          }
        }
      } catch (innerErr) {
        // Continue to next URL
      }
    }
  } catch (clientErr) {
    console.warn('Direct Open Food Facts client lookup failed:', clientErr);
  }

  // Tier 3: Check regional demo/fallback dataset
  const fallback = getFallbackProduct(cleanBarcode);
  if (fallback) {
    return { product: fallback, source: 'Regional Catalog' };
  }

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
