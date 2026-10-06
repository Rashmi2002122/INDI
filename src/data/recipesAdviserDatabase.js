/**
 * Comprehensive Recipe Database for Personal Food Adviser.
 * Tagged by meal slot, diet type, goals, ingredients, allergens, and preparation time.
 */

export const ADVISER_RECIPES = [
  // ==========================================
  // BREAKFAST (5:00 - 10:59)
  // ==========================================
  {
    id: 'bf-veg-paneer-bhurji',
    name: 'High-Protein Paneer Bhurji with Multigrain Toast',
    slot: 'breakfast',
    diet: ['veg', 'eggetarian'],
    goals: ['muscle_gain', 'fat_loss', 'maintenance', 'high_energy'],
    allergens: ['dairy', 'gluten'],
    whyItFits: 'Packed with 26g of fresh vegetarian protein and complex carbs to ignite your morning metabolism.',
    ingredients: [
      '150g fresh low-fat paneer (crumbled)',
      '1 small onion & 1 medium tomato (finely chopped)',
      '1 green chilli & 1/2 tsp grated ginger',
      '1/2 tsp turmeric powder & 1/2 tsp garam masala',
      '1 tsp cold-pressed mustard oil or olive oil',
      '1 slice 100% multigrain or sourdough bread',
      'Fresh coriander leaves for garnish'
    ],
    method: [
      'Heat 1 tsp oil in a pan, add ginger, green chillies, and chopped onions until soft and translucent.',
      'Add chopped tomatoes, turmeric, and salt. Cook for 2-3 minutes until tomatoes turn mushy.',
      'Toss in crumbled paneer and garam masala. Sauté gently on medium heat for 2-3 minutes (avoid overcooking).',
      'Garnish with freshly chopped coriander and serve hot alongside a lightly toasted multigrain bread slice.'
    ],
    nutrition: {
      calories: 360,
      protein: 26,
      carbs: 24,
      fat: 16
    },
    timeToMake: '12 minutes'
  },
  {
    id: 'bf-veg-moong-chilla',
    name: 'Spinach & Moong Dal Chilla with Mint Chutney',
    slot: 'breakfast',
    diet: ['veg', 'vegan', 'eggetarian'],
    goals: ['fat_loss', 'maintenance', 'high_energy', 'low_sugar'],
    allergens: [],
    whyItFits: '100% plant-based, gluten-free, and rich in slow-digesting fiber to keep cravings away until lunchtime.',
    ingredients: [
      '1/2 cup yellow moong dal (soaked for 2 hours and blended to a smooth batter)',
      '1/2 cup finely shredded fresh spinach (palak)',
      '1/2 tsp grated ginger & pinch of asafoetida (hing)',
      '1/2 tsp cumin powder & pink rock salt to taste',
      '1 tsp cold-pressed oil for pan-searing',
      '2 tbsp homemade mint-coriander chutney'
    ],
    method: [
      'Mix shredded spinach, ginger, hing, cumin powder, and salt directly into the blended moong dal batter.',
      'Heat a non-stick or seasoned cast iron tawa on medium heat and smear a few drops of oil.',
      'Pour a ladle of batter and spread into a thin, round crepe (chilla). Cook for 2 minutes until crisp.',
      'Flip gently, lightly brown the second side, and serve warm with refreshing fresh mint chutney.'
    ],
    nutrition: {
      calories: 275,
      protein: 16,
      carbs: 38,
      fat: 5
    },
    timeToMake: '15 minutes'
  },
  {
    id: 'bf-nonveg-egg-scramble',
    name: 'Herb Scrambled Eggs with Avocado & Whole Wheat Toast',
    slot: 'breakfast',
    diet: ['non-veg', 'eggetarian'],
    goals: ['fat_loss', 'muscle_gain', 'maintenance', 'high_energy'],
    allergens: ['eggs', 'gluten'],
    whyItFits: 'Top-tier bioavailable protein paired with heart-healthy monounsaturated fats for sustained alertness.',
    ingredients: [
      '3 large organic eggs (or 2 whole eggs + 2 egg whites)',
      '1/4 ripe avocado (sliced or mashed)',
      '1 slice toasted whole wheat sourdough',
      '1/2 tsp unsalted butter or olive oil',
      'Sea salt, cracked black pepper, and fresh chives to taste'
    ],
    method: [
      'Whisk eggs in a bowl with a pinch of salt and cracked pepper until frothy.',
      'Melt butter in a non-stick pan over low heat; pour in eggs and gently push with a spatula to form soft curds.',
      'Remove from heat while eggs are still creamy and tender; transfer immediately onto the toast.',
      'Top with sliced avocado, cracked pepper, and fresh chives.'
    ],
    nutrition: {
      calories: 385,
      protein: 24,
      carbs: 22,
      fat: 21
    },
    timeToMake: '10 minutes'
  },
  {
    id: 'bf-vegan-tofu-scramble',
    name: 'Turmeric Tofu Scramble with Sautéed Mushrooms',
    slot: 'breakfast',
    diet: ['vegan', 'veg', 'eggetarian'],
    goals: ['fat_loss', 'muscle_gain', 'maintenance', 'low_sugar'],
    allergens: ['soy', 'mushrooms'],
    whyItFits: 'Clean vegan protein with anti-inflammatory turmeric and zero cholesterol for a nutrient-dense breakfast.',
    ingredients: [
      '180g firm organic tofu (pressed and crumbled with a fork)',
      '1/2 cup sliced button mushrooms',
      '1/2 tsp ground turmeric & 1/2 tsp black pepper',
      '1 tbsp nutritional yeast (optional for savoury cheesy flavor)',
      '1 tsp olive oil',
      'Salt to taste and fresh cilantro'
    ],
    method: [
      'Heat olive oil in a skillet, add sliced mushrooms and sauté for 3 minutes until browned.',
      'Add crumbled tofu, turmeric, black pepper, and nutritional yeast.',
      'Sauté on medium flame for 4-5 minutes until warm and fragrant.',
      'Season with salt, garnish with fresh herbs, and serve warm with fresh tomato slices.'
    ],
    nutrition: {
      calories: 280,
      protein: 23,
      carbs: 10,
      fat: 14
    },
    timeToMake: '12 minutes'
  },

  // ==========================================
  // MID-MORNING SNACK (11:00 - 11:59)
  // ==========================================
  {
    id: 'mm-veg-sprouts-chaat',
    name: 'Zesty Moong Sprouts & Pomegranate Chaat',
    slot: 'mid_morning',
    diet: ['veg', 'vegan', 'eggetarian', 'non-veg'],
    goals: ['fat_loss', 'maintenance', 'high_energy', 'low_sugar', 'heart_healthy'],
    allergens: [],
    whyItFits: 'Crisp, refreshing, and enzymatically active to beat mid-morning hunger without any sugar crashes.',
    ingredients: [
      '1 cup steamed green moong sprouts',
      '2 tbsp fresh pomegranate pearls',
      '1/4 cucumber & 1/4 tomato (finely diced)',
      '1/2 tsp roasted cumin powder & chaat masala',
      '1 tsp freshly squeezed lemon juice'
    ],
    method: [
      'Steam green moong sprouts for 3 minutes so they are tender yet retain their crunch.',
      'In a medium bowl, combine sprouts, diced cucumber, tomato, and pomegranate pearls.',
      'Sprinkle roasted cumin powder, chaat masala, and drizzle fresh lemon juice.',
      'Toss well and enjoy immediately for an energizing snack.'
    ],
    nutrition: {
      calories: 145,
      protein: 9,
      carbs: 26,
      fat: 1
    },
    timeToMake: '5 minutes'
  },
  {
    id: 'mm-veg-curd-walnuts',
    name: 'Greek Yogurt with Crushed Walnuts & Chia Seeds',
    slot: 'mid_morning',
    diet: ['veg', 'eggetarian'],
    goals: ['muscle_gain', 'fat_loss', 'maintenance', 'high_energy'],
    allergens: ['dairy', 'nuts'],
    whyItFits: 'Creamy probiotic protein paired with brain-boosting Omega-3 fatty acids for peak mid-morning focus.',
    ingredients: [
      '150g plain unsweetened Greek yogurt (or hung curd)',
      '4 whole walnut halves (lightly crushed)',
      '1 tsp chia seeds',
      'Pinch of cinnamon powder (optional)'
    ],
    method: [
      'Spoon chilled Greek yogurt into a bowl.',
      'Top with crushed walnuts and sprinkle chia seeds evenly.',
      'Dust a pinch of cinnamon powder over the top and enjoy cold.'
    ],
    nutrition: {
      calories: 195,
      protein: 16,
      carbs: 8,
      fat: 11
    },
    timeToMake: '3 minutes'
  },
  {
    id: 'mm-nonveg-boiled-eggs',
    name: 'Hard-Boiled Eggs with Black Pepper & Cucumber Rounds',
    slot: 'mid_morning',
    diet: ['non-veg', 'eggetarian'],
    goals: ['fat_loss', 'muscle_gain', 'maintenance'],
    allergens: ['eggs'],
    whyItFits: 'Zero-sugar, pure whole-food protein bite that holds you firmly until lunch.',
    ingredients: [
      '2 hard-boiled eggs (peeled)',
      '1/2 chilled cucumber (sliced into thick rounds)',
      'Black salt and freshly crushed black pepper to taste'
    ],
    method: [
      'Slice hard-boiled eggs in halves.',
      'Arrange cucumber slices alongside egg halves.',
      'Dust with black salt and freshly cracked black pepper.'
    ],
    nutrition: {
      calories: 155,
      protein: 13,
      carbs: 4,
      fat: 10
    },
    timeToMake: '5 minutes'
  },

  // ==========================================
  // LUNCH (12:00 - 15:29)
  // ==========================================
  {
    id: 'lu-veg-rajma-brownrice',
    name: 'Slow-Cooked Kashmiri Rajma with Steamed Brown Rice',
    slot: 'lunch',
    diet: ['veg', 'vegan', 'eggetarian'],
    goals: ['muscle_gain', 'maintenance', 'high_energy'],
    allergens: [],
    whyItFits: 'A complete amino acid profile of legumes and whole grains with prebiotic fiber for sustained afternoon fuel.',
    ingredients: [
      '1 cup cooked red kidney beans (rajma in spiced tomato-ginger gravy)',
      '3/4 cup cooked brown rice or jeera rice',
      '1 cup sliced onion, cucumber, and lemon salad',
      '1 tsp cold-pressed mustard oil',
      'Fresh ginger juliennes & coriander'
    ],
    method: [
      'Simmer cooked rajma in ginger, garlic, tomato, and aromatic spices until rich and flavorful.',
      'Portion warm steamed brown rice onto your plate.',
      'Ladle the thick rajma gravy generously over the rice.',
      'Serve with a crunchy side salad squeezed with fresh lemon.'
    ],
    nutrition: {
      calories: 420,
      protein: 18,
      carbs: 72,
      fat: 6
    },
    timeToMake: '20 minutes'
  },
  {
    id: 'lu-nonveg-chicken-bowl',
    name: 'Grilled Herb Chicken Breast with Quinoa & Tossed Greens',
    slot: 'lunch',
    diet: ['non-veg'],
    goals: ['muscle_gain', 'fat_loss', 'maintenance'],
    allergens: [],
    whyItFits: 'Delivers a massive 36g of lean muscle-repair protein with minimal saturated fat and low glycemic index.',
    ingredients: [
      '160g chicken breast (cut into strips or butterflied)',
      '1/2 cup cooked quinoa or brown rice',
      '1 cup sautéed zucchini, broccoli, and cherry tomatoes',
      '1 tsp olive oil',
      'Garlic powder, dried oregano, paprika, and sea salt'
    ],
    method: [
      'Season chicken breast with garlic, oregano, paprika, salt, and half the olive oil.',
      'Sear on a hot skillet for 5-6 minutes per side until juicy, golden, and thoroughly cooked.',
      'Toss vegetables in the same pan for 2 minutes to soak up the savoury pan juices.',
      'Plate the grilled chicken over warm quinoa alongside the vibrant greens.'
    ],
    nutrition: {
      calories: 440,
      protein: 38,
      carbs: 32,
      fat: 12
    },
    timeToMake: '18 minutes'
  },
  {
    id: 'lu-veg-paneer-roti-bowl',
    name: 'Tawa Paneer Tikka with 2 Phulkas & Cucumber Raita',
    slot: 'lunch',
    diet: ['veg', 'eggetarian'],
    goals: ['muscle_gain', 'maintenance', 'fat_loss'],
    allergens: ['dairy', 'gluten'],
    whyItFits: 'Traditional wholesome balance of complex carbohydrates, high dairy protein, and cooling gut probiotics.',
    ingredients: [
      '140g fresh paneer (diced into bite-sized cubes)',
      '1/2 cup curd + 1/2 tsp kasuri methi + 1/2 tsp deewani masala (for marinade)',
      '2 whole wheat phulkas (without excess ghee)',
      '1/2 cup fresh cucumber & mint raita'
    ],
    method: [
      'Coat paneer cubes in spiced curd marinade and let sit for 5 minutes.',
      'Roast on a hot tawa with a light brush of oil until edges are charred and aromatic.',
      'Warm 2 whole wheat phulkas directly on flame.',
      'Assemble with cooling cucumber raita and sliced onions.'
    ],
    nutrition: {
      calories: 460,
      protein: 27,
      carbs: 48,
      fat: 17
    },
    timeToMake: '20 minutes'
  },

  // ==========================================
  // EVENING SNACK (15:30 - 18:29)
  // ==========================================
  {
    id: 'es-veg-roasted-makhana',
    name: 'Turmeric & Pepper Roasted Makhana (Fox Nuts)',
    slot: 'evening_snack',
    diet: ['veg', 'vegan', 'eggetarian', 'non-veg'],
    goals: ['fat_loss', 'maintenance', 'heart_healthy', 'low_sugar'],
    allergens: [],
    whyItFits: 'Ultra-low calorie, crunchy, and mineral-dense to kill evening salt cravings without ruining dinner appetite.',
    ingredients: [
      '2 cups raw makhana (fox nuts)',
      '1/2 tsp pure ghee or coconut oil',
      '1/4 tsp turmeric powder',
      '1/4 tsp roasted black pepper & pink Himalayan salt'
    ],
    method: [
      'Heat ghee or coconut oil in a wide heavy-bottomed kadai on low heat.',
      'Add turmeric, salt, and freshly cracked pepper.',
      'Tip in the makhana and dry-roast on low flame for 6-8 minutes until crisp and crunchy.',
      'Let cool slightly and enjoy with a cup of green tea.'
    ],
    nutrition: {
      calories: 160,
      protein: 5,
      carbs: 28,
      fat: 3
    },
    timeToMake: '8 minutes'
  },
  {
    id: 'es-veg-sattu-drink',
    name: 'Chilled Roasted Chana Sattu Buttermilk',
    slot: 'evening_snack',
    diet: ['veg', 'vegan', 'eggetarian'],
    goals: ['fat_loss', 'muscle_gain', 'high_energy'],
    allergens: [],
    whyItFits: 'Nature’s desi protein shake: instant cooling hydration with 12g pure plant protein and insoluble fiber.',
    ingredients: [
      '3 tbsp roasted Bengal gram sattu powder',
      '1 glass chilled water (or 1/2 cup light curd + water)',
      '1/4 tsp black salt & roasted jeera powder',
      '1 tsp lemon juice & finely chopped fresh mint'
    ],
    method: [
      'In a tall glass or shaker, add sattu powder and a splash of water to form a lump-free paste.',
      'Pour in remaining chilled water, black salt, and roasted jeera powder.',
      'Stir vigorously, squeeze lemon juice, and garnish with fresh mint leaves.',
      'Sip slowly for instant rejuvenating energy.'
    ],
    nutrition: {
      calories: 140,
      protein: 11,
      carbs: 21,
      fat: 2
    },
    timeToMake: '4 minutes'
  },
  {
    id: 'es-nonveg-egg-toast',
    name: 'Boiled Egg White Chaat with Mint & Sev Crunch',
    slot: 'evening_snack',
    diet: ['non-veg', 'eggetarian'],
    goals: ['fat_loss', 'muscle_gain'],
    allergens: ['eggs'],
    whyItFits: '16g of pure lean protein with near-zero fat to fuel your evening workout or commute.',
    ingredients: [
      '4 hard-boiled egg whites (chopped into cubes)',
      '1 tbsp finely chopped onion & tomato',
      '1/2 tsp chaat masala & pinch of roasted cumin',
      '1 tsp lemon juice & fresh coriander'
    ],
    method: [
      'Boil and peel eggs; separate the whites and chop into bite-sized cubes.',
      'In a small bowl, toss egg whites with onions, tomatoes, and coriander.',
      'Season with chaat masala, cumin, and a squeeze of lemon juice.',
      'Eat fresh for a tangy high-protein boost.'
    ],
    nutrition: {
      calories: 110,
      protein: 16,
      carbs: 4,
      fat: 1
    },
    timeToMake: '5 minutes'
  },

  // ==========================================
  // DINNER (18:30 - 22:00) - Lighter, easy to digest
  // ==========================================
  {
    id: 'dn-veg-paneer-veggies',
    name: 'Pan-Seared Paneer & Sautéed Mediterranean Veggies',
    slot: 'dinner',
    diet: ['veg', 'eggetarian'],
    goals: ['fat_loss', 'muscle_gain', 'maintenance'],
    allergens: ['dairy'],
    whyItFits: 'Slow-digesting casein protein that repairs tissues through the night while keeping carbohydrates low.',
    ingredients: [
      '130g low-fat fresh paneer (cut into thick cubes)',
      '1 cup mixed bell peppers, zucchini, and french beans',
      '1 tsp olive oil or cold-pressed sesame oil',
      '1/2 tsp cumin seeds & black pepper to taste',
      'Pinch of oregano and pink rock salt'
    ],
    method: [
      'Heat 1 tsp oil in a pan and splutter cumin seeds.',
      'Add chopped vegetables and sauté on high heat for 3-4 minutes until tender-crisp.',
      'Add paneer cubes, salt, oregano, and black pepper.',
      'Gently toss for 2 minutes until paneer is warm and lightly golden. Enjoy warm.'
    ],
    nutrition: {
      calories: 310,
      protein: 23,
      carbs: 14,
      fat: 17
    },
    timeToMake: '12 minutes'
  },
  {
    id: 'dn-veg-moong-khichdi',
    name: 'Comforting Moong Dal & Spinach Khichdi with Curd',
    slot: 'dinner',
    diet: ['veg', 'eggetarian'],
    goals: ['fat_loss', 'maintenance', 'heart_healthy', 'high_energy'],
    allergens: ['dairy'],
    whyItFits: 'Very gentle on the stomach late at night, preventing acid reflux while delivering comforting clean protein.',
    ingredients: [
      '1/4 cup yellow split moong dal (washed)',
      '2 tbsp brown rice or rolled oats',
      '1 cup fresh spinach leaves (roughly chopped)',
      '1/2 tsp turmeric powder & pinch of hing (asafoetida)',
      '1 tsp pure cow ghee & 1/2 tsp jeera',
      '2 tbsp fresh homemade curd for serving'
    ],
    method: [
      'In a pressure cooker or pot, heat 1 tsp ghee and splutter cumin seeds with a pinch of hing.',
      'Add washed moong dal, oats/rice, turmeric, salt, and 2.5 cups water.',
      'Stir in the chopped spinach and cook for 2-3 whistles until porridge-soft.',
      'Serve warm in a bowl accompanied by cooling fresh curd.'
    ],
    nutrition: {
      calories: 295,
      protein: 16,
      carbs: 42,
      fat: 6
    },
    timeToMake: '18 minutes'
  },
  {
    id: 'dn-nonveg-fish-steamed',
    name: 'Steamed Fish Fillet with Lemon Garlic & Bok Choy',
    slot: 'dinner',
    diet: ['non-veg'],
    goals: ['fat_loss', 'muscle_gain', 'maintenance', 'heart_healthy'],
    allergens: ['fish'],
    whyItFits: 'Ultra-lean, easily digestible marine protein packed with anti-inflammatory Omega-3 for deep restorative sleep.',
    ingredients: [
      '160g white fish fillet (basa, rohu, cod, or tilapia)',
      '1 cup bok choy or green beans',
      '1 tsp olive oil',
      '1 clove minced garlic & 1 tbsp fresh lemon juice',
      'Cracked black pepper, sea salt, and fresh dill/coriander'
    ],
    method: [
      'Marinate fish fillet with minced garlic, lemon juice, salt, and black pepper for 5 minutes.',
      'Steam fish and greens together in a steamer basket or parchment pouch for 8-10 minutes.',
      'Check that fish flakes easily with a fork.',
      'Drizzle with olive oil and serve fresh with lemon wedges.'
    ],
    nutrition: {
      calories: 280,
      protein: 34,
      carbs: 6,
      fat: 10
    },
    timeToMake: '15 minutes'
  },
  {
    id: 'dn-vegan-tofu-soup',
    name: 'Warm Tofu & Edamame Clear Vegetable Broth',
    slot: 'dinner',
    diet: ['vegan', 'veg', 'eggetarian'],
    goals: ['fat_loss', 'maintenance', 'low_sugar'],
    allergens: ['soy'],
    whyItFits: 'Hydrating, low-calorie, and stomach-soothing with 20g complete plant protein and gut-friendly ginger broth.',
    ingredients: [
      '150g soft/firm tofu (cut into bite-sized cubes)',
      '1/2 cup shelled edamame or green peas',
      '1 cup shredded cabbage, carrots, and mushrooms',
      '1 inch ginger (crushed) & 1 clove garlic',
      '2.5 cups vegetable broth or water',
      '1 tsp tamari / soy sauce & squeeze of lemon'
    ],
    method: [
      'In a soup pot, bring vegetable broth to a simmer with crushed ginger and garlic.',
      'Add shredded cabbage, carrots, mushrooms, and edamame; simmer for 5 minutes.',
      'Gently slide in tofu cubes and add soy sauce with a pinch of black pepper.',
      'Simmer for 2 more minutes, finish with fresh lemon, and sip piping hot.'
    ],
    nutrition: {
      calories: 240,
      protein: 21,
      carbs: 15,
      fat: 9
    },
    timeToMake: '14 minutes'
  },

  // ==========================================
  // BEDTIME (After 22:00) - Light, calming only
  // ==========================================
  {
    id: 'bt-veg-golden-milk',
    name: 'Warm Turmeric Golden Milk with Crushed Almonds',
    slot: 'bedtime',
    diet: ['veg', 'eggetarian'],
    goals: ['fat_loss', 'muscle_gain', 'maintenance', 'high_energy'],
    allergens: ['dairy', 'nuts'],
    whyItFits: 'Tryptophan and curcumin promote deep restful sleep while providing slow night-time protein.',
    ingredients: [
      '1 cup warm low-fat milk (or unsweetened almond milk for vegan)',
      '1/4 tsp organic turmeric powder',
      'Pinch of black pepper (enhances curcumin absorption by 2000%)',
      'Pinch of nutmeg or cardamom powder',
      '4 crushed raw almonds'
    ],
    method: [
      'Warm milk in a small saucepan over medium heat.',
      'Whisk in turmeric powder, black pepper, and cardamom.',
      'Pour into a cup and top with crushed almonds.',
      'Sip warm 30 minutes before sleep.'
    ],
    nutrition: {
      calories: 145,
      protein: 8,
      carbs: 12,
      fat: 6
    },
    timeToMake: '5 minutes'
  },
  {
    id: 'bt-vegan-chamomile-walnuts',
    name: 'Calming Chamomile Infusion & Handful of Walnuts',
    slot: 'bedtime',
    diet: ['vegan', 'veg', 'eggetarian', 'non-veg'],
    goals: ['fat_loss', 'maintenance', 'heart_healthy'],
    allergens: ['nuts'],
    whyItFits: 'Zero sugar, herbal relaxation paired with natural plant melatonin to induce soothing circadian sleep.',
    ingredients: [
      '1 cup hot brewed chamomile tea (caffeine-free)',
      '4 whole walnut halves (rich in natural melatonin)'
    ],
    method: [
      'Steep chamomile tea bag in hot water for 4-5 minutes.',
      'Remove tea bag without adding any sweetener.',
      'Nibble the walnuts alongside warm tea.'
    ],
    nutrition: {
      calories: 110,
      protein: 3,
      carbs: 2,
      fat: 10
    },
    timeToMake: '4 minutes'
  }
];

/**
 * Determine Meal Slot strictly according to the specified rule:
 * - 5:00 - 10:59 -> Breakfast
 * - 11:00 - 11:59 -> Mid-morning snack
 * - 12:00 - 15:29 -> Lunch
 * - 15:30 - 18:29 -> Evening snack
 * - 18:30 - 22:00 -> Dinner (lighter, easy to digest)
 * - After 22:00 (22:01 - 04:59) -> Light bedtime option only
 */
export function getMealSlotFromTime(date = new Date()) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const totalMins = hours * 60 + minutes;

  if (totalMins >= 300 && totalMins < 660) {
    return {
      id: 'breakfast',
      label: 'Breakfast',
      timeRange: '5:00 AM – 10:59 AM',
      icon: '🌅',
      note: 'Fuel your morning metabolism with high-fiber protein'
    };
  }
  if (totalMins >= 660 && totalMins < 720) {
    return {
      id: 'mid_morning',
      label: 'Mid-Morning Snack',
      timeRange: '11:00 AM – 11:59 AM',
      icon: '☀️',
      note: 'Bridge the energy gap and sharpen focus before lunch'
    };
  }
  if (totalMins >= 720 && totalMins < 930) {
    return {
      id: 'lunch',
      label: 'Lunch',
      timeRange: '12:00 PM – 3:29 PM',
      icon: '🍲',
      note: 'Balanced main meal for sustained afternoon stamina'
    };
  }
  if (totalMins >= 930 && totalMins < 1110) {
    return {
      id: 'evening_snack',
      label: 'Evening Snack',
      timeRange: '3:30 PM – 6:29 PM',
      icon: '☕',
      note: 'Healthy bite to beat afternoon cravings and stay energized'
    };
  }
  if (totalMins >= 1110 && totalMins <= 1320) {
    return {
      id: 'dinner',
      label: 'Dinner',
      timeRange: '6:30 PM – 10:00 PM',
      icon: '🌙',
      note: 'Lighter, easy to digest to promote restful recovery'
    };
  }
  // After 22:00 (10:01 PM - 4:59 AM)
  return {
    id: 'bedtime',
    label: 'Bedtime Option',
    timeRange: 'After 10:00 PM',
    icon: '✨',
    note: 'Gentle, soothing option only (curd, milk, nuts, chamomile)'
  };
}

/**
 * Filter and score recipes matching user profile:
 * - Never break diet type (veg cannot have non-veg or eggs; eggetarian cannot have non-veg)
 * - Never suggest allergies/dislikes
 * - Score matching goal
 */
export function getRecommendedRecipes(slotId, profile, count = 2) {
  const {
    dietType = 'veg',
    goal = 'fat_loss',
    allergies = [],
    eatenFoods = []
  } = profile;

  const allergyList = allergies.map(a => a.toLowerCase().trim());
  const eatenList = eatenFoods.map(e => e.toLowerCase().trim());

  // 1. Filter by slot
  let candidates = ADVISER_RECIPES.filter(r => r.slot === slotId);

  // If slot has very few, allow adjacent slot items adaptively
  if (candidates.length === 0) {
    candidates = ADVISER_RECIPES;
  }

  // 2. Strict Diet Type Filtering
  candidates = candidates.filter(recipe => {
    if (dietType === 'veg') {
      return recipe.diet.includes('veg') && !recipe.diet.includes('non-veg');
    }
    if (dietType === 'vegan') {
      return recipe.diet.includes('vegan');
    }
    if (dietType === 'eggetarian') {
      return recipe.diet.includes('veg') || recipe.diet.includes('eggetarian');
    }
    // non-veg can eat any recipe
    return true;
  });

  // 3. Strict Allergy Filtering
  if (allergyList.length > 0) {
    candidates = candidates.filter(recipe => {
      const hasAllergen = recipe.allergens.some(a => allergyList.includes(a.toLowerCase()));
      if (hasAllergen) return false;

      // Also check ingredient text against dislikes
      const ingredientsText = recipe.ingredients.join(' ').toLowerCase();
      const hasDislike = allergyList.some(dislike => dislike.length > 2 && ingredientsText.includes(dislike));
      return !hasDislike;
    });
  }

  // 4. Avoid exact duplicate foods eaten earlier today
  if (eatenList.length > 0) {
    candidates = candidates.filter(recipe => {
      const nameLower = recipe.name.toLowerCase();
      return !eatenList.some(eaten => eaten.length > 2 && nameLower.includes(eaten));
    });
  }

  // 5. Score matching goal
  const scored = candidates.map(recipe => {
    let score = 0;
    if (recipe.goals.includes(goal)) score += 10;
    return { recipe, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, count).map(s => s.recipe);
}

/**
 * Helpful contextual nutrition tips based on time slot and goal
 */
export const ADVISER_TIPS = {
  breakfast: 'Drink a glass of warm water before breakfast to activate your digestion.',
  mid_morning: 'Pair mid-morning snacks with water or herbal infusion to stay hydrated.',
  lunch: 'Chew slowly and take a short 10-minute relaxed stroll after lunch to prevent glucose spikes.',
  evening_snack: 'Avoid sugary beverages during tea-time; opt for roasted snacks or protein sips.',
  dinner: 'Finish dinner at least 1.5 to 2 hours before bedtime so your body rests instead of digesting.',
  bedtime: 'Keep your bedtime intake small and soothing to ensure sound, unbroken REM sleep.'
};
