/**
 * Smart Category-Aware Image Fallbacks for Indian and Global Packaged Products.
 * Provides crisp, high-resolution food photos based on category, name, and brand
 * whenever a product image is null, undefined, or fails to load.
 */

const CATEGORY_FALLBACK_IMAGES = {
  bakery: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80', // Biscuits & Cookies
  snacks: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80', // Chips & Namkeen
  dairy: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80', // Milk, Butter, Cheese
  noodles: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=400&q=80', // Instant Noodles & Pasta
  beverages: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=400&q=80', // Juices & Drinks
  sweets: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=400&q=80', // Chocolates & Sweets
  cereals: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=400&q=80', // Oats & Cereals
  spices: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80', // Spices & Masala
  staples: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80', // Atta, Rice, Dal
  sauces: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80', // Jams & Sauces
  default: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80' // Packaged groceries
};

/**
 * Returns a high quality image for a product.
 * If product.image is provided, returns it; otherwise determines the best category image.
 */
export function getProductImage(product) {
  if (product?.image && typeof product.image === 'string' && product.image.trim().startsWith('http')) {
    return product.image.trim();
  }
  return getCategoryFallbackImage(product);
}

/**
 * Returns the best fallback image based on product category or name.
 */
export function getCategoryFallbackImage(product) {
  const text = `${product?.category || ''} ${product?.name || ''} ${product?.brand || ''}`.toLowerCase();

  if (text.includes('biscuit') || text.includes('cookie') || text.includes('bakery') || text.includes('rusk') || text.includes('cake')) {
    return CATEGORY_FALLBACK_IMAGES.bakery;
  }
  if (text.includes('snack') || text.includes('namkeen') || text.includes('bhujia') || text.includes('chips') || text.includes('kurkure') || text.includes('sev')) {
    return CATEGORY_FALLBACK_IMAGES.snacks;
  }
  if (text.includes('dairy') || text.includes('milk') || text.includes('butter') || text.includes('cheese') || text.includes('paneer') || text.includes('curd') || text.includes('dahi') || text.includes('ghee')) {
    return CATEGORY_FALLBACK_IMAGES.dairy;
  }
  if (text.includes('noodle') || text.includes('maggi') || text.includes('pasta') || text.includes('instant food') || text.includes('soup')) {
    return CATEGORY_FALLBACK_IMAGES.noodles;
  }
  if (text.includes('beverage') || text.includes('drink') || text.includes('juice') || text.includes('tea') || text.includes('coffee') || text.includes('cola') || text.includes('soda')) {
    return CATEGORY_FALLBACK_IMAGES.beverages;
  }
  if (text.includes('sweet') || text.includes('chocolate') || text.includes('candy') || text.includes('mithai') || text.includes('barfi') || text.includes('halwa')) {
    return CATEGORY_FALLBACK_IMAGES.sweets;
  }
  if (text.includes('cereal') || text.includes('oat') || text.includes('muesli') || text.includes('corn flake') || text.includes('porridge')) {
    return CATEGORY_FALLBACK_IMAGES.cereals;
  }
  if (text.includes('spice') || text.includes('masala') || text.includes('turmeric') || text.includes('chilli') || text.includes('coriander')) {
    return CATEGORY_FALLBACK_IMAGES.spices;
  }
  if (text.includes('staple') || text.includes('atta') || text.includes('rice') || text.includes('dal') || text.includes('pulse') || text.includes('flour') || text.includes('grain')) {
    return CATEGORY_FALLBACK_IMAGES.staples;
  }
  if (text.includes('sauce') || text.includes('ketchup') || text.includes('jam') || text.includes('spread') || text.includes('mayo') || text.includes('pickle') || text.includes('chutney')) {
    return CATEGORY_FALLBACK_IMAGES.sauces;
  }

  return CATEGORY_FALLBACK_IMAGES.default;
}
