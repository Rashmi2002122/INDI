/**
 * Comprehensive Recipe Database for Personal Food Adviser.
 * Tagged by meal slot, diet type, goals, ingredients, allergens, and preparation time.
 * Total Authentic Indian Recipes: 124
 */

export const ADVISER_RECIPES = [
  {
    "id": "bf-veg-paneer-bhurji",
    "name": "High-Protein Paneer Bhurji with Multigrain Toast",
    "slot": "breakfast",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "maintenance",
      "high_energy"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Packed with 26g of fresh vegetarian protein and complex carbs to ignite your morning metabolism.",
    "ingredients": [
      "150g fresh low-fat paneer (crumbled)",
      "1 small onion & 1 medium tomato (finely chopped)",
      "1 green chilli & 1/2 tsp grated ginger",
      "1/2 tsp turmeric powder & 1/2 tsp garam masala",
      "1 tsp cold-pressed mustard oil or olive oil",
      "1 slice 100% multigrain or sourdough bread",
      "Fresh coriander leaves for garnish"
    ],
    "method": [
      "Heat 1 tsp oil in a pan, add ginger, green chillies, and chopped onions until soft and translucent.",
      "Add chopped tomatoes, turmeric, and salt. Cook for 2-3 minutes until tomatoes turn mushy.",
      "Toss in crumbled paneer and garam masala. Sauté gently on medium heat for 2-3 minutes.",
      "Garnish with freshly chopped coriander and serve hot alongside a lightly toasted multigrain bread slice."
    ],
    "nutrition": {
      "calories": 360,
      "protein": 26,
      "carbs": 24,
      "fat": 16
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-moong-chilla",
    "name": "Spinach & Moong Dal Chilla with Mint Chutney",
    "slot": "breakfast",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "high_energy",
      "low_sugar"
    ],
    "allergens": [],
    "whyItFits": "100% plant-based, gluten-free, and rich in slow-digesting fiber to keep cravings away until lunchtime.",
    "ingredients": [
      "1/2 cup yellow moong dal (soaked 2 hours, ground to batter)",
      "1/2 cup finely shredded fresh spinach (palak)",
      "1/2 tsp grated ginger & pinch of hing (asafoetida)",
      "1/2 tsp cumin powder & pink rock salt to taste",
      "1 tsp cold-pressed oil for pan-searing",
      "2 tbsp homemade mint-coriander chutney"
    ],
    "method": [
      "Mix shredded spinach, ginger, hing, cumin powder, and salt directly into the blended moong dal batter.",
      "Heat a non-stick or seasoned cast iron tawa on medium heat and smear a few drops of oil.",
      "Pour a ladle of batter and spread into a thin, round crepe (chilla). Cook for 2 minutes until crisp.",
      "Flip gently, lightly brown the second side, and serve warm with refreshing fresh mint chutney."
    ],
    "nutrition": {
      "calories": 275,
      "protein": 16,
      "carbs": 38,
      "fat": 5
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-poha",
    "name": "Peanut & Veggie Flattened Rice (Kanda Batata Poha)",
    "slot": "breakfast",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy",
      "heart_healthy"
    ],
    "allergens": [
      "peanuts"
    ],
    "whyItFits": "Light, iron-rich, and easily digestible complex carbohydrates balanced with roasted crunchy peanuts.",
    "ingredients": [
      "1 cup thick poha (rinsed and drained in a colander)",
      "2 tbsp roasted crunchy peanuts",
      "1 small onion & 1/4 cup boiled diced potato/carrots",
      "1/2 tsp mustard seeds & 6-8 fresh curry leaves",
      "1/2 tsp turmeric powder & 1 green chilli slit",
      "1 tsp cold-pressed peanut or sunflower oil",
      "Juice of 1/2 lemon and fresh coriander"
    ],
    "method": [
      "Rinse poha in a strainer for 30 seconds and let drain until soft and fluffy.",
      "Heat 1 tsp oil; splutter mustard seeds, curry leaves, and green chillies. Add onions and sauté until translucent.",
      "Add boiled veggies, roasted peanuts, turmeric, and salt. Stir well for 1 minute.",
      "Gently fold in the softened poha, cover with lid on low flame for 2 minutes, then turn off heat.",
      "Squeeze fresh lemon juice, garnish with coriander leaves, and serve warm."
    ],
    "nutrition": {
      "calories": 310,
      "protein": 7,
      "carbs": 54,
      "fat": 8
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-besan-chilla",
    "name": "Vegetable Besan Chilla with Grated Paneer Topping",
    "slot": "breakfast",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Nutrient-dense chickpea flour crepe topped with fresh protein-rich paneer to sustain energy levels.",
    "ingredients": [
      "1/2 cup besan (gram flour)",
      "1/4 cup finely chopped onion, capsicum, and tomato",
      "30g fresh paneer (grated on top)",
      "1/4 tsp ajwain (carom seeds) & 1/4 tsp turmeric",
      "1 tsp cold-pressed oil",
      "Pink salt and green chilli to taste"
    ],
    "method": [
      "Whisk besan with water, ajwain, turmeric, chopped veggies, and salt into a smooth pouring consistency.",
      "Pour batter on a hot non-stick tawa and spread gently in concentric circles.",
      "Drizzle a few drops of oil around edges and cook for 2 minutes until underside turns golden.",
      "Flip and cook the reverse side for 1 minute. Turn back, sprinkle grated paneer on top, and fold into half."
    ],
    "nutrition": {
      "calories": 320,
      "protein": 18,
      "carbs": 32,
      "fat": 12
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-nonveg-egg-bhurji",
    "name": "Desi Masala Egg Bhurji (3 Eggs) with Whole Wheat Roti",
    "slot": "breakfast",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "high_energy"
    ],
    "allergens": [
      "eggs",
      "gluten"
    ],
    "whyItFits": "Provides 22g of premium bioavailable complete protein to kickstart anabolic muscle repair and satiety.",
    "ingredients": [
      "3 whole farm eggs (or 1 whole + 3 egg whites for strict fat loss)",
      "1 medium onion & 1 medium tomato (finely chopped)",
      "1 green chilli slit & 1/2 tsp grated ginger",
      "1/2 tsp turmeric powder & 1/2 tsp garam masala",
      "1 tsp cold-pressed mustard oil or olive oil",
      "1 soft whole wheat phulka or multigrain toast",
      "Handful of fresh coriander leaves"
    ],
    "method": [
      "Whisk eggs vigorously in a bowl with a pinch of salt and black pepper.",
      "Heat 1 tsp oil in a skillet, sauté ginger, green chillies, and onions until soft and golden brown.",
      "Add chopped tomatoes, turmeric, and garam masala; cook until oil gently separates.",
      "Pour in whisked eggs, lower the heat, and scramble gently with a wooden spatula until soft curds form.",
      "Garnish generously with fresh coriander and serve hot with a warm whole wheat phulka."
    ],
    "nutrition": {
      "calories": 345,
      "protein": 22,
      "carbs": 22,
      "fat": 17
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-nonveg-boiled-eggs-avocado",
    "name": "Classic Boiled Eggs (3 Eggs) with Spiced Multigrain Toast",
    "slot": "breakfast",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "eggs",
      "gluten"
    ],
    "whyItFits": "Zero-oil complete egg protein with slow carbs and essential choline for optimal brain focus.",
    "ingredients": [
      "3 large farm-fresh eggs (boiled to medium/hard)",
      "1 slice whole grain sourdough or 100% multigrain bread",
      "1/2 tsp black pepper & pinch of rock salt",
      "1/4 tsp chaat masala",
      "1 cup green tea with lemon slice"
    ],
    "method": [
      "Place eggs in boiling water for 8 minutes, shock in ice water, and peel cleanly.",
      "Slice eggs into halves and dust with rock salt, cracked black pepper, and tangy chaat masala.",
      "Toast the whole grain bread to golden crispness.",
      "Serve warm alongside an antioxidant-rich cup of freshly brewed green tea."
    ],
    "nutrition": {
      "calories": 290,
      "protein": 21,
      "carbs": 18,
      "fat": 14
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-nonveg-chicken-sandwich",
    "name": "Grilled Herb Chicken Breast Sandwich with Mint Spread",
    "slot": "breakfast",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "high_energy"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Lean shredded chicken breast loaded with 30g pure protein and zero empty mayonnaise calories.",
    "ingredients": [
      "120g boneless skinless chicken breast (boiled and shredded)",
      "2 slices 100% whole wheat sourdough bread",
      "2 tbsp homemade Greek yogurt mint chutney (zero mayo)",
      "1/4 cup crunchy cucumber & tomato slices",
      "1/4 tsp black pepper and oregano",
      "1/2 tsp olive oil for tawa grilling"
    ],
    "method": [
      "Toss shredded boiled chicken breast with mint chutney, black pepper, and oregano.",
      "Layer fresh cucumber and tomato slices between the bread slices along with the spiced chicken.",
      "Lightly brush skillet with 1/2 tsp olive oil and grill sandwich on medium heat for 2 minutes per side until golden.",
      "Slice diagonally and serve hot with fresh vegetable sticks."
    ],
    "nutrition": {
      "calories": 380,
      "protein": 32,
      "carbs": 36,
      "fat": 10
    },
    "timeToMake": "14 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-idli-sambar",
    "name": "Steamed South Indian Idlis (3 pcs) with Drumstick Veg Sambar",
    "slot": "breakfast",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Naturally fermented gut-friendly probiotics with slow-digesting toor dal lentils and fiber veggies.",
    "ingredients": [
      "3 steamed rice & urad dal idlis",
      "1 generous bowl homemade vegetable sambar (drumstick, pumpkin, tomato, toor dal)",
      "1 tbsp roasted coconut chutney"
    ],
    "method": [
      "Steam fermented batter into soft, pillowy idlis in an idli steamer for 10 minutes.",
      "Simmer toor dal with drumsticks, tomatoes, turmeric, and sambar masala until aromatic.",
      "Temper sambar with mustard seeds, curry leaves, and a pinch of hing.",
      "Serve steaming hot idlis immersed in fragrant sambar with a spoonful of coconut chutney."
    ],
    "nutrition": {
      "calories": 295,
      "protein": 11,
      "carbs": 56,
      "fat": 4
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-ragi-dosa",
    "name": "Crispy Ragi (Finger Millet) Dosa with Coconut-Mint Chutney",
    "slot": "breakfast",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Rich in organic plant calcium, iron, and lowest glycemic index to prevent blood sugar spikes.",
    "ingredients": [
      "1/2 cup ragi (finger millet) flour",
      "2 tbsp rice flour & 2 tbsp rava (sooji)",
      "1/4 cup finely chopped onions, green chillies & curry leaves",
      "1 tsp cumin seeds & salt to taste",
      "1 tsp cold-pressed oil for crisping",
      "2 tbsp fresh coconut chutney"
    ],
    "method": [
      "Mix ragi flour, rice flour, and rava with water into a thin, buttermilk-like runny batter.",
      "Stir in chopped onions, green chillies, curry leaves, and cumin seeds; let rest for 5 minutes.",
      "Pour batter from the outside inwards on a sizzling hot tawa to create lace-like net patterns.",
      "Drizzle a few drops of oil and cook on high heat until crisp and dark golden. Fold and serve hot."
    ],
    "nutrition": {
      "calories": 260,
      "protein": 6,
      "carbs": 46,
      "fat": 5
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-oats-upma",
    "name": "Vegetable Oats Upma with Cashews & Curry Leaves",
    "slot": "breakfast",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [
      "nuts"
    ],
    "whyItFits": "Beta-glucan soluble oats fiber proven to reduce LDL cholesterol and sustain digestive fullness.",
    "ingredients": [
      "1 cup rolled oats (dry roasted lightly for 2 minutes)",
      "1/2 cup mixed diced vegetables (carrots, green beans, green peas)",
      "6 cashew halves & 1/2 tsp mustard seeds",
      "1 green chilli, 1/2 inch ginger grated & 8 curry leaves",
      "1 tsp cold-pressed coconut oil or ghee",
      "Juice of half lemon and fresh coriander"
    ],
    "method": [
      "Heat 1 tsp oil in a pan; roast cashews until light golden, then remove and set aside.",
      "In the same pan, splutter mustard seeds, curry leaves, ginger, and green chillies.",
      "Add chopped veggies with salt and turmeric, add 1.5 cups water, and bring to a rolling boil.",
      "Pour in roasted rolled oats slowly while stirring continuously to prevent lumps.",
      "Cook covered on low flame for 3 minutes until fluffy. Top with crunchy cashews and lemon juice."
    ],
    "nutrition": {
      "calories": 285,
      "protein": 9,
      "carbs": 44,
      "fat": 8
    },
    "timeToMake": "14 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-dalia-upma",
    "name": "Broken Wheat (Dalia) Vegetable Khichdi Bowl",
    "slot": "breakfast",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "low_sugar"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Unrefined whole wheat grits loaded with b-complex vitamins and slow-releasing prebiotic fiber.",
    "ingredients": [
      "1/2 cup roasted broken wheat (dalia)",
      "1/4 cup yellow moong dal (rinsed)",
      "1/2 cup diced carrots, green beans, and tomatoes",
      "1/2 tsp cumin seeds & pinch of asafoetida (hing)",
      "1 tsp desi ghee or cold-pressed oil",
      "2 cups water & rock salt to taste"
    ],
    "method": [
      "Heat ghee in a pressure cooker; temper with cumin seeds and a pinch of hing.",
      "Add diced carrots, beans, and tomatoes with a pinch of turmeric and salt; sauté for 1 minute.",
      "Add roasted dalia, moong dal, and 2 cups water.",
      "Close cooker and cook for 2 whistles on medium flame. Let steam release naturally.",
      "Fluff with fork, garnish with coriander, and enjoy a warm, comforting breakfast bowl."
    ],
    "nutrition": {
      "calories": 290,
      "protein": 11,
      "carbs": 50,
      "fat": 5
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-vegan-tofu-scramble",
    "name": "Indian Masala Tofu Scramble with Turmeric & Phulka",
    "slot": "breakfast",
    "diet": [
      "vegan",
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "high_energy"
    ],
    "allergens": [
      "soy",
      "gluten"
    ],
    "whyItFits": "100% dairy-free plant protein delivering 24g protein with zero lactose and minimal saturated fat.",
    "ingredients": [
      "150g firm organic tofu (crumbled coarsely)",
      "1 small onion & 1 medium tomato (finely chopped)",
      "1/2 tsp turmeric powder & 1/2 tsp cumin powder",
      "1 green chilli, 1/2 tsp ginger garlic paste",
      "1 tsp cold-pressed sesame or olive oil",
      "1 whole wheat roti (phulka)",
      "Coriander and lemon juice"
    ],
    "method": [
      "Heat oil in a pan, sauté onions, green chilli, and ginger garlic paste until fragrant.",
      "Add chopped tomatoes, turmeric, cumin powder, and salt. Cook until softened.",
      "Add crumbled tofu and toss gently on high heat for 3-4 minutes to absorb all spices.",
      "Turn off flame, add lemon juice and fresh coriander, and serve hot with a soft phulka."
    ],
    "nutrition": {
      "calories": 320,
      "protein": 24,
      "carbs": 24,
      "fat": 13
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-nonveg-egg-white-omelette",
    "name": "Fluffy Triple Egg White & Mushroom Omelette",
    "slot": "breakfast",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain"
    ],
    "allergens": [
      "eggs",
      "gluten"
    ],
    "whyItFits": "Pure lean protein powerhouse with near-zero fat and low calories, ideal for intense fat burning.",
    "ingredients": [
      "3 large egg whites + 1 whole egg",
      "1/2 cup button mushrooms (thinly sliced)",
      "1/4 cup baby spinach leaves",
      "1/4 tsp crushed black pepper & pinch of sea salt",
      "1/2 tsp olive oil for pan",
      "1 slice multigrain toast"
    ],
    "method": [
      "Whisk egg whites and whole egg vigorously until frothy with salt and black pepper.",
      "Sauté mushrooms and spinach in 1/2 tsp olive oil on a non-stick pan for 2 minutes until tender.",
      "Pour whisked eggs evenly over the mushrooms and cook on medium-low flame.",
      "Fold gently into a crescent moon when the base sets, and serve with toasted multigrain bread."
    ],
    "nutrition": {
      "calories": 270,
      "protein": 23,
      "carbs": 16,
      "fat": 8
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-sprouts-poha",
    "name": "Moong Sprouts & Green Peas Poha Bowl",
    "slot": "breakfast",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "high_energy"
    ],
    "allergens": [],
    "whyItFits": "Doubles the protein and micronutrients of classic poha by infusing living moong sprouts and green peas.",
    "ingredients": [
      "3/4 cup thick flattened rice (poha, rinsed)",
      "1/2 cup sprouted green moong beans",
      "1/4 cup fresh sweet green peas",
      "1 small onion & 6 curry leaves",
      "1/2 tsp turmeric, mustard seeds & slit green chilli",
      "1 tsp cold-pressed oil & lemon juice"
    ],
    "method": [
      "Heat oil; splutter mustard seeds, curry leaves, and green chillies. Add onions and sauté until translucent.",
      "Add moong sprouts and green peas with turmeric and salt; steam for 3 minutes until tender.",
      "Gently fold in the rinsed, drained poha and steam on low flame for 2 minutes.",
      "Finish with fresh lime juice and coriander."
    ],
    "nutrition": {
      "calories": 290,
      "protein": 13,
      "carbs": 48,
      "fat": 5
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-dosa-sambar",
    "name": "Crispy Plain Rice-Urad Dosa with Veg Sambar & Chutney",
    "slot": "breakfast",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy"
    ],
    "allergens": [],
    "whyItFits": "Traditional fermented breakfast providing clean sustained carbs for active morning energy.",
    "ingredients": [
      "1 crispy homemade paper dosa (made from fermented batter)",
      "1 small bowl homemade toor dal sambar",
      "1 tbsp fresh tomato onion chutney",
      "1 tsp sesame oil or ghee for roasting"
    ],
    "method": [
      "Heat a seasoned cast-iron dosa tawa, pour a ladle of fermented batter and spread thinly in circles.",
      "Drizzle 1 tsp oil around perimeter and cook until underside turns crisp golden brown.",
      "Roll neatly and serve hot with piping warm vegetable sambar and tangy chutney."
    ],
    "nutrition": {
      "calories": 280,
      "protein": 8,
      "carbs": 50,
      "fat": 6
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-nonveg-akuri",
    "name": "Parsi Akuri (Spiced Soft-Scrambled Eggs) with Toast",
    "slot": "breakfast",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "high_energy"
    ],
    "allergens": [
      "eggs",
      "dairy",
      "gluten"
    ],
    "whyItFits": "Velvety Parsi-style creamy scrambled eggs with fresh mint, coriander, and gut-healthy ginger.",
    "ingredients": [
      "3 fresh farm eggs",
      "1 small onion, 1 green chilli & 1 small tomato",
      "1 tbsp fresh mint & 2 tbsp fresh coriander leaves",
      "1/4 tsp turmeric & 1/4 tsp red chilli powder",
      "1 tsp desi ghee",
      "1 slice toasted whole wheat bread"
    ],
    "method": [
      "Melt ghee in a pan, sauté onions, green chilli, and ginger until sweet and soft.",
      "Add tomatoes, mint, and spices; cook for 1 minute.",
      "Whisk eggs lightly and pour into pan; cook on very low flame while constantly stirring gently until soft and custardy.",
      "Remove from heat immediately before eggs dry out and serve with toast."
    ],
    "nutrition": {
      "calories": 340,
      "protein": 20,
      "carbs": 18,
      "fat": 19
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-paneer-paratha",
    "name": "Low-Oil Stuffed Paneer Paratha with Fresh Curd",
    "slot": "breakfast",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "high_energy"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Wholesome whole wheat flatbread stuffed with spiced cottage cheese for long-lasting energy.",
    "ingredients": [
      "1 whole wheat dough ball (atta)",
      "80g low-fat paneer (grated and spiced with ajwain, coriander, and green chillies)",
      "1 tsp desi ghee for tawa roasting",
      "1/2 cup fresh dahi (curd)"
    ],
    "method": [
      "Roll whole wheat dough ball, fill with seasoned crumbled paneer, and seal tightly.",
      "Roll flat gently and cook on hot tawa with 1 tsp ghee until golden on both sides.",
      "Serve with a bowl of cooling homemade curd."
    ],
    "nutrition": {
      "calories": 380,
      "protein": 21,
      "carbs": 42,
      "fat": 15
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-vegan-soya-bhurji",
    "name": "Spiced Soya Granule Bhurji with Toast",
    "slot": "breakfast",
    "diet": [
      "vegan",
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [
      "soy",
      "gluten"
    ],
    "whyItFits": "Soya granules deliver an unmatched 32g of plant protein per serving with almost zero saturated fat.",
    "ingredients": [
      "1 cup rehydrated soya granules (boiled and squeezed dry)",
      "1 small onion & 1 tomato (chopped)",
      "1/2 tsp ginger garlic paste",
      "1/2 tsp pav bhaji masala & turmeric",
      "1 tsp cold-pressed oil",
      "1 slice whole grain bread"
    ],
    "method": [
      "Heat oil, sauté onions and ginger-garlic paste until aromatic.",
      "Add tomatoes, pav bhaji masala, turmeric, and salt. Cook until soft.",
      "Toss in squeezed soya granules and stir-fry for 4-5 minutes until flavors combine.",
      "Garnish with coriander and serve hot with toast."
    ],
    "nutrition": {
      "calories": 330,
      "protein": 32,
      "carbs": 28,
      "fat": 8
    },
    "timeToMake": "14 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-uttapam",
    "name": "Mini Vegetable & Onion Uttapams (Set of 2)",
    "slot": "breakfast",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy"
    ],
    "allergens": [],
    "whyItFits": "Thick, fermented rice and urad dal savory pancakes studded with antioxidant-rich onions, tomatoes, and coriander.",
    "ingredients": [
      "1 cup fermented dosa/idli batter",
      "1/2 cup finely chopped onion, tomato, and carrot",
      "1 green chilli & fresh coriander",
      "1 tsp sesame oil for tawa",
      "2 tbsp tomato-onion chutney"
    ],
    "method": [
      "Pour two small thick rounds of batter on a hot greased tawa.",
      "Immediately top with chopped vegetables and press gently with spatula.",
      "Drizzle a few drops of sesame oil, flip when base is golden, and cook until veggies are caramelized."
    ],
    "nutrition": {
      "calories": 310,
      "protein": 8,
      "carbs": 56,
      "fat": 6
    },
    "timeToMake": "14 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-nonveg-egg-appam",
    "name": "Kerala Egg Appam with Vegetable Stew",
    "slot": "breakfast",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy"
    ],
    "allergens": [
      "eggs"
    ],
    "whyItFits": "Crispy-edged, bowl-shaped fermented rice appam with an egg steamed softly in the center, paired with coconut stew.",
    "ingredients": [
      "1 fermented rice appam with 1 egg dropped in the fluffy center",
      "1/2 cup coconut-milk vegetable stew (potato, carrot, green peas, ginger)",
      "Salt and cracked black pepper"
    ],
    "method": [
      "Swirl appam batter in an appachatti pan, crack a fresh egg into the center, and cover with lid.",
      "Steam until egg white is set and yolk is soft.",
      "Serve warm alongside lightly spiced Kerala vegetable stew."
    ],
    "nutrition": {
      "calories": 340,
      "protein": 14,
      "carbs": 48,
      "fat": 12
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-veg-methi-thepla",
    "name": "Fresh Methi Thepla (Set of 2) with Greek Curd",
    "slot": "breakfast",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "maintenance"
    ],
    "allergens": [
      "gluten",
      "dairy"
    ],
    "whyItFits": "Fenugreek leaves improve insulin sensitivity and digestion, combined with calcium-rich curd.",
    "ingredients": [
      "2 whole wheat & besan theplas kneaded with chopped fresh methi leaves, ajwain, and turmeric",
      "1/2 cup thick fresh curd (dahi)",
      "1/2 tsp roasted cumin powder on curd"
    ],
    "method": [
      "Roll spiced methi-wheat dough into thin flat discs.",
      "Cook on a hot tawa with a light smear of oil until brown speckles appear.",
      "Serve warm with a bowl of refreshing cold curd seasoned with roasted cumin."
    ],
    "nutrition": {
      "calories": 290,
      "protein": 10,
      "carbs": 42,
      "fat": 9
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bf-nonveg-chicken-poha",
    "name": "High-Protein Shredded Chicken Poha",
    "slot": "breakfast",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "high_energy"
    ],
    "allergens": [
      "peanuts"
    ],
    "whyItFits": "Combines the light ease of traditional poha with 28g of lean shredded chicken breast.",
    "ingredients": [
      "1 cup soaked flattened rice (poha)",
      "100g boiled and shredded chicken breast",
      "1 tbsp roasted peanuts, 1 small onion, curry leaves",
      "1/2 tsp turmeric, mustard seeds & green chilli",
      "1 tsp cold-pressed oil & lemon juice"
    ],
    "method": [
      "Heat oil; temper mustard seeds, curry leaves, and green chillies. Sauté onions until golden.",
      "Add boiled shredded chicken with turmeric, salt, and peanuts; toss for 2 minutes.",
      "Fold in softened poha, cover for 2 minutes on low heat, and finish with fresh lemon juice."
    ],
    "nutrition": {
      "calories": 370,
      "protein": 28,
      "carbs": 42,
      "fat": 10
    },
    "timeToMake": "14 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-moong-sprouts-chaat",
    "name": "Lemon Coriander Moong Sprouts Chaat",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "high_energy",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Enzyme-rich living sprouts with vitamin C from fresh lemon juice provide clean fiber without insulin spikes.",
    "ingredients": [
      "1 cup sprouted green moong beans (steamed for 2 minutes)",
      "1/4 cup finely chopped cucumber and tomatoes",
      "1 green chilli & 2 tbsp chopped coriander",
      "1/2 tsp roasted cumin powder & chaat masala",
      "Juice of 1 fresh lemon"
    ],
    "method": [
      "Steam sprouts lightly for 2 minutes to make them gentle on digestion while preserving crunch.",
      "In a salad bowl, toss warm sprouts with cucumbers, tomatoes, green chilli, and coriander.",
      "Season with roasted jeera powder, pink rock salt, and chaat masala.",
      "Squeeze generous lemon juice, toss thoroughly, and eat immediately."
    ],
    "nutrition": {
      "calories": 155,
      "protein": 10,
      "carbs": 26,
      "fat": 1
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-nonveg-boiled-eggs-pepper",
    "name": "Boiled Farm Eggs (2 Eggs) with Pink Salt & Pepper",
    "slot": "mid_morning",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "eggs"
    ],
    "whyItFits": "Compact 13g of complete bioavailable protein with zero carbs to bridge hunger until lunch.",
    "ingredients": [
      "2 farm-fresh eggs (boiled medium/hard)",
      "1/4 tsp coarsely ground black pepper",
      "Pinch of Himalayan pink salt",
      "1 cup warm water or green tea"
    ],
    "method": [
      "Boil eggs in salted water for 7-8 minutes.",
      "Transfer to cold water, peel cleanly, and slice into halves.",
      "Sprinkle freshly crushed black pepper and pink salt over yolks and whites."
    ],
    "nutrition": {
      "calories": 145,
      "protein": 13,
      "carbs": 1,
      "fat": 10
    },
    "timeToMake": "8 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-roasted-makhana",
    "name": "Ghee-Roasted Pudina Phool Makhana (Foxnuts)",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Low-glycemic, anti-inflammatory lotus seeds rich in magnesium and free from refined carbs.",
    "ingredients": [
      "2 cups phool makhana (foxnuts)",
      "1/2 tsp pure A2 cow ghee",
      "1/2 tsp dry mint powder (pudina) & 1/4 tsp chaat masala",
      "Pink rock salt to taste"
    ],
    "method": [
      "Melt 1/2 tsp ghee in a wide heavy-bottom pan on low flame.",
      "Add makhana and roast slowly for 4-5 minutes stirring constantly until ultra-crisp.",
      "Turn off heat, immediately sprinkle mint powder, salt, and chaat masala, and toss well."
    ],
    "nutrition": {
      "calories": 140,
      "protein": 4,
      "carbs": 24,
      "fat": 3
    },
    "timeToMake": "6 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-kala-chana-chaat",
    "name": "Boiled Kala Chana Sundal & Tangy Chaat",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "low_sugar"
    ],
    "allergens": [],
    "whyItFits": "Dense black gram fiber and complex carbs keep insulin flat and eliminate pre-lunch snack cravings.",
    "ingredients": [
      "3/4 cup boiled black chickpeas (kala chana)",
      "1/4 cup diced onion and raw mango / tomatoes",
      "1/2 tsp mustard seeds & 6 curry leaves",
      "1/2 tsp cold-pressed oil",
      "Chaat masala & squeeze of lemon"
    ],
    "method": [
      "Heat oil in a pan, splutter mustard seeds and curry leaves.",
      "Toss in boiled kala chana with a pinch of turmeric and salt; sauté for 2 minutes.",
      "Transfer to a bowl, add diced onions, tomatoes/raw mango, chaat masala, and lemon."
    ],
    "nutrition": {
      "calories": 185,
      "protein": 9,
      "carbs": 30,
      "fat": 3
    },
    "timeToMake": "7 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-hung-curd-walnuts",
    "name": "Spiced Hung Curd (Greek Style) with Roasted Walnuts",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "maintenance"
    ],
    "allergens": [
      "dairy",
      "nuts"
    ],
    "whyItFits": "Probiotic-dense concentrated casein protein combined with omega-3 fatty acids for brain vitality.",
    "ingredients": [
      "3/4 cup thick hung dahi (Greek yogurt consistency)",
      "4 roasted walnut halves (broken)",
      "1/4 tsp roasted jeera powder & pinch of black salt",
      "Fresh mint leaves"
    ],
    "method": [
      "Whisk chilled hung curd until smooth and creamy in a glass bowl.",
      "Mix in roasted jeera powder, black salt, and torn fresh mint.",
      "Top with crushed toasted walnuts for a satisfying crunch."
    ],
    "nutrition": {
      "calories": 175,
      "protein": 12,
      "carbs": 7,
      "fat": 11
    },
    "timeToMake": "3 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-buttermilk-chia",
    "name": "Masala Chaas (Spiced Buttermilk) with Soaked Chia Seeds",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "low_sugar"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Cooling, digestive probiotic drink supercharged with soluble omega-3 chia seeds for hydration.",
    "ingredients": [
      "1.5 cups fresh churned buttermilk (chaas)",
      "1 tbsp chia seeds (soaked in water 15 minutes)",
      "1/2 tsp roasted cumin powder & black salt",
      "1 tsp finely chopped fresh mint and coriander"
    ],
    "method": [
      "Whisk buttermilk with roasted cumin powder, black salt, and herbs.",
      "Stir in the pre-soaked gelatinous chia seeds.",
      "Pour into a tall glass and sip chilled."
    ],
    "nutrition": {
      "calories": 115,
      "protein": 5,
      "carbs": 9,
      "fat": 5
    },
    "timeToMake": "4 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-steamed-dhokla",
    "name": "Light Spongy Khaman Dhokla with Mustard Tempering (2 pcs)",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy"
    ],
    "allergens": [],
    "whyItFits": "Steamed chickpea batter providing light, oil-free energy without heaviness.",
    "ingredients": [
      "2 square pieces of steamed besan dhokla",
      "1/2 tsp mustard seeds & 1 slit green chilli",
      "1/2 tsp oil for light tempering & fresh coriander",
      "1 tbsp mint chutney"
    ],
    "method": [
      "Steam seasoned besan batter in a steamer for 15 minutes until light and springy.",
      "Temper mustard seeds, green chillies, and curry leaves in minimal oil with 2 tbsp water.",
      "Pour tempering over dhokla squares and serve with mint chutney."
    ],
    "nutrition": {
      "calories": 160,
      "protein": 7,
      "carbs": 24,
      "fat": 4
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-peanut-chaat",
    "name": "Boiled Masala Peanut Salad with Cucumbers & Tomatoes",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "high_energy",
      "maintenance"
    ],
    "allergens": [
      "peanuts"
    ],
    "whyItFits": "Raw boiled peanuts retain healthy heart-protective monounsaturated fats with zero frying.",
    "ingredients": [
      "1/2 cup raw peanuts (boiled in salted water until soft)",
      "1/4 cup finely chopped cucumbers, onions, and tomatoes",
      "1/2 tsp chaat masala & lemon juice",
      "Fresh coriander leaves"
    ],
    "method": [
      "Boil peanuts with salt for 15 minutes until tender and drained.",
      "Toss warm peanuts with crunchy cucumbers, onions, and tomatoes.",
      "Season with chaat masala, lemon juice, and coriander."
    ],
    "nutrition": {
      "calories": 210,
      "protein": 10,
      "carbs": 12,
      "fat": 15
    },
    "timeToMake": "6 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-soya-tikki",
    "name": "Pan-Toasted Soya Veggie Cutlet (Set of 2)",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [
      "soy"
    ],
    "whyItFits": "High-density plant protein that rebuilds muscle tissue while keeping calorie count lean.",
    "ingredients": [
      "1/2 cup boiled minced soya granules",
      "2 tbsp boiled mashed potato or grated paneer for binding",
      "1/4 tsp garam masala, ginger, and green chilli",
      "1/2 tsp oil for pan searing",
      "Green coriander chutney"
    ],
    "method": [
      "Mash soya granules with spices, ginger, chillies, and binder; shape into 2 flat patties.",
      "Heat 1/2 tsp oil on a non-stick pan and sear patties on medium flame for 3 minutes per side until crisp.",
      "Serve with homemade mint dip."
    ],
    "nutrition": {
      "calories": 170,
      "protein": 15,
      "carbs": 14,
      "fat": 4
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-fruit-chaat",
    "name": "Papaya & Pomegranate Chaat with Chaat Masala",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "high_energy"
    ],
    "allergens": [],
    "whyItFits": "Papain enzymes aid stomach digestion, while ruby pomegranate arils deliver polyphenols.",
    "ingredients": [
      "1 cup ripe papaya cubes",
      "1/3 cup fresh pomegranate arils",
      "1/4 tsp chaat masala & pinch of black salt",
      "Juice of 1/2 lemon"
    ],
    "method": [
      "Cube ripe papaya and mix with fresh pomegranate seeds in a glass bowl.",
      "Sprinkle rock salt and chaat masala.",
      "Add lemon juice, toss, and serve fresh."
    ],
    "nutrition": {
      "calories": 120,
      "protein": 2,
      "carbs": 28,
      "fat": 0
    },
    "timeToMake": "4 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-paneer-cubes",
    "name": "Fresh Malai Paneer Cubes with Black Pepper & Mint",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "low_sugar"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Instant, clean slow-release vegetarian protein and healthy dietary fats without any cooking.",
    "ingredients": [
      "80g fresh soft paneer (cut into bite-sized cubes)",
      "1/4 tsp coarsely cracked black pepper",
      "Pinch of rock salt",
      "Fresh mint sprig & lemon wedge"
    ],
    "method": [
      "Cut fresh paneer into neat cubes.",
      "Dust with pink rock salt and freshly cracked black pepper.",
      "Squeeze 2 drops of fresh lemon and enjoy raw."
    ],
    "nutrition": {
      "calories": 190,
      "protein": 14,
      "carbs": 3,
      "fat": 14
    },
    "timeToMake": "2 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-nonveg-chicken-salad",
    "name": "Shredded Herb Chicken Breast & Cucumber Bowl",
    "slot": "mid_morning",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [],
    "whyItFits": "Pure lean protein shot with hydrating cucumbers, ideal for athletic muscle synthesis.",
    "ingredients": [
      "80g poached shredded chicken breast",
      "1/2 cup diced crunchy English cucumber",
      "1/4 tsp black pepper, roasted cumin & salt",
      "1 tsp lemon juice & coriander"
    ],
    "method": [
      "Toss shredded poached chicken with diced cucumber in a bowl.",
      "Add salt, black pepper, roasted cumin, and lemon juice.",
      "Garnish with coriander and consume chilled."
    ],
    "nutrition": {
      "calories": 150,
      "protein": 22,
      "carbs": 3,
      "fat": 3
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-ragi-buttermilk",
    "name": "Cooling Ragi Ambali (Malt) with Spiced Buttermilk",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "heart_healthy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Karnataka-style fermented finger millet drink that deeply hydrates and stabilizes core body heat.",
    "ingredients": [
      "2 tbsp ragi flour (cooked in 1 cup water until glossy)",
      "1 cup fresh buttermilk",
      "1/4 tsp roasted cumin & black salt",
      "1 finely chopped shallot & curry leaves"
    ],
    "method": [
      "Cool cooked ragi porridge to room temperature.",
      "Whisk thoroughly with fresh spiced buttermilk.",
      "Garnish with chopped shallot and curry leaves."
    ],
    "nutrition": {
      "calories": 130,
      "protein": 4,
      "carbs": 22,
      "fat": 2
    },
    "timeToMake": "8 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-almonds-dates",
    "name": "Soaked Mamra Almonds (6 pcs) & Medjool Date with Pumpkin Seeds",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy",
      "heart_healthy"
    ],
    "allergens": [
      "nuts"
    ],
    "whyItFits": "Natural raw minerals, vitamin E, and natural unrefined sugars for sustained mental alertness.",
    "ingredients": [
      "6 soaked and peeled almonds (badam)",
      "1 soft Medjool date (deseeded)",
      "1 tsp raw pumpkin seeds",
      "1 cup warm water"
    ],
    "method": [
      "Peel pre-soaked almonds.",
      "Pair with a soft pitted date and crunchy raw pumpkin seeds.",
      "Chew thoroughly alongside a glass of warm water."
    ],
    "nutrition": {
      "calories": 145,
      "protein": 4,
      "carbs": 18,
      "fat": 7
    },
    "timeToMake": "2 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-roasted-chana",
    "name": "Roasted Chana (Bhuna Chana) with Green Tea",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Traditional Indian desk snack with exceptional soluble fiber and natural polyphenols from green tea.",
    "ingredients": [
      "1/3 cup roasted dry chana with husk (bhuna chana)",
      "Pinch of rock salt & black pepper",
      "1 cup freshly brewed hot green tea"
    ],
    "method": [
      "Take a portion of crunchy roasted chana in a small snack bowl.",
      "Dust lightly with rock salt and black pepper.",
      "Sip hot antioxidant-loaded green tea alongside."
    ],
    "nutrition": {
      "calories": 135,
      "protein": 7,
      "carbs": 20,
      "fat": 2
    },
    "timeToMake": "3 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-sprouted-methi",
    "name": "Sprouted Fenugreek & Pomegranate Digestive Chaat",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "low_sugar",
      "fat_loss",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Sprouted methi drastically curbs insulin resistance, balanced by sweet pomegranate arils.",
    "ingredients": [
      "2 tbsp sprouted fenugreek seeds (methi dana)",
      "1/2 cup fresh pomegranate arils",
      "1/4 tsp rock salt & roasted jeera",
      "1 tsp lemon juice"
    ],
    "method": [
      "Mix crunchy sprouted methi seeds with sweet pomegranate arils.",
      "Toss with roasted jeera, salt, and lemon juice.",
      "Chew slowly to stimulate digestive fire."
    ],
    "nutrition": {
      "calories": 110,
      "protein": 3,
      "carbs": 23,
      "fat": 1
    },
    "timeToMake": "3 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-nonveg-egg-white-salad",
    "name": "Hard-Boiled Egg Whites (3 Whites) with Microgreens & Lemon",
    "slot": "mid_morning",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain"
    ],
    "allergens": [
      "eggs"
    ],
    "whyItFits": "11g of 100% fat-free protein with near-zero calories to maximize mid-morning fat burning.",
    "ingredients": [
      "3 hard-boiled egg whites (discard yolks)",
      "Handful of fresh microgreens or coriander",
      "1/4 tsp black salt & pepper",
      "Lemon juice"
    ],
    "method": [
      "Slice boiled egg whites into bite-sized quarters.",
      "Dust with black salt, cracked pepper, and lemon juice.",
      "Top with fresh microgreens."
    ],
    "nutrition": {
      "calories": 60,
      "protein": 11,
      "carbs": 1,
      "fat": 0
    },
    "timeToMake": "4 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mm-veg-coconut-water",
    "name": "Tender Coconut Water with Fresh Malai & Pumpkin Seeds",
    "slot": "mid_morning",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "high_energy",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [],
    "whyItFits": "Nature’s premier isotonic electrolyte drink rich in potassium, paired with healthy medium-chain fats.",
    "ingredients": [
      "1 glass fresh tender coconut water (daab/nariyal pani)",
      "2 tbsp tender coconut malai (kernel)",
      "1 tsp raw pumpkin seeds"
    ],
    "method": [
      "Pour chilled tender coconut water into a glass.",
      "Scoop fresh tender coconut malai and top with pumpkin seeds.",
      "Drink fresh immediately after opening."
    ],
    "nutrition": {
      "calories": 125,
      "protein": 3,
      "carbs": 15,
      "fat": 5
    },
    "timeToMake": "2 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-rajma-chawal",
    "name": "Punjabi Rajma Masala with Steamed Brown Rice & Sirka Onion",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance",
      "high_energy"
    ],
    "allergens": [],
    "whyItFits": "Kidney beans paired with unpolished rice form a complete essential amino acid profile with high satiety.",
    "ingredients": [
      "1 cup slow-cooked Jammu Rajma in spiced onion-tomato gravy",
      "3/4 cup steamed brown basmati rice",
      "Sirka pickled onions & fresh coriander garnish",
      "1 tsp cold-pressed mustard oil for cooking"
    ],
    "method": [
      "Boil pre-soaked red rajma with black cardamom and cinnamon until melt-in-mouth tender.",
      "Sauté ginger-garlic paste, onions, and ripe tomato puree with garam masala and coriander powder.",
      "Simmer rajma in gravy on low flame for 15 minutes, mashing a few beans for natural thickness.",
      "Serve steaming hot over a bed of steamed brown rice with crunchy pickled sirka onions."
    ],
    "nutrition": {
      "calories": 430,
      "protein": 18,
      "carbs": 74,
      "fat": 6
    },
    "timeToMake": "25 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-palak-paneer",
    "name": "Low-Oil Palak Paneer with Whole Wheat Phulkas (2 pcs)",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "low_sugar"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Iron-rich blanched spinach blended with 25g fresh paneer provides clean protein with near-zero sugar.",
    "ingredients": [
      "140g fresh low-fat paneer cubes",
      "2 cups fresh spinach leaves (blanched & pureed with green chilli)",
      "1 small onion, 1 tsp ginger-garlic paste",
      "1/2 tsp kasuri methi & pinch of garam masala",
      "1 tsp ghee or olive oil",
      "2 soft whole wheat phulkas"
    ],
    "method": [
      "Blanch spinach in boiling water for 2 minutes, shock in ice water, and blend with 1 green chilli.",
      "Heat ghee, sauté ginger-garlic and onions until translucent. Stir in spinach puree and salt.",
      "Add fresh paneer cubes and crushed kasuri methi; simmer gently for 3 minutes without discolouring.",
      "Serve hot alongside 2 fresh whole wheat phulkas."
    ],
    "nutrition": {
      "calories": 420,
      "protein": 25,
      "carbs": 42,
      "fat": 16
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-dal-tadka",
    "name": "Yellow Moong & Arhar Dal Tadka with Jeera Rice & Salad",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Light, comforting, easy-to-digest lentils tempered with cumin and garlic to relieve gut inflammation.",
    "ingredients": [
      "1 generous bowl yellow moong & toor dal cooked with turmeric",
      "1 tsp desi ghee for tadka with cumin seeds, garlic cloves, hing, and dry red chilli",
      "3/4 cup steamed jeera rice",
      "1 bowl sliced cucumber, tomato, and carrot salad"
    ],
    "method": [
      "Pressure cook toor and moong dal with turmeric, tomato, and salt until creamy.",
      "In a tadka pan, heat ghee; add jeera, minced garlic, hing, and Kashmiri red chilli powder until aromatic.",
      "Pour sizzling tadka over hot dal and cover immediately with lid to lock in aroma.",
      "Serve with fragrant jeera rice and a large crunchy cucumber salad."
    ],
    "nutrition": {
      "calories": 380,
      "protein": 16,
      "carbs": 62,
      "fat": 7
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-chole-bhatura-fit",
    "name": "Low-Oil Amritsari Chole with Multigrain Roti & Curd",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Tea-infused dark chickpeas simmered with anardana (pomegranate seeds) delivering high fiber and protein.",
    "ingredients": [
      "1 cup boiled Kabuli chana (chickpeas) cooked with tea bag and Indian whole spices",
      "1/2 tsp anardana powder, chole masala, ginger juliennes",
      "1 tsp cold-pressed mustard oil",
      "2 multigrain rotis (whole wheat + oats + ragi)",
      "1/2 cup fresh dahi (curd)"
    ],
    "method": [
      "Boil chickpeas with black tea bag for rich dark color and deep earthy flavor.",
      "Prepare spicy tomato-anardana gravy in 1 tsp mustard oil; add boiled chickpeas and simmer for 15 minutes.",
      "Top with fresh ginger juliennes and slit green chillies.",
      "Serve alongside warm multigrain rotis and soothing homemade curd."
    ],
    "nutrition": {
      "calories": 460,
      "protein": 20,
      "carbs": 70,
      "fat": 10
    },
    "timeToMake": "22 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-nonveg-chicken-curry",
    "name": "Homestyle Tariwala Chicken Curry with Steamed Rice",
    "slot": "lunch",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "high_energy"
    ],
    "allergens": [],
    "whyItFits": "Tender chicken breast simmered in a light, spiced broth delivering 34g of muscle-building complete protein.",
    "ingredients": [
      "160g skinless bone-in or boneless chicken breast",
      "1 medium onion & 2 ripe tomatoes (pureed)",
      "1 tbsp ginger-garlic paste",
      "1/2 tsp turmeric, coriander powder, cumin powder & garam masala",
      "1 tsp mustard oil",
      "3/4 cup steamed rice & fresh coriander"
    ],
    "method": [
      "Heat 1 tsp mustard oil, sauté onions and ginger-garlic until deep golden brown.",
      "Add tomato puree and spices; cook until oil releases gently.",
      "Add chicken pieces, sear for 4 minutes, then add 1.5 cups water and pressure cook for 3 whistles.",
      "Garnish thin fragrant curry (tari) with fresh coriander and serve over steamed rice."
    ],
    "nutrition": {
      "calories": 450,
      "protein": 36,
      "carbs": 48,
      "fat": 11
    },
    "timeToMake": "25 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-nonveg-fish-curry",
    "name": "Bengali Rohu / Surmai Macher Jhol with Fragrant Rice",
    "slot": "lunch",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [
      "fish"
    ],
    "whyItFits": "Light, digestive fish stew tempered with nigella seeds (kalonji) delivering clean omega-3 fatty acids.",
    "ingredients": [
      "150g fresh fish steak (Rohu, Katla, or Surmai)",
      "1/2 cup potato and pointed gourd (parwal) or cauliflower wedges",
      "1/2 tsp kalonji (nigella seeds) & 2 green chillies",
      "1/2 tsp turmeric & cumin paste",
      "1 tsp cold-pressed mustard oil",
      "3/4 cup steamed basmati rice"
    ],
    "method": [
      "Rub fish lightly with turmeric and salt; lightly sear in 1 tsp mustard oil for 1 minute per side.",
      "In the same pan, temper kalonji and slit green chillies; sauté vegetables with cumin paste and turmeric.",
      "Add warm water, bring to a gentle simmer until vegetables are tender, then slide fish steaks in.",
      "Simmer for 3 minutes and serve this medicinal light fish stew with steamed rice."
    ],
    "nutrition": {
      "calories": 395,
      "protein": 30,
      "carbs": 46,
      "fat": 9
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-nonveg-egg-curry",
    "name": "Spicy Dhaba-Style Egg Curry (3 Eggs) with Warm Rotis",
    "slot": "lunch",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "eggs",
      "gluten"
    ],
    "whyItFits": "Wholesome hard-boiled eggs in onion-tomato gravy with 21g complete protein and vital micronutrients.",
    "ingredients": [
      "3 hard-boiled eggs (pricked with fork)",
      "1 medium onion & 1 tomato (finely minced)",
      "1 tsp ginger-garlic paste & 1/2 tsp kasuri methi",
      "1/2 tsp turmeric, red chilli & coriander powder",
      "1 tsp oil",
      "2 whole wheat phulkas"
    ],
    "method": [
      "Prick boiled eggs, dust with pinch of turmeric/chilli, and pan-sear for 1 minute until blistered.",
      "Heat oil, cook onions until golden brown, add ginger-garlic, tomato, and ground spices.",
      "Add 1/2 cup water to create a semi-thick gravy, slide in the eggs, and simmer for 4 minutes.",
      "Crush kasuri methi on top and serve hot with whole wheat phulkas."
    ],
    "nutrition": {
      "calories": 430,
      "protein": 22,
      "carbs": 42,
      "fat": 19
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-soya-curry",
    "name": "High-Protein Nutri Soya Chunks Curry with Missi Roti",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [
      "soy",
      "gluten"
    ],
    "whyItFits": "One of the densest plant protein meals in Indian cuisine, packing 35g protein to support hypertrophy.",
    "ingredients": [
      "1 cup soya chunks (boiled, rinsed and squeezed firmly dry)",
      "1 medium onion & 2 tomatoes (pureed)",
      "1/2 tsp kitchen king masala & 1/2 tsp turmeric",
      "1 tsp cold-pressed oil",
      "2 missi rotis (chickpea flour + whole wheat)",
      "Fresh coriander"
    ],
    "method": [
      "Boil soya chunks in salted water for 5 minutes, rinse under cold water, and squeeze all excess water out.",
      "Sauté onions and ginger-garlic in 1 tsp oil, add tomato puree and kitchen king masala.",
      "Fold in soya chunks, add 1 cup water, and simmer for 10 minutes to allow chunks to absorb gravy flavors.",
      "Serve warm with mineral-rich missi rotis."
    ],
    "nutrition": {
      "calories": 440,
      "protein": 35,
      "carbs": 54,
      "fat": 8
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-paneer-tikka-bowl",
    "name": "Tandoori Paneer Tikka Rice Bowl with Mint Raita",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance",
      "high_energy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Smoky spiced cottage cheese with bell peppers and basmati rice, balanced with cooling probiotics.",
    "ingredients": [
      "120g low-fat paneer cubes",
      "1/2 cup diced capsicum and red onions",
      "2 tbsp curd marinade with ajwain, tandoori masala, and lemon juice",
      "3/4 cup steamed basmati rice",
      "1/2 cup cucumber mint raita"
    ],
    "method": [
      "Marinate paneer, bell pepper, and onions in spiced curd for 10 minutes.",
      "Pan-sear on a hot grill pan for 4-5 minutes until smoky charred marks appear.",
      "Assemble in a bowl over steamed basmati rice.",
      "Serve alongside a fresh bowl of chilled mint cucumber raita."
    ],
    "nutrition": {
      "calories": 460,
      "protein": 26,
      "carbs": 52,
      "fat": 15
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-sambar-rice",
    "name": "Udupi Vegetable Sambar with Red Rice & Cabbage Poriyal",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [],
    "whyItFits": "Traditional South Indian lunch combining anti-inflammatory spices, fiber-dense vegetables, and low-GI red rice.",
    "ingredients": [
      "1 bowl drumstick, shallot, and carrot sambar (toor dal based)",
      "3/4 cup steamed unpolished red rice (Kerala matta / brown rice)",
      "1/2 cup coconut-tempered cabbage poriyal",
      "1 roasted urad papad"
    ],
    "method": [
      "Simmer toor dal with shallots, drumstick, tamarind pulp, and freshly ground sambar spices.",
      "Temper with mustard seeds, curry leaves, and asafoetida.",
      "Sauté cabbage with mustard, urad dal, and grated coconut for poriyal.",
      "Serve steaming hot over red rice with crunchy roasted papad."
    ],
    "nutrition": {
      "calories": 390,
      "protein": 14,
      "carbs": 68,
      "fat": 6
    },
    "timeToMake": "22 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-kadhi-khichdi",
    "name": "Gujarati Dahi Kadhi with Moong Dal Khichdi",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Gentle, comforting curd-and-besan kadhi with moong khichdi, soothing the stomach and aiding nutrient absorption.",
    "ingredients": [
      "1 cup buttermilk-besan kadhi tempered with ginger, cinnamon, and cloves",
      "1 cup soft yellow moong dal khichdi",
      "1 tsp pure desi ghee",
      "Green chili pickle & roasted papad"
    ],
    "method": [
      "Whisk sour curd and besan with water; simmer with ginger, green chilli, and turmeric.",
      "Temper with ghee, mustard seeds, fenugreek seeds (methi dana), cinnamon, and curry leaves.",
      "Pressure cook equal parts rice and moong dal into a soft, velvety khichdi.",
      "Pour hot kadhi over warm khichdi and enjoy a deeply restorative Indian meal."
    ],
    "nutrition": {
      "calories": 375,
      "protein": 14,
      "carbs": 58,
      "fat": 9
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-bhindi-dal",
    "name": "Homestyle Crispy Bhindi Masala, Toor Dal & Phulkas",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "low_sugar"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Okra provides soluble mucilage fiber that stabilizes blood glucose, paired with protein-rich lentils.",
    "ingredients": [
      "1 cup pan-roasted bhindi (okra) with amchur (dry mango) and carom seeds",
      "1 bowl light yellow toor dal",
      "2 warm whole wheat phulkas",
      "1 tsp mustard oil for cooking"
    ],
    "method": [
      "Wash, thoroughly dry, and chop bhindi into rounds.",
      "Pan-sauté bhindi in 1 tsp oil on medium-high heat with turmeric, amchur, and coriander powder until crisp and non-sticky.",
      "Serve alongside a bowl of warm, soothing toor dal and two soft phulkas."
    ],
    "nutrition": {
      "calories": 360,
      "protein": 14,
      "carbs": 56,
      "fat": 8
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-nonveg-grilled-chicken-roti",
    "name": "Mint Tandoori Chicken Breast (180g) with Rotis & Salad",
    "slot": "lunch",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Massive 42g protein punch with minimal carbohydrates, optimal for aggressive recomposition or fat loss.",
    "ingredients": [
      "180g skinless chicken breast cut into steaks",
      "2 tbsp yogurt, ginger-garlic, mint puree & Kashmiri red chilli marinade",
      "1 whole wheat roti (or 2 for muscle gain)",
      "1 large bowl sliced cucumber, radish & onion salad with lemon"
    ],
    "method": [
      "Marinate chicken breast in spiced mint yogurt marinade for 15 minutes.",
      "Grill on a non-stick ribbed grill pan for 5-6 minutes per side until juicy and cooked through.",
      "Rest for 2 minutes and slice into thick strips.",
      "Serve with a hot phulka and crunchy farm salad."
    ],
    "nutrition": {
      "calories": 410,
      "protein": 44,
      "carbs": 28,
      "fat": 9
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-nonveg-fish-tikka-plate",
    "name": "Ajwaini Fish Tikka (180g) with Kachumber Salad & Chutney",
    "slot": "lunch",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "heart_healthy"
    ],
    "allergens": [
      "fish",
      "dairy"
    ],
    "whyItFits": "Rich in EPA/DHA omega-3 fatty acids, carom seeds for easy digestion, and zero bloat carbs.",
    "ingredients": [
      "180g firm white fish fillet (Basa, Singhara, or Surmai)",
      "1/2 tsp carom seeds (ajwain), lemon juice, turmeric & hung curd",
      "1 bowl kachumber salad (cucumber, tomato, onion, lemon)",
      "2 tbsp fresh mint-coriander chutney"
    ],
    "method": [
      "Rub fish fillets with crushed ajwain, turmeric, ginger paste, and lemon.",
      "Coat with thin layer of spiced hung curd and grill on high heat for 6-8 minutes until flaky.",
      "Dust with chaat masala and serve with crisp kachumber and mint chutney."
    ],
    "nutrition": {
      "calories": 320,
      "protein": 38,
      "carbs": 8,
      "fat": 12
    },
    "timeToMake": "16 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-kala-chana-curry",
    "name": "Pahadi Kala Chana Gravy with Steamed Rice & Radish Salad",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "low_sugar"
    ],
    "allergens": [],
    "whyItFits": "High-density complex carbohydrates and resistant starch supporting prebiotic gut flora.",
    "ingredients": [
      "1 cup black chickpeas (kala chana) slow-cooked in aromatic tomato-onion gravy",
      "3/4 cup steamed brown or white rice",
      "1 bowl grated mooli (radish) salad with green chillies & lemon",
      "1 tsp cold-pressed mustard oil"
    ],
    "method": [
      "Pressure cook soaked black chickpeas with whole spices until tender.",
      "Simmer in a seasoned tomato-ginger gravy for 12 minutes, gently mashing some chickpeas for body.",
      "Serve steaming over rice with sharp, digestive radish salad."
    ],
    "nutrition": {
      "calories": 420,
      "protein": 18,
      "carbs": 72,
      "fat": 6
    },
    "timeToMake": "22 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-baingan-bharta",
    "name": "Smoky Punjabi Baingan Bharta with Bajra Roti",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Flame-roasted eggplant is naturally very low in calories and pairs perfectly with gluten-free pearl millet.",
    "ingredients": [
      "1 large eggplant (baingan) roasted over direct flame, peeled and mashed",
      "1 cup green peas, chopped onions, and ripe tomatoes",
      "1/2 tsp ginger, garlic & cumin seeds",
      "1 tsp cold-pressed mustard oil",
      "1 bajra (pearl millet) roti"
    ],
    "method": [
      "Roast eggplant on open gas flame until charred and tender; peel and mash pulp.",
      "Heat mustard oil, sauté cumin, garlic, onions, green peas, and tomatoes until soft.",
      "Fold in mashed smoky eggplant, cook on high flame for 5 minutes, and garnish with fresh coriander.",
      "Serve warm with hot bajra roti."
    ],
    "nutrition": {
      "calories": 340,
      "protein": 10,
      "carbs": 54,
      "fat": 8
    },
    "timeToMake": "22 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-dal-makhani-light",
    "name": "Healthy Slow-Cooked Dal Makhani with Garlic Phulka",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Cream-free, slow-cooked whole black urad dal simmered with pureed tomatoes and a touch of A2 cow milk.",
    "ingredients": [
      "1 cup slow-simmered whole black urad dal and rajma (no butter/heavy cream)",
      "1/4 cup low-fat cow milk stirred in at finish for richness",
      "1 tsp ghee for tempering with ginger juliennes and Kashmiri chili",
      "2 whole wheat garlic phulkas"
    ],
    "method": [
      "Pressure cook black urad and kidney beans until thoroughly soft.",
      "Simmer with ripe tomato puree, ginger, and Kashmiri chili on very low flame for 45 minutes.",
      "Stir in low-fat milk and 1 tsp ghee, simmering until rich and velvety.",
      "Serve with fragrant whole wheat garlic phulkas."
    ],
    "nutrition": {
      "calories": 410,
      "protein": 19,
      "carbs": 64,
      "fat": 8
    },
    "timeToMake": "25 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-nonveg-mutton-keema",
    "name": "Lean Goat Keema Matar with Multigrain Phulka (2 pcs)",
    "slot": "lunch",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "high_energy"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Bioavailable heme iron, zinc, and vitamin B12 from lean goat mince, accelerating red blood cell synthesis.",
    "ingredients": [
      "140g lean minced goat meat (keema)",
      "1/3 cup fresh green peas (matar)",
      "1 small onion, tomato, and 1 tbsp ginger-garlic paste",
      "1/2 tsp meat masala, cinnamon, and cloves",
      "1 tsp cold-pressed oil",
      "2 multigrain phulkas"
    ],
    "method": [
      "Heat oil; sauté whole spices, onions, and ginger-garlic until fragrant and golden.",
      "Add tomatoes, spices, and lean mince; brown meat for 6 minutes on high heat.",
      "Add green peas and 1/2 cup water; pressure cook for 3 whistles until tender.",
      "Serve hot with wholesome multigrain phulkas."
    ],
    "nutrition": {
      "calories": 440,
      "protein": 32,
      "carbs": 42,
      "fat": 14
    },
    "timeToMake": "24 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-tofu-matar",
    "name": "High-Protein Matar Tofu Gravy with Steamed Brown Rice",
    "slot": "lunch",
    "diet": [
      "vegan",
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "low_sugar"
    ],
    "allergens": [
      "soy"
    ],
    "whyItFits": "100% plant-based version of matar paneer, delivering 26g complete protein with zero cholesterol.",
    "ingredients": [
      "140g organic firm tofu cubes (lightly pan-seared)",
      "1/2 cup sweet green peas (matar)",
      "1 cup spiced tomato-cashew/onion gravy",
      "3/4 cup steamed brown rice",
      "Fresh coriander"
    ],
    "method": [
      "Sauté ginger-garlic, onions, and tomatoes with turmeric, cumin, and coriander powder until aromatic.",
      "Add green peas and 1 cup water; simmer for 5 minutes.",
      "Fold in pan-seared tofu cubes and cook gently for 3 minutes.",
      "Serve hot over steamed brown rice."
    ],
    "nutrition": {
      "calories": 420,
      "protein": 26,
      "carbs": 54,
      "fat": 11
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-methi-malai-paneer",
    "name": "Low-Fat Methi Paneer Curry with Whole Wheat Chapati",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "low_sugar"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Bitter fenugreek leaves naturally balance blood glucose, complemented by calcium-rich paneer.",
    "ingredients": [
      "120g fresh paneer cubes",
      "1 cup chopped fresh methi (fenugreek) leaves",
      "1/2 cup low-fat curd & cashew paste (1 tsp)",
      "1 tsp oil, 1 green chilli & ginger",
      "2 whole wheat chapatis"
    ],
    "method": [
      "Sauté chopped methi leaves in 1/2 tsp oil until wilted.",
      "In a pan, cook onions, ginger, and green chillies; whisk in curd and cashew paste on low heat.",
      "Add sautéed methi leaves and paneer cubes; simmer for 3 minutes.",
      "Serve with warm whole wheat chapatis."
    ],
    "nutrition": {
      "calories": 430,
      "protein": 24,
      "carbs": 44,
      "fat": 16
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-lauki-kofta",
    "name": "Baked Lauki Kofta Curry with Whole Wheat Phulkas",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Non-fried, air-baked bottle gourd dumplings in a tangy antioxidant tomato gravy.",
    "ingredients": [
      "1 cup grated bottle gourd (lauki/dudhi), squeezed dry",
      "3 tbsp besan (gram flour) & ajwain for kofta binding",
      "1 cup fresh tomato and onion gravy",
      "1 tsp oil",
      "2 warm whole wheat phulkas"
    ],
    "method": [
      "Mix grated lauki with besan, ajwain, turmeric, and salt; roll into small balls and bake/air-fry at 180°C for 12 minutes.",
      "Simmer tomato-onion gravy with cumin, coriander, and garam masala.",
      "Drop baked koftas into the simmering gravy 2 minutes before serving.",
      "Pair with fresh phulkas."
    ],
    "nutrition": {
      "calories": 340,
      "protein": 12,
      "carbs": 54,
      "fat": 7
    },
    "timeToMake": "22 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-nonveg-egg-biryani",
    "name": "Dum-Cooked Spiced Egg Biryani with Cucumber Raita",
    "slot": "lunch",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "eggs",
      "dairy"
    ],
    "whyItFits": "Slow-steamed basmati rice infused with saffron, caramelized onions, and 3 golden boiled eggs.",
    "ingredients": [
      "3 boiled eggs (slit and coated in turmeric and chilli)",
      "3/4 cup aged basmati rice cooked with whole spices",
      "1/4 cup caramelized onions (birista) & mint leaves",
      "1/2 cup fresh dahi raita with cucumber"
    ],
    "method": [
      "Pan-sear boiled eggs until skin is golden and crisp.",
      "Layer half cooked rice, spiced gravy, seared eggs, mint, and saffron milk in a heavy pot.",
      "Seal with lid and dum cook on low flame for 10 minutes.",
      "Gently fluff and serve with cooling cucumber raita."
    ],
    "nutrition": {
      "calories": 480,
      "protein": 24,
      "carbs": 62,
      "fat": 15
    },
    "timeToMake": "25 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-lobia-curry",
    "name": "Black-Eyed Peas (Lobia) Masala with Steamed Basmati Rice",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Folate-rich black-eyed peas cook quickly and provide complete plant nourishment without bloating.",
    "ingredients": [
      "1 cup cooked lobia (cowpeas)",
      "1 cup onion-tomato masala with ginger, hing, and coriander powder",
      "3/4 cup steamed basmati rice",
      "1 tsp oil & fresh coriander"
    ],
    "method": [
      "Boil soaked lobia for 2 whistles in a pressure cooker until tender.",
      "Sauté cumin, ginger, onions, and tomatoes until soft; add boiled lobia with its cooking broth.",
      "Simmer for 10 minutes until gravy thickens slightly.",
      "Serve hot over steamed basmati rice."
    ],
    "nutrition": {
      "calories": 405,
      "protein": 17,
      "carbs": 69,
      "fat": 5
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-dum-aloo",
    "name": "Kashmiri Dum Aloo in Yogurt Gravy with Jeera Pulao",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Fennel seed and dry ginger (saunth) infused probiotic yogurt gravy supporting digestive strength.",
    "ingredients": [
      "4 baby potatoes (boiled, pricked and shallow-pan roasted)",
      "1 cup whisked dahi (curd) seasoned with saunf (fennel) and saunth (dry ginger) powder",
      "1/2 tsp Kashmiri chili powder (mild & ruby red)",
      "3/4 cup jeera pulao"
    ],
    "method": [
      "Prick baby potatoes and lightly roast in 1 tsp mustard oil until golden.",
      "Whisk yogurt with fennel powder, ginger powder, and Kashmiri chilli powder.",
      "Cook yogurt gravy on low heat while stirring continuously to prevent splitting; slide in potatoes and simmer covered for 10 minutes.",
      "Serve with fragrant jeera pulao."
    ],
    "nutrition": {
      "calories": 420,
      "protein": 11,
      "carbs": 66,
      "fat": 12
    },
    "timeToMake": "22 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-nonveg-chicken-biryani",
    "name": "Lean Homestyle Dum Chicken Biryani with Boondi Raita",
    "slot": "lunch",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "high_energy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Nutrient-rich lean chicken breast layered with aromatic long-grain basmati, mint, and saffron.",
    "ingredients": [
      "160g chicken breast pieces (marinated in spiced yogurt and ginger-garlic)",
      "3/4 cup basmati rice (70% parboiled)",
      "Mint leaves, coriander, fried onions & saffron water",
      "1/2 cup fresh raita"
    ],
    "method": [
      "Sear marinated chicken in a pan for 5 minutes.",
      "Layer parboiled basmati rice over the chicken, drizzle saffron water and fresh herbs.",
      "Dum cook on low flame with tight lid for 12 minutes.",
      "Fluff gently from the bottom and serve with cool raita."
    ],
    "nutrition": {
      "calories": 490,
      "protein": 38,
      "carbs": 58,
      "fat": 12
    },
    "timeToMake": "25 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-gatte-ki-sabzi",
    "name": "Rajasthani Besan Gatte Curry with Missi Roti",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Traditional chickpea flour dumplings simmered in a spiced tangy yogurt gravy.",
    "ingredients": [
      "1 cup boiled besan gatte (chickpea flour dumplings)",
      "1 cup spiced yogurt gravy tempered with mustard, cumin, and hing",
      "2 missi rotis",
      "1 tsp oil"
    ],
    "method": [
      "Knead besan with spices and yogurt, shape into logs, boil in water for 10 minutes, and slice into rounds.",
      "Whisk curd with turmeric, coriander, and chilli powder; temper with cumin and hing in 1 tsp oil.",
      "Add gatte and gatte stock to the yogurt gravy and simmer for 8 minutes.",
      "Serve hot with wholesome missi rotis."
    ],
    "nutrition": {
      "calories": 420,
      "protein": 18,
      "carbs": 56,
      "fat": 13
    },
    "timeToMake": "24 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-curd-rice",
    "name": "South Indian Tempered Curd Rice (Bagala Bath) with Salad",
    "slot": "lunch",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "The ultimate gut-restorative cooling meal packed with billions of live probiotic bacteria.",
    "ingredients": [
      "1 cup soft mashed rice mixed with 1 cup fresh homemade dahi",
      "1/2 tsp mustard seeds, urad dal, curry leaves, grated ginger, and green chilli",
      "2 tbsp fresh pomegranate seeds on top",
      "1/2 tsp oil for tadka"
    ],
    "method": [
      "Mix warm cooked soft rice with fresh curd, grated ginger, and pink salt.",
      "Heat 1/2 tsp oil, splutter mustard seeds, urad dal, curry leaves, and green chillies.",
      "Pour tadka into the curd rice and mix thoroughly.",
      "Top with ruby pomegranate arils and serve cool."
    ],
    "nutrition": {
      "calories": 350,
      "protein": 11,
      "carbs": 58,
      "fat": 7
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-masoor-dal",
    "name": "Whole Brown Masoor Dal with Jeera Rice & Papad",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Whole brown lentils retain the intact outer bran coat, delivering 15g fiber and sustained energy.",
    "ingredients": [
      "1 bowl slow-cooked sabut masoor dal with ginger and tomatoes",
      "3/4 cup steamed jeera rice",
      "1 roasted papad & fresh cucumber sticks",
      "1 tsp cold-pressed oil"
    ],
    "method": [
      "Cook soaked brown masoor in pressure cooker with turmeric and salt.",
      "Temper with cumin, onions, ginger, and ripe tomatoes in 1 tsp oil.",
      "Simmer dal for 8 minutes to absorb all spices.",
      "Serve over fragrant jeera rice with roasted papad."
    ],
    "nutrition": {
      "calories": 400,
      "protein": 18,
      "carbs": 66,
      "fat": 6
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-nonveg-prawn-curry",
    "name": "Malabar Coconut Prawns Curry with Steamed Rice",
    "slot": "lunch",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "heart_healthy"
    ],
    "allergens": [
      "shellfish"
    ],
    "whyItFits": "Succulent fresh prawns in a light coconut milk and kudampuli (kokum) broth, packed with lean protein and zinc.",
    "ingredients": [
      "150g cleaned and deveined fresh prawns",
      "1/2 cup light coconut milk with turmeric, fenugreek, and green chilli",
      "2 pieces kokum or tamarind for tartness",
      "3/4 cup steamed rice",
      "Curry leaves and 1 tsp coconut oil"
    ],
    "method": [
      "Heat coconut oil in a clay pot; splutter fenugreek seeds, shallots, ginger, and curry leaves.",
      "Add light coconut milk, turmeric, chilli powder, and kokum; bring to gentle simmer.",
      "Add cleaned prawns and cook gently for only 4-5 minutes until curled and pink.",
      "Serve with steamed basmati or Kerala matta rice."
    ],
    "nutrition": {
      "calories": 380,
      "protein": 29,
      "carbs": 46,
      "fat": 9
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lu-veg-mixed-veg-korma",
    "name": "South Indian Veg Kurma with Whole Wheat Phulkas",
    "slot": "lunch",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [
      "nuts",
      "gluten"
    ],
    "whyItFits": "Nutrient-rich medley of carrots, beans, peas, and cauliflower in a fragrant poppy-coconut kurma paste.",
    "ingredients": [
      "1.5 cups mixed vegetables (carrot, green beans, peas, potatoes, cauliflower)",
      "2 tbsp freshly ground paste of coconut, roasted gram, fennel seeds, and green chillies",
      "1 tsp oil for tempering with whole garam masala and curry leaves",
      "2 soft whole wheat phulkas"
    ],
    "method": [
      "Steam mixed vegetables until fork-tender.",
      "Temper whole spices and curry leaves in 1 tsp oil; add onions and tomato.",
      "Pour in coconut-fennel paste and 1 cup water; simmer for 5 minutes.",
      "Add steamed veggies, simmer for 3 minutes, and serve with hot phulkas."
    ],
    "nutrition": {
      "calories": 360,
      "protein": 11,
      "carbs": 56,
      "fat": 9
    },
    "timeToMake": "20 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-sattu-drink",
    "name": "Bihari Roasted Chana Sattu Sharbat (Namkeen / Savory)",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "high_energy",
      "low_sugar"
    ],
    "allergens": [],
    "whyItFits": "Traditional Indian superfood drink packed with 15g plant protein, magnesium, and natural electrolytes.",
    "ingredients": [
      "3 tbsp roasted Bengal gram sattu powder",
      "1.5 cups chilled water",
      "1/4 cup finely chopped red onion & green chilli",
      "1/2 tsp roasted cumin powder & black salt",
      "Juice of 1 fresh lemon & chopped mint"
    ],
    "method": [
      "Whisk sattu powder with a few tablespoons of water first to dissolve completely without lumps.",
      "Add remaining chilled water, roasted cumin powder, and black salt.",
      "Stir in finely minced onions, green chillies, and fresh lemon juice.",
      "Serve chilled in a tall glass as an instant hunger quencher."
    ],
    "nutrition": {
      "calories": 170,
      "protein": 14,
      "carbs": 24,
      "fat": 2
    },
    "timeToMake": "4 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-masala-makhana",
    "name": "Peri-Peri & Turmeric Roasted Makhana (Foxnuts)",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Crunchy, anti-inflammatory, low-calorie lotus seeds that eliminate evening chip cravings.",
    "ingredients": [
      "2 cups phool makhana (foxnuts)",
      "1/2 tsp pure cow ghee",
      "1/4 tsp turmeric & 1/2 tsp peri-peri or chaat masala",
      "Himalayan pink salt to taste"
    ],
    "method": [
      "Heat ghee in a pan on medium-low flame.",
      "Add makhana and roast for 4-5 minutes until crisp enough to crush between fingers.",
      "Sprinkle turmeric, peri-peri spice, and pink salt, toss well, and serve warm."
    ],
    "nutrition": {
      "calories": 135,
      "protein": 4,
      "carbs": 23,
      "fat": 3
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-nonveg-egg-white-chaat",
    "name": "Boiled Egg White Chaat with Onions, Tomatoes & Chutney",
    "slot": "evening_snack",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "low_sugar"
    ],
    "allergens": [
      "eggs"
    ],
    "whyItFits": "16g lean protein with zero saturated fats, flavored with zesty street-style chaat spices.",
    "ingredients": [
      "4 hard-boiled egg whites (chopped into bite-sized cubes)",
      "1/4 cup finely diced onion, tomato, and green chilli",
      "1 tbsp fresh mint-coriander green chutney",
      "1/2 tsp chaat masala & squeeze of lemon"
    ],
    "method": [
      "Cube hard-boiled egg whites into a bowl.",
      "Add diced onions, tomatoes, green chillies, and fresh coriander.",
      "Drizzle tangy mint chutney, sprinkle chaat masala, and squeeze lemon.",
      "Toss gently and eat fresh."
    ],
    "nutrition": {
      "calories": 110,
      "protein": 16,
      "carbs": 6,
      "fat": 1
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-bhel-puri-healthy",
    "name": "Oil-Free Oats & Puffed Rice Jhalmuri / Bhel",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [
      "peanuts"
    ],
    "whyItFits": "Zero fried sev or papdi; uses roasted oats, kurmura (puffed rice), boiled potatoes, and raw veggies.",
    "ingredients": [
      "1 cup puffed rice (kurmura) + 1/4 cup dry-roasted rolled oats",
      "1/4 cup boiled diced potato, tomato, and onion",
      "1 tbsp roasted peanuts",
      "2 tbsp green mint chutney & 1 tsp tamarind date chutney",
      "Chaat masala and fresh coriander"
    ],
    "method": [
      "In a large mixing bowl, combine puffed rice, roasted oats, and peanuts.",
      "Add boiled potatoes, onions, tomatoes, and fresh coriander.",
      "Pour green mint chutney, tamarind chutney, and sprinkle chaat masala.",
      "Toss rapidly and serve immediately so it stays crisp."
    ],
    "nutrition": {
      "calories": 185,
      "protein": 6,
      "carbs": 36,
      "fat": 4
    },
    "timeToMake": "6 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-paneer-tikka-skewers",
    "name": "Pan-Seared Masala Paneer Cubes with Bell Peppers",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "low_sugar"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "18g vegetarian protein to rebuild muscles during evening tea-time.",
    "ingredients": [
      "100g low-fat paneer (cubed)",
      "1/2 cup diced capsicum and red onions",
      "1 tbsp dahi mixed with tandoori masala, ajwain, and lemon juice",
      "1/2 tsp oil for pan searing",
      "Chaat masala for garnish"
    ],
    "method": [
      "Coat paneer and veggie cubes in the spiced yogurt marinade.",
      "Heat a skillet with 1/2 tsp oil and sear on high heat for 3-4 minutes until charred on edges.",
      "Dust with chaat masala and serve with mint dip."
    ],
    "nutrition": {
      "calories": 230,
      "protein": 18,
      "carbs": 8,
      "fat": 14
    },
    "timeToMake": "8 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-soya-kabab",
    "name": "Pan-Seared High-Protein Soya Shammi Kabab (2 pcs)",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [
      "soy"
    ],
    "whyItFits": "Soya and chana dal patties delivering 20g pure plant protein with satisfying meaty texture.",
    "ingredients": [
      "1 cup boiled and minced soya chunks",
      "2 tbsp boiled chana dal (for authentic Shammi texture)",
      "1/2 tsp garam masala, ginger, garlic, and fresh mint",
      "1/2 tsp oil for pan toasting",
      "Green chutney"
    ],
    "method": [
      "Grind boiled soya chunks and chana dal with ginger, garlic, mint, and spices into a coarse dough.",
      "Shape into 2 round Shammi patties.",
      "Pan-sear in 1/2 tsp oil on a non-stick pan for 3 minutes per side until crispy brown.",
      "Serve hot with mint chutney."
    ],
    "nutrition": {
      "calories": 200,
      "protein": 20,
      "carbs": 18,
      "fat": 4
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-nonveg-chicken-skewers",
    "name": "Lemon Pepper Grilled Chicken Skewers (120g) with Mint Dip",
    "slot": "evening_snack",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [],
    "whyItFits": "High-density lean chicken cubes delivering 28g complete protein and zero carbs.",
    "ingredients": [
      "120g skinless boneless chicken breast cut into bite-sized cubes",
      "1/2 tsp crushed black pepper, lemon juice, garlic paste & oregano",
      "1/2 tsp olive oil for brushing grill pan",
      "2 tbsp homemade mint yogurt dip"
    ],
    "method": [
      "Toss chicken cubes with lemon juice, garlic, black pepper, and sea salt.",
      "Thread onto skewers (or place directly on a hot ribbed grill pan).",
      "Sear for 3 minutes per side until cooked through and lightly charred.",
      "Serve piping hot with cool mint dip."
    ],
    "nutrition": {
      "calories": 190,
      "protein": 28,
      "carbs": 2,
      "fat": 7
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-besan-toast",
    "name": "Besan & Veggie Bread Toast with Green Chutney",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Savory Indian French-toast style whole wheat bread coated in spiced chickpea batter and veggies.",
    "ingredients": [
      "1 slice 100% whole wheat bread",
      "3 tbsp besan (gram flour) whisked with water, onion, tomato, and coriander",
      "1/4 tsp ajwain, turmeric, and chilli",
      "1/2 tsp oil for tawa",
      "Mint chutney"
    ],
    "method": [
      "Dip bread slice into the seasoned vegetable-besan batter.",
      "Place on a hot tawa with 1/2 tsp oil.",
      "Cook on medium flame for 2-3 minutes per side until golden brown and cooked through.",
      "Cut into triangles and serve hot."
    ],
    "nutrition": {
      "calories": 180,
      "protein": 8,
      "carbs": 28,
      "fat": 5
    },
    "timeToMake": "8 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-masala-corn",
    "name": "Steamed Sweet Corn Chaat with Lemon & Herbs",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Whole grain sweet corn kernels bursting with lutein, zeaxanthin, and natural dietary fiber.",
    "ingredients": [
      "1 cup sweet corn kernels (steamed until tender)",
      "1/4 tsp chaat masala & roasted cumin",
      "1/4 tsp red chilli powder",
      "Juice of half lemon & fresh coriander",
      "1/4 tsp ghee or butter (optional)"
    ],
    "method": [
      "Steam corn kernels for 4 minutes in boiling water or steamer.",
      "Drain and toss in a warm bowl with chaat masala, chilli powder, and a tiny dab of butter.",
      "Squeeze fresh lemon juice, mix well, and serve in a cup."
    ],
    "nutrition": {
      "calories": 160,
      "protein": 5,
      "carbs": 32,
      "fat": 2
    },
    "timeToMake": "6 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-roasted-chana-tea",
    "name": "Bhuna Chana (Roasted Bengal Gram) with Cardamom Chai",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "maintenance"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Timeless Indian pairing: crunchy protein chana eliminates biscuits, washed down with cardamom tea.",
    "ingredients": [
      "1/2 cup roasted chana with skins on (bhuna chana)",
      "1 cup freshly brewed ginger-cardamom tea with low-fat milk (no refined sugar)"
    ],
    "method": [
      "Brew black tea leaves with crushed ginger, green cardamom, and a splash of low-fat milk.",
      "Pour into a cup without sugar (or with a tiny dab of jaggery).",
      "Enjoy with a bowl of crunchy roasted chana."
    ],
    "nutrition": {
      "calories": 180,
      "protein": 9,
      "carbs": 26,
      "fat": 4
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-moong-dal-dahi-vada",
    "name": "Steamed Non-Fried Moong Dal Dahi Vada (Set of 2)",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "100% oil-free steamed lentil dumplings soaked in chilled probiotic curd with roasted spices.",
    "ingredients": [
      "2 steamed yellow moong dal vadas (steamed in idli maker)",
      "3/4 cup chilled fresh curd (whisked smooth)",
      "1 tbsp roasted cumin powder, black salt & Kashmiri red chilli",
      "1 tbsp green mint chutney"
    ],
    "method": [
      "Steam ground moong dal batter in an idli plate for 8 minutes; soak in warm salted water for 5 minutes and squeeze gently.",
      "Place in a shallow bowl and pour thick chilled whisked curd all over.",
      "Dust with roasted cumin powder, black salt, and a splash of mint chutney."
    ],
    "nutrition": {
      "calories": 195,
      "protein": 12,
      "carbs": 28,
      "fat": 4
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-ragi-cookies-tea",
    "name": "Baked Ragi & Cardamom Cookies (2 pcs) with Masala Chai",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Millet-based guilt-free crunch rich in iron and calcium, paired with warm spiced Indian tea.",
    "ingredients": [
      "2 home-baked or clean-ingredient ragi (finger millet) cookies (jaggery sweetened)",
      "1 cup hot masala chai brewed with holy basil (tulsi), ginger, and low-fat milk"
    ],
    "method": [
      "Brew aromatic masala chai with spices and low-fat milk.",
      "Strain hot tea into a cup.",
      "Pair with two crunchy whole grain ragi cookies."
    ],
    "nutrition": {
      "calories": 170,
      "protein": 4,
      "carbs": 28,
      "fat": 5
    },
    "timeToMake": "4 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-sprouts-tikki",
    "name": "Crispy Sprouted Moong Cutlet (Set of 2) with Mint Dip",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "low_sugar"
    ],
    "allergens": [],
    "whyItFits": "Pan-seared live sprouts patties rich in active enzymes and fiber to keep you energized.",
    "ingredients": [
      "1 cup coarse crushed moong sprouts",
      "2 tbsp roasted besan & 1/4 cup finely chopped onions and ginger",
      "1/2 tsp amchur, cumin, and green chilli",
      "1/2 tsp oil for pan searing",
      "Mint coriander chutney"
    ],
    "method": [
      "Mix crushed sprouts with roasted besan, chopped onions, ginger, and spices.",
      "Shape into 2 patties.",
      "Pan sear on a non-stick pan with 1/2 tsp oil for 3 minutes per side until crispy.",
      "Serve warm with homemade green chutney."
    ],
    "nutrition": {
      "calories": 165,
      "protein": 11,
      "carbs": 22,
      "fat": 3
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-nonveg-egg-roll-wheat",
    "name": "Whole Wheat Kathi Roll with Double Egg & Crunchy Onions",
    "slot": "evening_snack",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "high_energy"
    ],
    "allergens": [
      "eggs",
      "gluten"
    ],
    "whyItFits": "16g complete protein wrapped in a high-fiber whole wheat flatbread with zero refined maida.",
    "ingredients": [
      "1 whole wheat handmade roti",
      "2 eggs (whisked with pinch of salt and pepper)",
      "1/4 cup sliced onions & green chillies tossed in lemon and chaat masala",
      "1 tsp mint chutney",
      "1/2 tsp oil for tawa"
    ],
    "method": [
      "Pour whisked eggs on a hot tawa with 1/2 tsp oil; immediately place whole wheat roti on top and press down.",
      "Flip once egg is set and golden.",
      "Remove to plate, spread mint chutney down the center, add lemon-onion salad, and roll up tightly."
    ],
    "nutrition": {
      "calories": 290,
      "protein": 16,
      "carbs": 26,
      "fat": 12
    },
    "timeToMake": "8 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-masala-papad",
    "name": "Roasted Urad Papad with Spicy Onion-Tomato Salad (2 pcs)",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar"
    ],
    "allergens": [],
    "whyItFits": "Flame-roasted (zero oil) lentil papad loaded with crunchy, hydrating kachumber salad.",
    "ingredients": [
      "2 urad dal papads (roasted over direct flame)",
      "1/2 cup finely diced onion, tomato, and cucumber",
      "1 green chilli, fresh coriander & lemon juice",
      "1/2 tsp chaat masala & black salt"
    ],
    "method": [
      "Roast papads directly on open flame with tongs until crisp.",
      "Mix diced veggies with lemon juice, chaat masala, and coriander in a bowl.",
      "Spoon salad evenly over the roasted papads right before eating to keep them crisp."
    ],
    "nutrition": {
      "calories": 120,
      "protein": 6,
      "carbs": 20,
      "fat": 1
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-dry-fruit-ladoo",
    "name": "Sugar-Free Dates, Almonds & Fig Energy Ladoo (1 pc)",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "high_energy",
      "maintenance"
    ],
    "allergens": [
      "nuts"
    ],
    "whyItFits": "Sweetened solely with whole dates and figs, delivering iron, magnesium, and healthy nut fats.",
    "ingredients": [
      "1 energy ball made from mashed Medjool dates, dried figs, roasted almonds, and chia seeds (no added sugar or syrup)"
    ],
    "method": [
      "Take 1 wholesome date & dry fruit ladoo.",
      "Eat alongside a warm cup of herbal tea or warm water."
    ],
    "nutrition": {
      "calories": 140,
      "protein": 3,
      "carbs": 22,
      "fat": 5
    },
    "timeToMake": "1 minute",
    "imageUrl": "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-methi-muthia",
    "name": "Steamed Gujarati Methi Muthia (Set of 3) with Chutney",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "maintenance"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Steamed fenugreek and whole wheat dumplings with ginger, sesame, and mustard tempering.",
    "ingredients": [
      "3 steamed methi muthias (made from chopped fenugreek, whole wheat flour, and besan)",
      "1/2 tsp sesame seeds & mustard seeds for light tempering",
      "1/2 tsp oil",
      "2 tbsp green mint chutney"
    ],
    "method": [
      "Steam shaped muthia dumplings in a steamer for 15 minutes.",
      "Temper with sesame seeds and mustard seeds in 1/2 tsp oil.",
      "Toss steamed muthias gently in the seeds and serve with mint chutney."
    ],
    "nutrition": {
      "calories": 160,
      "protein": 6,
      "carbs": 24,
      "fat": 4
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ev-veg-soya-chaap",
    "name": "Tandoori Soya Chaap (Dry) with Mint Dip & Sliced Onions",
    "slot": "evening_snack",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "high_energy"
    ],
    "allergens": [
      "soy",
      "gluten"
    ],
    "whyItFits": "High-protein plant skewer marinated in tandoori spices and charred for authentic street taste.",
    "ingredients": [
      "1 stick soya chaap (boiled and cut into pieces)",
      "2 tbsp spiced yogurt / lemon marinade with degi mirch and ajwain",
      "Sliced sirka onions & lemon wedge",
      "1/2 tsp oil for grilling"
    ],
    "method": [
      "Marinate soya chaap pieces in tandoori marinade for 10 minutes.",
      "Pan-sear or air-fry for 6-8 minutes until edges are crisp and charred.",
      "Sprinkle chaat masala and serve with sliced onions and lemon."
    ],
    "nutrition": {
      "calories": 230,
      "protein": 21,
      "carbs": 22,
      "fat": 6
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-moong-khichdi",
    "name": "Gentle Moong Dal Khichdi with Desi Ghee & Cumin",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "The quintessential Ayurvedic gut-healing evening meal, light on the stomach for uninterrupted deep sleep.",
    "ingredients": [
      "1/2 cup yellow moong dal & 1/2 cup rice",
      "1/2 tsp cumin seeds, pinch of asafoetida (hing) & turmeric",
      "1 tsp pure desi cow ghee",
      "1 cup sliced cucumber & dahi"
    ],
    "method": [
      "Rinse rice and moong dal together; soak for 15 minutes.",
      "Heat ghee in a pressure cooker; splutter cumin seeds and a pinch of hing.",
      "Add soaked lentils and rice, 3.5 cups water, turmeric, and pink rock salt.",
      "Pressure cook for 3 whistles on medium flame until soft and porridge-like. Serve warm."
    ],
    "nutrition": {
      "calories": 340,
      "protein": 14,
      "carbs": 56,
      "fat": 6
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-dalia-khichdi",
    "name": "Vegetable Dalia Khichdi with Seasonal Veggies & Curd",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "maintenance"
    ],
    "allergens": [
      "gluten",
      "dairy"
    ],
    "whyItFits": "Broken wheat fiber prevents nocturnal blood sugar crashes while promoting healthy morning bowel motility.",
    "ingredients": [
      "1/2 cup roasted broken wheat (dalia)",
      "1/4 cup yellow moong dal",
      "1/2 cup diced carrots, French beans, and tomatoes",
      "1/2 tsp cumin seeds & 1 tsp ghee",
      "1/2 cup fresh dahi"
    ],
    "method": [
      "Sauté cumin seeds and diced vegetables in 1 tsp ghee in a pressure cooker.",
      "Add roasted dalia, moong dal, salt, and 2.5 cups water.",
      "Cook for 2 whistles on medium flame.",
      "Serve warm alongside soothing fresh curd."
    ],
    "nutrition": {
      "calories": 320,
      "protein": 13,
      "carbs": 52,
      "fat": 6
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-lauki-chana-dal",
    "name": "Dudhi (Lauki) & Bengal Gram Dal with Warm Phulkas (2 pcs)",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "low_sugar"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Bottle gourd has 96% water content and zero bloat, balanced with sustained protein from chana dal.",
    "ingredients": [
      "1 cup diced bottle gourd (lauki/dudhi)",
      "1/3 cup chana dal (soaked 30 mins)",
      "1/2 tsp cumin, turmeric, ginger & tomato",
      "1 tsp cold-pressed oil",
      "2 soft whole wheat phulkas"
    ],
    "method": [
      "Pressure cook lauki and chana dal with turmeric, chopped tomatoes, and salt for 3 whistles.",
      "Temper with cumin seeds and grated ginger in 1 tsp oil.",
      "Simmer for 3 minutes and mash lightly with a ladle.",
      "Serve hot with freshly puffed whole wheat phulkas."
    ],
    "nutrition": {
      "calories": 330,
      "protein": 13,
      "carbs": 54,
      "fat": 5
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-nonveg-tandoori-chicken",
    "name": "Tandoori Spiced Chicken Breast (160g) with Veggie Toss",
    "slot": "dinner",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Dense 38g nighttime protein to repair muscle tissue overnight without heavy carbs causing bloat.",
    "ingredients": [
      "160g boneless skinless chicken breast",
      "2 tbsp yogurt marinade with tandoori masala, lemon juice & ginger-garlic",
      "1 cup warm tossed vegetables (bell peppers, zucchini, onions)",
      "1/2 tsp olive oil for grill pan"
    ],
    "method": [
      "Coat chicken breast in spiced yogurt marinade.",
      "Grill on medium flame for 5 minutes per side until charred and tender.",
      "Toss seasonal vegetables in the same pan for 2 minutes.",
      "Slice chicken and serve over the warm vegetables."
    ],
    "nutrition": {
      "calories": 310,
      "protein": 38,
      "carbs": 10,
      "fat": 8
    },
    "timeToMake": "16 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-nonveg-steamed-fish",
    "name": "Steamed Patrani / Lemon Fish with Steamed Brown Rice",
    "slot": "dinner",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [
      "fish"
    ],
    "whyItFits": "Steamed delicate white fish with green coriander chutney is virtually effortless for nighttime digestion.",
    "ingredients": [
      "160g white fish fillet (Basa, Pomfret, or Cod)",
      "2 tbsp green herb paste (coriander, mint, coconut, cumin, lemon)",
      "1/2 cup steamed brown or white rice",
      "Banana leaf or parchment paper for parcel steaming"
    ],
    "method": [
      "Slather fresh fish fillet with thick green herb chutney.",
      "Wrap neatly in a banana leaf or parchment packet.",
      "Steam in a steamer for 10-12 minutes until fish turns flaky and fragrant.",
      "Unwrap and serve with warm steamed rice."
    ],
    "nutrition": {
      "calories": 320,
      "protein": 34,
      "carbs": 32,
      "fat": 6
    },
    "timeToMake": "16 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-paneer-bhurji-roti",
    "name": "Light Paneer Bhurji with Methi Phulka (1 pc) & Salad",
    "slot": "dinner",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "low_sugar"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Slow-release casein protein fuels the nocturnal fasting window while keeping carbohydrates controlled.",
    "ingredients": [
      "120g fresh low-fat paneer (crumbled)",
      "1 small tomato, 1/2 onion, and fresh coriander",
      "1/4 tsp turmeric, cumin, and rock salt",
      "1/2 tsp oil for cooking",
      "1 whole wheat methi phulka"
    ],
    "method": [
      "Sauté cumin, onions, and tomatoes in 1/2 tsp oil until soft.",
      "Add crumbled paneer, turmeric, and rock salt; toss on low flame for 2 minutes.",
      "Garnish with fresh coriander.",
      "Serve warm with a soft methi phulka and cucumber slices."
    ],
    "nutrition": {
      "calories": 330,
      "protein": 22,
      "carbs": 24,
      "fat": 14
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-palak-corn",
    "name": "Light Palak Corn Curry with Warm Jowar Roti",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [],
    "whyItFits": "Spinach puree with sweet corn kernels paired with gluten-free, alkaline sorghum (jowar) flatbread.",
    "ingredients": [
      "1.5 cups fresh spinach puree cooked with garlic and cumin",
      "1/3 cup boiled sweet corn kernels",
      "1/2 tsp oil & pinch of garam masala",
      "1 warm jowar (sorghum) roti"
    ],
    "method": [
      "Blanch and blend spinach with 1 clove garlic and green chilli.",
      "Heat 1/2 tsp oil, add cumin seeds, and pour in spinach puree.",
      "Fold in sweet corn kernels and salt; simmer for 3 minutes.",
      "Serve hot with a freshly made jowar roti."
    ],
    "nutrition": {
      "calories": 290,
      "protein": 9,
      "carbs": 50,
      "fat": 5
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-turai-sabzi",
    "name": "Ridged Gourd (Turai) Sabzi with Moong Dal & Phulkas",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "heart_healthy"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Turai is ultra-hydrating, low in calories, and naturally sweet, making it ideal for peaceful digestion.",
    "ingredients": [
      "1.5 cups chopped ridged gourd (turai / ridge gourd)",
      "2 tbsp yellow moong dal (soaked 15 mins)",
      "1/2 tsp cumin seeds, turmeric & coriander powder",
      "1/2 tsp oil",
      "2 whole wheat phulkas"
    ],
    "method": [
      "Heat 1/2 tsp oil in a pan; add cumin seeds and turmeric.",
      "Add chopped turai and soaked moong dal with salt and 1/4 cup water.",
      "Cover with lid and cook on medium flame for 8 minutes until tender.",
      "Serve hot with 2 whole wheat phulkas."
    ],
    "nutrition": {
      "calories": 290,
      "protein": 11,
      "carbs": 48,
      "fat": 4
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-nonveg-egg-bhurji-dinner",
    "name": "Masala Egg Bhurji (3 Eggs) with Whole Wheat Phulkas",
    "slot": "dinner",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [
      "eggs",
      "gluten"
    ],
    "whyItFits": "Quick 21g protein dinner prepared in under 10 minutes, satisfying evening hunger without digestive strain.",
    "ingredients": [
      "3 fresh farm eggs (whisked)",
      "1 small onion, tomato, and fresh coriander",
      "1/4 tsp turmeric, cumin, and black pepper",
      "1 tsp cold-pressed oil",
      "1 whole wheat phulka"
    ],
    "method": [
      "Heat oil, sauté onions and tomatoes with turmeric and black pepper until soft.",
      "Pour in whisked eggs, lower heat, and scramble gently for 2 minutes.",
      "Garnish with coriander and serve hot with a soft whole wheat phulka."
    ],
    "nutrition": {
      "calories": 320,
      "protein": 21,
      "carbs": 20,
      "fat": 15
    },
    "timeToMake": "10 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-tofu-vegetable-stirfry",
    "name": "Indian-Spiced Tofu & French Beans Poriyal with Roti",
    "slot": "dinner",
    "diet": [
      "vegan",
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss",
      "low_sugar"
    ],
    "allergens": [
      "soy",
      "gluten"
    ],
    "whyItFits": "22g complete plant protein with crisp French beans and shredded coconut tempering.",
    "ingredients": [
      "140g firm tofu (cubed)",
      "1 cup chopped French beans",
      "1/2 tsp mustard seeds, curry leaves & 1 tbsp grated coconut",
      "1/2 tsp coconut oil",
      "1 whole wheat phulka"
    ],
    "method": [
      "Steam French beans for 3 minutes until tender-crisp.",
      "Heat coconut oil, splutter mustard seeds and curry leaves; add tofu and beans.",
      "Sauté on high heat for 3 minutes, top with grated coconut and pink salt.",
      "Serve with a warm whole wheat phulka."
    ],
    "nutrition": {
      "calories": 310,
      "protein": 22,
      "carbs": 26,
      "fat": 11
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-oats-khichdi",
    "name": "Masala Oats & Moong Dal Light Khichdi with Dahi",
    "slot": "dinner",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Combines rolled oats with yellow lentils to deliver beta-glucan fiber and gentle complete protein.",
    "ingredients": [
      "1/2 cup rolled oats",
      "1/4 cup yellow moong dal",
      "1/2 cup diced carrots, peas, and tomatoes",
      "1/2 tsp cumin, ginger, and turmeric",
      "1/2 cup fresh dahi"
    ],
    "method": [
      "Boil moong dal in a small pot until soft (8 minutes).",
      "In a pan, sauté cumin, ginger, and vegetables in 1/2 tsp ghee.",
      "Add boiled dal, rolled oats, and 1.5 cups water; simmer for 4 minutes until creamy.",
      "Serve warm with cool dahi."
    ],
    "nutrition": {
      "calories": 295,
      "protein": 14,
      "carbs": 46,
      "fat": 5
    },
    "timeToMake": "14 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-masoor-soup",
    "name": "Curried Red Lentil & Tomato Warming Soup with Toast",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Velvety, warming lentil soup that cooks in 12 minutes and delivers soothing plant fiber before bed.",
    "ingredients": [
      "1/2 cup red masoor dal (rinsed)",
      "2 ripe tomatoes & 1/2 inch ginger (chopped)",
      "1/2 tsp cumin powder, turmeric, and black pepper",
      "1 slice toasted whole wheat sourdough or multigrain bread"
    ],
    "method": [
      "Boil red lentils with tomatoes, ginger, turmeric, and salt for 10 minutes until tender.",
      "Blend with an immersion blender into a smooth, silky soup.",
      "Season with freshly ground black pepper and roasted cumin.",
      "Serve hot in a bowl with crisp toast for dipping."
    ],
    "nutrition": {
      "calories": 270,
      "protein": 15,
      "carbs": 46,
      "fat": 2
    },
    "timeToMake": "14 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-nonveg-chicken-soup",
    "name": "Desi Murgh Shorba (Chicken Clear Broth) with Shredded Meat",
    "slot": "dinner",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "high_energy"
    ],
    "allergens": [],
    "whyItFits": "Aromatic bone broth infused with ginger, cloves, cinnamon, and black pepper, hydrating and repairing muscle.",
    "ingredients": [
      "140g bone-in or boneless chicken breast",
      "3 cups water with whole ginger, garlic cloves, cinnamon stick & black peppercorns",
      "1/4 cup chopped spring onions & fresh coriander",
      "Pinch of rock salt & lemon juice"
    ],
    "method": [
      "Simmer chicken in water with whole spices and salt for 15 minutes in a pot or pressure cooker.",
      "Shred chicken meat and return to the rich clear broth.",
      "Discard whole cinnamon stick and peppercorns.",
      "Serve steaming hot with fresh coriander and a squeeze of lemon."
    ],
    "nutrition": {
      "calories": 230,
      "protein": 32,
      "carbs": 4,
      "fat": 6
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-methi-thepla-dahi",
    "name": "Gujarati Methi Thepla (Set of 2) with Fresh Curd",
    "slot": "dinner",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "maintenance"
    ],
    "allergens": [
      "gluten",
      "dairy"
    ],
    "whyItFits": "Fenugreek leaves improve nocturnal digestion and insulin sensitivity, served with soothing dahi.",
    "ingredients": [
      "2 thin whole wheat methi theplas (lightly pan-roasted)",
      "3/4 cup fresh homemade dahi",
      "1/4 tsp roasted cumin powder on curd"
    ],
    "method": [
      "Roll and cook 2 theplas on hot tawa with a light smear of ghee or oil.",
      "Serve alongside fresh dahi dusted with roasted cumin and rock salt."
    ],
    "nutrition": {
      "calories": 280,
      "protein": 11,
      "carbs": 40,
      "fat": 8
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-matar-paneer-light",
    "name": "Homestyle Light Matar Paneer with Multigrain Roti",
    "slot": "dinner",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "dairy",
      "gluten"
    ],
    "whyItFits": "Gentle tomato gravy with fresh paneer and green peas provides 22g protein without heavy cream.",
    "ingredients": [
      "100g fresh paneer cubes",
      "1/3 cup tender green peas (matar)",
      "1 cup light tomato-onion gravy",
      "1/2 tsp oil & coriander",
      "1 multigrain roti"
    ],
    "method": [
      "Simmer chopped tomatoes and onions with ginger-garlic and spices until soft.",
      "Add tender green peas and paneer cubes; simmer for 4 minutes.",
      "Serve hot with a multigrain roti."
    ],
    "nutrition": {
      "calories": 350,
      "protein": 21,
      "carbs": 32,
      "fat": 14
    },
    "timeToMake": "16 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-mixed-veg-poriyal",
    "name": "South Indian Veg Poriyal with Pepper Rasam & Rice",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Pepper-tamarind rasam stimulates digestive acids, paired with steamed veggies and light rice.",
    "ingredients": [
      "1 cup steamed beans, carrots, and cabbage poriyal with coconut",
      "1 bowl piping hot black pepper and tomato rasam",
      "1/2 cup steamed rice"
    ],
    "method": [
      "Simmer tomato and tamarind water with crushed black pepper, cumin, and garlic to make rasam.",
      "Temper with mustard and curry leaves.",
      "Sauté vegetables with coconut and mustard for poriyal.",
      "Enjoy rasam over rice with vegetable poriyal."
    ],
    "nutrition": {
      "calories": 280,
      "protein": 7,
      "carbs": 52,
      "fat": 4
    },
    "timeToMake": "16 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-soya-chunk-pulao",
    "name": "Soya & Green Pea Brown Rice Pulao with Raita",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "fat_loss"
    ],
    "allergens": [
      "soy",
      "dairy"
    ],
    "whyItFits": "Dense 28g plant protein pulao made in one pot with whole grain brown rice and cooling mint raita.",
    "ingredients": [
      "3/4 cup boiled and squeezed soya chunks",
      "1/2 cup steamed brown basmati rice",
      "1/4 cup green peas, onions & whole garam masala",
      "1 tsp oil",
      "1/2 cup mint raita"
    ],
    "method": [
      "Sauté whole spices, onions, and green peas in 1 tsp oil.",
      "Add squeezed soya chunks and cooked brown rice; toss gently for 3 minutes.",
      "Serve warm alongside fresh cucumber mint raita."
    ],
    "nutrition": {
      "calories": 360,
      "protein": 26,
      "carbs": 46,
      "fat": 7
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-nonveg-grilled-fish-tikka",
    "name": "Pan-Seared Ajwain Fish Fillet (160g) with Green Salad",
    "slot": "dinner",
    "diet": [
      "non-veg"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "muscle_gain"
    ],
    "allergens": [
      "fish"
    ],
    "whyItFits": "Clean lean fish protein with near-zero carbohydrate load, accelerating fat oxidation while you sleep.",
    "ingredients": [
      "160g fish fillet (Basa, Pomfret, or Tilapia)",
      "1/2 tsp crushed ajwain (carom seeds), turmeric & lemon juice",
      "1 tsp olive oil for pan searing",
      "1 large bowl sliced cucumber, tomato, and lettuce salad"
    ],
    "method": [
      "Marinate fish fillet in ajwain, turmeric, lemon juice, and rock salt for 5 minutes.",
      "Pan-sear in a skillet with 1 tsp oil for 3-4 minutes per side until flaky.",
      "Serve hot alongside a crisp garden salad."
    ],
    "nutrition": {
      "calories": 260,
      "protein": 34,
      "carbs": 4,
      "fat": 10
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-baingan-aloo-bharta",
    "name": "Smoky Roasted Baingan Mash with Warm Whole Wheat Phulka",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Light, fiber-rich fire-roasted eggplant cooked with minimal oil and comforting aromatics.",
    "ingredients": [
      "1 cup flame-roasted mashed eggplant (baingan)",
      "1/2 cup chopped onions and tomatoes with ginger",
      "1/2 tsp mustard oil & green chillies",
      "1 whole wheat phulka"
    ],
    "method": [
      "Roast eggplant on open flame, peel, and mash pulp.",
      "Sauté ginger, green chillies, onions, and tomatoes in 1/2 tsp mustard oil.",
      "Fold in mashed eggplant and cook for 4 minutes.",
      "Serve hot with a soft whole wheat phulka."
    ],
    "nutrition": {
      "calories": 220,
      "protein": 6,
      "carbs": 36,
      "fat": 5
    },
    "timeToMake": "16 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-chana-dal-palak",
    "name": "Spinach & Bengal Gram Dal with Steamed Rice",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Palak dal balances iron and protein, cooked without heavy spices for easy evening assimilation.",
    "ingredients": [
      "1 cup cooked chana dal and chopped spinach (palak)",
      "1/2 tsp cumin, garlic, and turmeric tadka",
      "1/2 cup steamed rice",
      "1 tsp ghee for tadka"
    ],
    "method": [
      "Pressure cook chana dal and chopped spinach with turmeric and salt.",
      "Temper with minced garlic and cumin in 1 tsp ghee.",
      "Simmer for 2 minutes and pour over warm steamed rice."
    ],
    "nutrition": {
      "calories": 320,
      "protein": 14,
      "carbs": 50,
      "fat": 6
    },
    "timeToMake": "18 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-nonveg-egg-curry-light",
    "name": "Light Tomato Gravy Egg Curry (2 Eggs) with 1 Phulka",
    "slot": "dinner",
    "diet": [
      "non-veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "eggs",
      "gluten"
    ],
    "whyItFits": "2 hard-boiled eggs in a simple home-style tomato broth delivering 14g complete protein.",
    "ingredients": [
      "2 hard-boiled eggs",
      "3/4 cup light tomato-onion broth with cumin and turmeric",
      "1 tsp oil & coriander",
      "1 whole wheat phulka"
    ],
    "method": [
      "Simmer onions and pureed tomatoes with cumin, turmeric, and salt into a thin curry.",
      "Slide halved boiled eggs in and simmer for 2 minutes.",
      "Serve warm with a soft phulka."
    ],
    "nutrition": {
      "calories": 290,
      "protein": 15,
      "carbs": 24,
      "fat": 13
    },
    "timeToMake": "14 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-pumpkin-sabzi",
    "name": "Sweet & Sour Kaddu (Pumpkin) Sabzi with Warm Phulkas",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Pumpkin is packed with beta-carotene, low in calories, and naturally soothing for digestion.",
    "ingredients": [
      "1.5 cups diced yellow pumpkin (kaddu/sitaphal)",
      "1/2 tsp fenugreek seeds (methi dana) & amchur (dry mango powder)",
      "1/2 tsp mustard oil",
      "2 whole wheat phulkas"
    ],
    "method": [
      "Heat oil; temper with fenugreek seeds and green chillies.",
      "Add pumpkin cubes, turmeric, and salt; cover and steam for 8 minutes until tender.",
      "Mash lightly, sprinkle amchur powder, and serve hot with phulkas."
    ],
    "nutrition": {
      "calories": 270,
      "protein": 7,
      "carbs": 48,
      "fat": 4
    },
    "timeToMake": "15 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-capsicum-besan",
    "name": "Besan Shimla Mirch Sabzi with Soft Phulkas (2 pcs)",
    "slot": "dinner",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "allergens": [
      "gluten"
    ],
    "whyItFits": "Pan-roasted chickpea flour coats crunchy bell peppers, adding quick vegetarian protein.",
    "ingredients": [
      "1 cup diced green capsicum (bell pepper)",
      "3 tbsp dry-roasted besan (gram flour)",
      "1/2 tsp cumin, ajwain, and turmeric",
      "1 tsp oil",
      "2 whole wheat phulkas"
    ],
    "method": [
      "Sauté cumin and capsicum in 1 tsp oil for 3 minutes until tender-crisp.",
      "Dust roasted besan, turmeric, amchur, and salt over the peppers.",
      "Stir well on low flame for 2 minutes until aromatic.",
      "Serve warm with phulkas."
    ],
    "nutrition": {
      "calories": 310,
      "protein": 11,
      "carbs": 48,
      "fat": 6
    },
    "timeToMake": "12 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "di-veg-curd-rice-pomegranate",
    "name": "Soothing Curd Rice with Pomegranate & Ginger",
    "slot": "dinner",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Cools the internal body temperature and supplies prebiotic starch and probiotics for restful sleep.",
    "ingredients": [
      "3/4 cup soft mashed rice mixed with 3/4 cup fresh dahi",
      "1/2 tsp mustard seeds, curry leaves, and grated ginger",
      "2 tbsp sweet pomegranate seeds",
      "1/2 tsp oil for tadka"
    ],
    "method": [
      "Mix soft cooked rice with curd, grated ginger, and salt.",
      "Pour a quick tadka of mustard seeds and curry leaves.",
      "Garnish with sweet ruby pomegranate seeds and enjoy cool."
    ],
    "nutrition": {
      "calories": 310,
      "protein": 9,
      "carbs": 52,
      "fat": 6
    },
    "timeToMake": "8 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-haldi-doodh",
    "name": "Golden Turmeric Latte (Haldi Doodh) with Crushed Black Pepper",
    "slot": "bedtime",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "maintenance",
      "heart_healthy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Curcumin combined with piperine reduces systemic inflammation and signals the nervous system to relax.",
    "ingredients": [
      "1 cup warm low-fat or A2 cow milk",
      "1/2 tsp organic turmeric powder (haldi)",
      "1 pinch freshly crushed black pepper (activates curcumin by 2000%)",
      "1/4 tsp green cardamom powder (elaichi)",
      "1/2 tsp pure honey or jaggery (optional)"
    ],
    "method": [
      "Warm milk in a small saucepan over medium-low heat.",
      "Whisk in turmeric powder, crushed black pepper, and cardamom powder.",
      "Simmer gently for 2 minutes without bringing to a harsh boil.",
      "Pour into your favorite mug and sip warm 30 minutes before sleep."
    ],
    "nutrition": {
      "calories": 125,
      "protein": 6,
      "carbs": 12,
      "fat": 5
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-badam-cardamom-milk",
    "name": "Warm Cardamom Almond Milk with Strands of Saffron",
    "slot": "bedtime",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "high_energy",
      "maintenance"
    ],
    "allergens": [
      "dairy",
      "nuts"
    ],
    "whyItFits": "Saffron elevates serotonin levels and promotes restorative REM sleep, complemented by muscle-repairing milk protein.",
    "ingredients": [
      "1 cup warm cow milk",
      "4 crushed blanched almonds (badam paste)",
      "3-4 strands pure Kashmiri saffron (kesar)",
      "1/4 tsp green cardamom powder"
    ],
    "method": [
      "Steep saffron strands in 2 tbsp warm milk for 5 minutes until golden.",
      "Add steeped saffron, almond paste, and cardamom powder to the warm milk pot.",
      "Whisk lightly over gentle flame for 2 minutes.",
      "Sip warm for deep sleep."
    ],
    "nutrition": {
      "calories": 155,
      "protein": 7,
      "carbs": 14,
      "fat": 7
    },
    "timeToMake": "6 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-cinnamon-water",
    "name": "Warm Ceylon Cinnamon & Raw Honey Infusion",
    "slot": "bedtime",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "low_sugar",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Ceylon cinnamon regulates nocturnal glycogen stores, preventing midnight cortisol spikes and sugar cravings.",
    "ingredients": [
      "1.5 cups filtered water",
      "1 small piece Ceylon cinnamon bark (or 1/2 tsp organic cinnamon powder)",
      "1/2 tsp raw unheated honey",
      "Few drops of lemon juice"
    ],
    "method": [
      "Boil water with cinnamon bark for 4-5 minutes until water turns amber.",
      "Turn off flame and let cool to comfortable drinking temperature (lukewarm).",
      "Stir in raw honey and drink slowly."
    ],
    "nutrition": {
      "calories": 35,
      "protein": 0,
      "carbs": 9,
      "fat": 0
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-chamomile-walnuts",
    "name": "Chamomile Flower Infusion with 3 Soaked Walnut Halves",
    "slot": "bedtime",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "maintenance"
    ],
    "allergens": [
      "nuts"
    ],
    "whyItFits": "Chamomile contains apigenin which binds to GABA receptors, paired with melatonin-rich walnuts.",
    "ingredients": [
      "1 cup brewed pure chamomile flower tea",
      "3 soaked walnut halves (akhrot)",
      "Pinch of nutmeg"
    ],
    "method": [
      "Steep dried chamomile flowers in boiling water for 5 minutes, then strain.",
      "Dust with a whisper of freshly grated nutmeg.",
      "Chew soaked walnuts slowly while sipping the soothing herbal tea."
    ],
    "nutrition": {
      "calories": 85,
      "protein": 2,
      "carbs": 3,
      "fat": 7
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-saunf-ajwain-water",
    "name": "Digestive Fennel & Carom Seed (Saunf-Ajwain) Soothing Water",
    "slot": "bedtime",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "low_sugar"
    ],
    "allergens": [],
    "whyItFits": "Relieves dinner gas, reduces abdominal bloat, and calms acidity to ensure peaceful slumber.",
    "ingredients": [
      "1.5 cups water",
      "1 tsp green fennel seeds (saunf)",
      "1/4 tsp carom seeds (ajwain)",
      "Pinch of black salt"
    ],
    "method": [
      "Boil water with saunf and ajwain for 3 minutes until aromatic.",
      "Strain into a cup.",
      "Add a tiny pinch of black salt and sip warm after dinner."
    ],
    "nutrition": {
      "calories": 15,
      "protein": 0,
      "carbs": 3,
      "fat": 0
    },
    "timeToMake": "4 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-ashwagandha-milk",
    "name": "Moon Milk (Ashwagandha & Nutmeg Infused Warm Milk)",
    "slot": "bedtime",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Ashwagandha lowers cortisol (stress hormone) by up to 30%, promoting rapid onset of deep restorative sleep.",
    "ingredients": [
      "1 cup warm milk",
      "1/2 tsp organic Ashwagandha root powder",
      "1/4 tsp freshly grated jaiphal (nutmeg)",
      "1/2 tsp ghee or honey"
    ],
    "method": [
      "Warm milk with Ashwagandha and nutmeg powder on low heat.",
      "Whisk well for 2 minutes to blend the herbs.",
      "Drink warm before bed to soothe nervous exhaustion."
    ],
    "nutrition": {
      "calories": 135,
      "protein": 6,
      "carbs": 12,
      "fat": 6
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-warm-curd",
    "name": "Small Bowl of Fresh Homemade Set Curd with Roasted Jeera",
    "slot": "bedtime",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "maintenance"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Room-temperature curd provides high-quality casein and probiotic lactobacillus without spiking insulin.",
    "ingredients": [
      "1/2 cup fresh room-temperature set curd (dahi)",
      "1/4 tsp roasted cumin powder & rock salt"
    ],
    "method": [
      "Take 1/2 cup fresh mild dahi (not too cold or sour).",
      "Sprinkle roasted cumin powder and a touch of rock salt.",
      "Eat slowly with a spoon."
    ],
    "nutrition": {
      "calories": 75,
      "protein": 4,
      "carbs": 5,
      "fat": 4
    },
    "timeToMake": "2 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-soaked-mamra-badam",
    "name": "Soaked & Peeled Mamra Almonds (6 pcs) with Warm Water",
    "slot": "bedtime",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "muscle_gain",
      "maintenance"
    ],
    "allergens": [
      "nuts"
    ],
    "whyItFits": "Almonds supply magnesium and l-tryptophan to prime melatonin synthesis overnight.",
    "ingredients": [
      "6 soaked and peeled almonds (badam)",
      "1 cup warm water with a pinch of cinnamon"
    ],
    "method": [
      "Peel 6 pre-soaked almonds.",
      "Chew thoroughly and drink warm water alongside."
    ],
    "nutrition": {
      "calories": 50,
      "protein": 2,
      "carbs": 2,
      "fat": 4
    },
    "timeToMake": "2 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-nutmeg-milk",
    "name": "Spiced Nutmeg & Cardamom Cow Milk for Deep Sleep",
    "slot": "bedtime",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "maintenance",
      "high_energy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Myristicin in nutmeg acts as a natural sedative, relaxing muscles and easing tension.",
    "ingredients": [
      "1 cup warm cow milk",
      "1/4 tsp freshly grated nutmeg (jaiphal)",
      "1/4 tsp green cardamom powder"
    ],
    "method": [
      "Heat milk in a saucepan with nutmeg and cardamom.",
      "Pour into a mug and drink warm."
    ],
    "nutrition": {
      "calories": 120,
      "protein": 6,
      "carbs": 11,
      "fat": 5
    },
    "timeToMake": "4 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-almond-milk-sleep",
    "name": "Warm Plant-Based Almond Milk with Chia Seeds",
    "slot": "bedtime",
    "diet": [
      "vegan",
      "veg",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy",
      "low_sugar"
    ],
    "allergens": [
      "nuts"
    ],
    "whyItFits": "100% dairy-free plant milk with omega-3 chia seeds, providing healthy fats without lactose.",
    "ingredients": [
      "1 cup unsweetened almond milk (warmed)",
      "1 tsp chia seeds",
      "1/4 tsp pure vanilla or cardamom"
    ],
    "method": [
      "Warm unsweetened almond milk in a pot.",
      "Stir in chia seeds and cardamom.",
      "Let sit for 3 minutes for seeds to soften, then drink warm."
    ],
    "nutrition": {
      "calories": 80,
      "protein": 2,
      "carbs": 4,
      "fat": 6
    },
    "timeToMake": "4 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-ginger-lemon-water",
    "name": "Warm Ginger & Lemon Nightcap with Mint",
    "slot": "bedtime",
    "diet": [
      "veg",
      "vegan",
      "eggetarian"
    ],
    "goals": [
      "fat_loss",
      "heart_healthy"
    ],
    "allergens": [],
    "whyItFits": "Ginger settles gastrointestinal distress while warm water hydrates cellular tissues.",
    "ingredients": [
      "1.5 cups warm water",
      "1/2 inch crushed fresh ginger root",
      "1 tsp fresh lemon juice",
      "3 fresh mint leaves"
    ],
    "method": [
      "Steep crushed ginger in hot water for 4 minutes.",
      "Strain, add lemon juice and mint leaves.",
      "Sip warmly."
    ],
    "nutrition": {
      "calories": 15,
      "protein": 0,
      "carbs": 3,
      "fat": 0
    },
    "timeToMake": "5 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "bt-veg-makhana-milk",
    "name": "Makhana (Foxnut) Kheer with Jaggery & Cow Milk",
    "slot": "bedtime",
    "diet": [
      "veg",
      "eggetarian"
    ],
    "goals": [
      "muscle_gain",
      "high_energy"
    ],
    "allergens": [
      "dairy"
    ],
    "whyItFits": "Gentle slow-digesting complex carbs and minerals soothe hunger without disturbing sleep quality.",
    "ingredients": [
      "1/2 cup roasted crushed makhana",
      "1 cup low-fat milk",
      "1 tsp organic jaggery powder",
      "Pinch of cardamom powder"
    ],
    "method": [
      "Simmer roasted crushed makhana in milk for 5 minutes until soft and creamy.",
      "Turn off heat, stir in jaggery and cardamom.",
      "Serve warm in a small bowl."
    ],
    "nutrition": {
      "calories": 160,
      "protein": 7,
      "carbs": 24,
      "fat": 4
    },
    "timeToMake": "8 minutes",
    "imageUrl": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80"
  }
];

/**
 * Filter and recommend recipes according to user profile, meal slot, and offset seed.
 * Features rotating modulo pagination so "Give me another option" always serves fresh recipes!
 */
export function getRecommendedRecipes(slotId, profile, count = 2, offset = 0) {
  const {
    dietType = 'veg',
    goal = 'fat_loss',
    allergies = [],
    eatenFoods = []
  } = profile;

  const allergyList = (allergies || []).map(a => a.toLowerCase().trim()).filter(Boolean);
  const eatenList = (eatenFoods || []).map(e => e.toLowerCase().trim()).filter(Boolean);

  // 1. Filter by slot
  let candidates = ADVISER_RECIPES.filter(r => r.slot === slotId);

  // Fallback to all recipes if slot is empty
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

  // 3. Strict Allergy / Dislike Filtering
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

  // Sort best matches first
  scored.sort((a, b) => b.score - a.score);

  const total = scored.length;
  if (total === 0) return [];

  // 6. Rotating pagination using modulo arithmetic
  const safeCount = Math.min(count, total);
  const safeOffset = Math.max(0, offset);
  const startIndex = (safeOffset * safeCount) % total;

  const result = [];
  for (let i = 0; i < safeCount; i++) {
    result.push(scored[(startIndex + i) % total].recipe);
  }
  return result;
}

/**
 * Helpful contextual nutrition tips based on time slot and goal
 */
export const ADVISER_TIPS = {
  breakfast: 'Drink a glass of warm water before breakfast to activate your metabolism and digestive tract.',
  mid_morning: 'Pair mid-morning snacks with water or herbal infusion to maintain peak cellular hydration.',
  lunch: 'Chew slowly and take a relaxed 10-minute stroll after lunch to prevent post-prandial glucose spikes.',
  evening_snack: 'Avoid fried biscuits or sugary snacks; opt for roasted lentils, sattu, or high-protein chaats.',
  dinner: 'Finish dinner at least 1.5 to 2 hours before bed so your stomach rests rather than digesting during REM sleep.',
  bedtime: 'Keep your bedtime drink warm, light, and soothing to ensure deep, unbroken restorative sleep.'
};

/**
 * Automatically determine the current meal slot based on local time.
 */
export function getMealSlotFromTime(date = new Date()) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  // 5:00 - 10:59 -> Breakfast
  if (timeInMinutes >= 300 && timeInMinutes < 660) {
    return { id: 'breakfast', label: 'Breakfast', icon: '🌅', range: '5:00 - 10:59' };
  }
  // 11:00 - 11:59 -> Mid-Morning
  if (timeInMinutes >= 660 && timeInMinutes < 720) {
    return { id: 'mid_morning', label: 'Mid-Morning', icon: '☀️', range: '11:00 - 11:59' };
  }
  // 12:00 - 15:29 -> Lunch
  if (timeInMinutes >= 720 && timeInMinutes < 930) {
    return { id: 'lunch', label: 'Lunch', icon: '🍲', range: '12:00 - 15:29' };
  }
  // 15:30 - 18:29 -> Evening Snack
  if (timeInMinutes >= 930 && timeInMinutes < 1110) {
    return { id: 'evening_snack', label: 'Evening Snack', icon: '☕', range: '15:30 - 18:29' };
  }
  // 18:30 - 22:00 -> Dinner
  if (timeInMinutes >= 1110 && timeInMinutes <= 1320) {
    return { id: 'dinner', label: 'Dinner', icon: '🌙', range: '18:30 - 22:00' };
  }
  // After 22:00 or before 5:00 -> Bedtime
  return { id: 'bedtime', label: 'Bedtime', icon: '✨', range: 'After 22:00' };
}
