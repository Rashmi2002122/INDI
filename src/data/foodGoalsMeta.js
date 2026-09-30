/**
 * Client-side food goals metadata.
 * Contains unique goal definitions and lookup helpers.
 */

export const ALL_GOALS = [
  {
    id: 'weightLoss',
    title: 'Weight Loss',
    icon: '🏃',
    category: 'Weight Loss',
    description: 'Focus on lower calorie and lower sugar foods for weight management.'
  },
  {
    id: 'lowSugar',
    title: 'Low Sugar',
    icon: '🍬',
    category: 'Diet',
    description: 'Limit added and total sugar intake for better metabolic health.'
  },
  {
    id: 'lowCarb',
    title: 'Low Carb',
    icon: '🥦',
    category: 'Diet',
    description: 'Reduce carbohydrate consumption to support weight management.'
  },
  {
    id: 'highProtein',
    title: 'High Protein',
    icon: '🍗',
    category: 'Fitness',
    description: 'Increase protein intake for muscle building and recovery.'
  },
  {
    id: 'lowFat',
    title: 'Low Fat',
    icon: '🫒',
    category: 'Heart Health',
    description: 'Reduce total and saturated fat for cardiovascular wellness.'
  },
  {
    id: 'lowSodium',
    title: 'Low Sodium',
    icon: '🧂',
    category: 'Heart Health',
    description: 'Limit sodium to manage blood pressure and reduce bloating.'
  },
  {
    id: 'highFiber',
    title: 'High Fiber',
    icon: '🌾',
    category: 'Digestive',
    description: 'Boost dietary fiber for gut health and satiety.'
  },
  {
    id: 'vegan',
    title: 'Vegan',
    icon: '🌱',
    category: 'Lifestyle',
    description: 'Exclude all animal-derived ingredients.'
  },
  {
    id: 'vegetarian',
    title: 'Vegetarian',
    icon: '🥗',
    category: 'Lifestyle',
    description: 'Exclude meat and fish but allow dairy and eggs.'
  },
  {
    id: 'glutenFree',
    title: 'Gluten Free',
    icon: '🚫',
    category: 'Allergy',
    description: 'Avoid gluten-containing grains like wheat, barley, and rye.'
  },
  {
    id: 'dairyFree',
    title: 'Dairy Free',
    icon: '🥛',
    category: 'Allergy',
    description: 'Avoid milk, cheese, and other dairy products.'
  },
  {
    id: 'lowCalorie',
    title: 'Low Calorie',
    icon: '🔥',
    category: 'Weight Loss',
    description: 'Choose foods with fewer calories per serving.'
  },
  {
    id: 'heartHealthy',
    title: 'Heart Healthy',
    icon: '❤️',
    category: 'Heart Health',
    description: 'Focus on foods that promote cardiovascular health.'
  }
];

// Map for quick ID lookup supporting both camelCase and UPPERCASE_SNAKE_CASE
export const FOOD_GOALS_META = {};

ALL_GOALS.forEach(g => {
  FOOD_GOALS_META[g.id] = g;
  // Convert camelCase to UPPERCASE_SNAKE_CASE (e.g. weightLoss -> WEIGHT_LOSS)
  const snakeKey = g.id.replace(/([A-Z])/g, '_$1').toUpperCase();
  FOOD_GOALS_META[snakeKey] = g;
});

export function getGoalMeta(goalId) {
  if (!goalId) return { title: 'Goal', icon: '🟢' };
  return FOOD_GOALS_META[goalId] || { title: goalId, icon: '🟢' };
}
