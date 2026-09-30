/**
 * Client-side fresh food database.
 * This replaces the old server-side freshFoodDatabase.js import.
 * Contains sample fresh food items and a search helper function.
 */

export const FRESH_FOOD_DATABASE = [
  {
    id: 'egg',
    name: 'Egg',
    slug: 'egg',
    category: 'Protein',
    image: '🥚',
    vegetarian: true,
    vegan: false,
    aliases: ['egg', 'hen egg', 'chicken egg'],
    nutrition: {
      calories: 78,
      protein: 6.3,
      carbs: 0.6,
      fat: 5.3,
      fiber: 0,
      sugar: 0.5
    },
    preparations: ['raw', 'boiled', 'fried', 'scrambled', 'poached']
  },
  {
    id: 'banana',
    name: 'Banana',
    slug: 'banana',
    category: 'Fruit',
    image: '🍌',
    vegetarian: true,
    vegan: true,
    aliases: ['banana', 'plantain'],
    nutrition: {
      calories: 89,
      protein: 1.1,
      carbs: 22.8,
      fat: 0.3,
      fiber: 2.6,
      sugar: 12.2
    },
    preparations: ['raw', 'dried', 'baked']
  },
  {
    id: 'apple',
    name: 'Apple',
    slug: 'apple',
    category: 'Fruit',
    image: '🍎',
    vegetarian: true,
    vegan: true,
    aliases: ['apple', 'green apple', 'red apple'],
    nutrition: {
      calories: 52,
      protein: 0.3,
      carbs: 13.8,
      fat: 0.2,
      fiber: 2.4,
      sugar: 10.4
    },
    preparations: ['raw', 'baked', 'dried', 'juice']
  },
  {
    id: 'chicken_breast',
    name: 'Chicken Breast',
    slug: 'chicken-breast',
    category: 'Protein',
    image: '🍗',
    vegetarian: false,
    vegan: false,
    aliases: ['chicken', 'chicken breast', 'poultry'],
    nutrition: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      sugar: 0
    },
    preparations: ['grilled', 'boiled', 'fried', 'baked', 'roasted']
  },
  {
    id: 'rice',
    name: 'Rice (White)',
    slug: 'rice',
    category: 'Grain',
    image: '🍚',
    vegetarian: true,
    vegan: true,
    aliases: ['rice', 'white rice', 'basmati'],
    nutrition: {
      calories: 130,
      protein: 2.7,
      carbs: 28.2,
      fat: 0.3,
      fiber: 0.4,
      sugar: 0
    },
    preparations: ['boiled', 'steamed', 'fried']
  },
  {
    id: 'spinach',
    name: 'Spinach',
    slug: 'spinach',
    category: 'Vegetable',
    image: '🥬',
    vegetarian: true,
    vegan: true,
    aliases: ['spinach', 'palak'],
    nutrition: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      fiber: 2.2,
      sugar: 0.4
    },
    preparations: ['raw', 'boiled', 'sauteed', 'steamed']
  },
  {
    id: 'milk',
    name: 'Milk (Whole)',
    slug: 'milk',
    category: 'Dairy',
    image: '🥛',
    vegetarian: true,
    vegan: false,
    aliases: ['milk', 'whole milk', 'cow milk'],
    nutrition: {
      calories: 61,
      protein: 3.2,
      carbs: 4.8,
      fat: 3.3,
      fiber: 0,
      sugar: 5.1
    },
    preparations: ['cold', 'warm', 'boiled']
  },
  {
    id: 'tomato',
    name: 'Tomato',
    slug: 'tomato',
    category: 'Vegetable',
    image: '🍅',
    vegetarian: true,
    vegan: true,
    aliases: ['tomato', 'tamatar'],
    nutrition: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fat: 0.2,
      fiber: 1.2,
      sugar: 2.6
    },
    preparations: ['raw', 'cooked', 'juice', 'dried']
  },
  {
    id: 'potato',
    name: 'Potato',
    slug: 'potato',
    category: 'Vegetable',
    image: '🥔',
    vegetarian: true,
    vegan: true,
    aliases: ['potato', 'aloo'],
    nutrition: {
      calories: 77,
      protein: 2,
      carbs: 17,
      fat: 0.1,
      fiber: 2.2,
      sugar: 0.8
    },
    preparations: ['boiled', 'fried', 'baked', 'mashed', 'roasted']
  },
  {
    id: 'salmon',
    name: 'Salmon',
    slug: 'salmon',
    category: 'Protein',
    image: '🐟',
    vegetarian: false,
    vegan: false,
    aliases: ['salmon', 'fish'],
    nutrition: {
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13,
      fiber: 0,
      sugar: 0
    },
    preparations: ['grilled', 'baked', 'raw', 'smoked', 'fried']
  }
];

/**
 * Search the fresh food database by name or alias.
 * @param {string} query - search term
 * @returns {Array} matching food items
 */
export function searchFreshFoodDatabase(query) {
  if (!query || !query.trim()) return [];
  const lower = query.toLowerCase().trim();
  return FRESH_FOOD_DATABASE.filter(item =>
    item.name.toLowerCase().includes(lower) ||
    item.slug.toLowerCase().includes(lower) ||
    (item.aliases && item.aliases.some(a => a.toLowerCase().includes(lower)))
  );
}
