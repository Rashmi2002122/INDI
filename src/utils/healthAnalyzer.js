import { detectAdditives } from '../data/additivesDatabase';

// WHO / FSSAI Nutrients Thresholds (per 100g or 100ml)
export const NUTRIENT_THRESHOLDS = {
  sugars: { low: 5, moderate: 15, unit: 'g' },
  sodium: { low: 120, moderate: 600, unit: 'mg' }, // sodium in mg
  saturatedFat: { low: 1.5, moderate: 5.0, unit: 'g' },
  transFat: { low: 0, moderate: 0.1, unit: 'g' },
  energy: { low: 100, moderate: 300, unit: 'kcal' }
};

/**
 * Calculates health grade (A to E) based on nutrient balance
 * Score scale: 0-100
 * A: 80-100 (Green - Excellent)
 * B: 65-79 (Light Green - Good)
 * C: 50-64 (Yellow - Moderate)
 * D: 35-49 (Orange - Poor)
 * E: 0-34 (Red - Unhealthy / High Risk)
 */
export function calculateHealthScore(product) {
  const nut = product.nutriments || {};

  // Extract per 100g values
  const calories = nut.energy100g || 0;
  const sugar = nut.sugars100g || 0;
  const satFat = nut.saturatedFat100g || 0;
  const sodium = nut.sodium100g || 0; // mg
  const protein = nut.protein100g || 0;
  const fiber = nut.fiber100g || 0;

  // Negative points (max 40)
  let negativePoints = 0;
  // Calories (0-10)
  if (calories > 400) negativePoints += 10;
  else if (calories > 300) negativePoints += 7;
  else if (calories > 200) negativePoints += 4;
  else if (calories > 100) negativePoints += 2;

  // Sugar (0-10)
  if (sugar > 22.5) negativePoints += 10;
  else if (sugar > 15) negativePoints += 8;
  else if (sugar > 9) negativePoints += 5;
  else if (sugar > 4.5) negativePoints += 2;

  // Sat Fat (0-10)
  if (satFat > 10) negativePoints += 10;
  else if (satFat > 7) negativePoints += 7;
  else if (satFat > 4) negativePoints += 4;
  else if (satFat > 2) negativePoints += 2;

  // Sodium (0-10)
  if (sodium > 900) negativePoints += 10;
  else if (sodium > 600) negativePoints += 8;
  else if (sodium > 300) negativePoints += 5;
  else if (sodium > 120) negativePoints += 2;

  // Positive points (max 20)
  let positivePoints = 0;
  if (protein > 12) positivePoints += 10;
  else if (protein > 8) positivePoints += 7;
  else if (protein > 4) positivePoints += 4;

  if (fiber > 5) positivePoints += 10;
  else if (fiber > 3.5) positivePoints += 7;
  else if (fiber > 1.5) positivePoints += 4;

  // Detect additives risk penalty
  const additives = detectAdditives(product.ingredientsText || '');
  let additivePenalty = 0;
  additives.forEach(add => {
    if (add.risk === 'high') additivePenalty += 8;
    else if (add.risk === 'moderate') additivePenalty += 3;
  });

  // Base score 100
  let finalScore = 100 - (negativePoints * 2.2) + (positivePoints * 1.5) - additivePenalty;
  finalScore = Math.max(0, Math.min(100, Math.round(finalScore)));

  let grade = 'C';
  let color = 'yellow';
  let label = 'Moderate Health Choice';

  if (finalScore >= 80) {
    grade = 'A';
    color = 'green';
    label = 'Excellent Health Choice';
  } else if (finalScore >= 65) {
    grade = 'B';
    color = 'green';
    label = 'Good Nutritional Profile';
  } else if (finalScore >= 50) {
    grade = 'C';
    color = 'yellow';
    label = 'Moderate - Consume in Moderation';
  } else if (finalScore >= 35) {
    grade = 'D';
    color = 'amber';
    label = 'Poor - High Sugar/Fat or Additives';
  } else {
    grade = 'E';
    color = 'red';
    label = 'Unhealthy - Highly Processed';
  }

  return {
    score: finalScore,
    grade,
    color,
    label,
    additives
  };
}

/**
 * Categorize nutrient levels as low/moderate/high
 */
export function evaluateNutrientFlags(nutriments) {
  const nut = nutriments || {};

  const sugarVal = nut.sugars100g || 0;
  const sodiumVal = nut.sodium100g || 0;
  const satFatVal = nut.saturatedFat100g || 0;
  const transFatVal = nut.transFat100g || 0;
  const caloriesVal = nut.energy100g || 0;

  return [
    {
      name: 'Sugar',
      value: sugarVal,
      unit: 'g',
      level: sugarVal > 15 ? 'high' : sugarVal > 5 ? 'moderate' : 'low',
      badge: sugarVal > 15 ? '🔴 High Sugar' : sugarVal > 5 ? '🟡 Moderate Sugar' : '🟢 Low Sugar',
      desc: sugarVal > 15 ? 'Exceeds recommended single-serving sugar limit' : 'Safe daily range'
    },
    {
      name: 'Sodium / Salt',
      value: sodiumVal,
      unit: 'mg',
      level: sodiumVal > 600 ? 'high' : sodiumVal > 120 ? 'moderate' : 'low',
      badge: sodiumVal > 600 ? '🔴 High Sodium' : sodiumVal > 120 ? '🟡 Moderate Sodium' : '🟢 Low Sodium',
      desc: sodiumVal > 600 ? 'High blood pressure risk if consumed frequently' : 'Controlled salt levels'
    },
    {
      name: 'Saturated Fat',
      value: satFatVal,
      unit: 'g',
      level: satFatVal > 5 ? 'high' : satFatVal > 1.5 ? 'moderate' : 'low',
      badge: satFatVal > 5 ? '🔴 High Sat Fat' : satFatVal > 1.5 ? '🟡 Moderate Fat' : '🟢 Low Sat Fat',
      desc: satFatVal > 5 ? 'Increases LDL bad cholesterol levels' : 'Healthy fat balance'
    },
    {
      name: 'Trans Fat',
      value: transFatVal,
      unit: 'g',
      level: transFatVal > 0.1 ? 'high' : 'low',
      badge: transFatVal > 0.1 ? '🔴 Trans Fats Present' : '🟢 Zero Trans Fat',
      desc: transFatVal > 0.1 ? 'Industrial trans fat present - avoid' : 'No harmful trans fats detected'
    },
    {
      name: 'Calorie Density',
      value: caloriesVal,
      unit: 'kcal',
      level: caloriesVal > 350 ? 'high' : caloriesVal > 150 ? 'moderate' : 'low',
      badge: caloriesVal > 350 ? '🔴 High Calorie Density' : caloriesVal > 150 ? '🟡 Moderate Energy' : '🟢 Low Energy Density',
      desc: caloriesVal > 350 ? `${caloriesVal} kcal per 100g — energy dense snack` : 'Light energy choice'
    }
  ];
}

/**
 * Extract allergens from product tags or text
 */
export function extractAllergens(product) {
  const allergensSet = new Set();
  const text = ((product.ingredientsText || '') + ' ' + (product.allergens || []).join(' ')).toUpperCase();

  const commonAllergens = [
    { key: 'MILK', label: 'Milk / Dairy', icon: '🥛' },
    { key: 'WHEAT', label: 'Wheat / Gluten', icon: '🌾' },
    { key: 'SOY', label: 'Soybeans', icon: '🫘' },
    { key: 'PEANUT', label: 'Peanuts', icon: '🥜' },
    { key: 'NUT', label: 'Tree Nuts', icon: '🌰' },
    { key: 'EGG', label: 'Eggs', icon: '🥚' },
    { key: 'FISH', label: 'Fish / Seafood', icon: '🐟' },
    { key: 'MUSTARD', label: 'Mustard', icon: '🌭' },
    { key: 'SESAME', label: 'Sesame', icon: '🥯' },
    { key: 'SULPHITE', label: 'Sulfites', icon: '🍷' }
  ];

  commonAllergens.forEach(item => {
    if (text.includes(item.key) || (product.allergens && product.allergens.some(a => String(a).toUpperCase().includes(item.key)))) {
      allergensSet.add(item);
    }
  });

  return Array.from(allergensSet);
}

/**
 * Evaluate a normalized packaged product against selected user goals.
 * Returns an evaluation object matching the structure expected by ProductDetail.jsx:
 *   { goals: [{ goalTitle, severity, reasons, unavailableData }], overallStatus, recommendation, mainConcern, disclaimer }
 */
export function evaluatePackagedGoals(product, selectedGoals = []) {
  if (!product || !selectedGoals || selectedGoals.length === 0) {
    return {
      goals: [],
      overallStatus: 'GOOD MATCH',
      recommendation: 'No goals selected. Set your health goals to get personalized evaluations.',
      mainConcern: null,
      disclaimer: 'Notice: INDI provides general nutritional guidance and does not replace medical advice from a physician or registered dietitian.'
    };
  }

  const nut = product.nutriments || {};
  const ingredients = (product.ingredientsText || '').toUpperCase();
  const allergens = (product.allergens || []).map(a => String(a).toUpperCase());

  const goalResults = selectedGoals.map(goalId => {
    return evaluateSinglePackagedGoal(goalId, nut, ingredients, allergens, product);
  });

  // Determine overall status
  let hasWarning = false;
  let hasCaution = false;
  goalResults.forEach(g => {
    if (g.severity === 'WARNING') hasWarning = true;
    if (g.severity === 'CAUTION') hasCaution = true;
  });

  let overallStatus = 'GOOD MATCH';
  let recommendation = 'This product aligns well with your selected health goals.';
  let mainConcern = null;

  if (hasWarning) {
    overallStatus = 'NOT A GOOD MATCH';
    const warningGoals = goalResults.filter(g => g.severity === 'WARNING');
    mainConcern = `Conflicts with: ${warningGoals.map(g => g.goalTitle).join(', ')}.`;
    recommendation = 'This product has significant concerns for one or more of your goals. Consider alternatives.';
  } else if (hasCaution) {
    overallStatus = 'CAUTION';
    recommendation = 'This product partially fits your goals but has some moderate concerns. Consume in moderation.';
  }

  return {
    goals: goalResults,
    overallStatus,
    recommendation,
    mainConcern,
    disclaimer: 'Notice: INDI provides general nutritional guidance and does not replace medical advice from a physician or registered dietitian.'
  };
}

function evaluateSinglePackagedGoal(goalId, nut, ingredients, allergens, product) {
  const GOAL_TITLES = {
    weightLoss: 'Weight Loss',
    lowSugar: 'Low Sugar',
    lowCarb: 'Low Carb',
    highProtein: 'High Protein',
    lowFat: 'Low Fat',
    lowSodium: 'Low Sodium',
    highFiber: 'High Fiber',
    vegan: 'Vegan',
    vegetarian: 'Vegetarian',
    glutenFree: 'Gluten Free',
    dairyFree: 'Dairy Free',
    lowCalorie: 'Low Calorie',
    heartHealthy: 'Heart Healthy'
  };

  const goalTitle = GOAL_TITLES[goalId] || goalId;
  let severity = 'GOOD';
  const reasons = [];
  const unavailableData = [];

  const calories = nut.energy100g || 0;
  const sugar = nut.sugars100g || 0;
  const fat = nut.fat100g || 0;
  const satFat = nut.saturatedFat100g || 0;
  const transFat = nut.transFat100g || 0;
  const sodium = nut.sodium100g || 0; // in mg
  const protein = nut.protein100g || 0;
  const fiber = nut.fiber100g || 0;
  const carbs = nut.carbohydrates100g || 0;

  switch (goalId) {
    case 'weightLoss':
    case 'lowCalorie':
      if (calories <= 150) {
        severity = 'GOOD';
        reasons.push(`Low calorie density (${calories} kcal/100g) — supports weight management.`);
      } else if (calories <= 300) {
        severity = 'CAUTION';
        reasons.push(`Moderate calorie density (${calories} kcal/100g). Watch portion sizes.`);
      } else {
        severity = 'WARNING';
        reasons.push(`High calorie density (${calories} kcal/100g) — may hinder weight loss goals.`);
      }
      if (sugar > 15) {
        reasons.push(`Contains ${sugar}g sugar/100g which contributes to excess calorie intake.`);
      }
      if (fat > 15) {
        reasons.push(`Contains ${fat}g total fat/100g adding significant calories.`);
      }
      break;

    case 'lowSugar':
      if (sugar <= 5) {
        severity = 'GOOD';
        reasons.push(`Low sugar content (${sugar}g/100g) — safe for sugar-conscious diets.`);
      } else if (sugar <= 15) {
        severity = 'CAUTION';
        reasons.push(`Moderate sugar (${sugar}g/100g). Be mindful of total daily intake.`);
      } else {
        severity = 'WARNING';
        reasons.push(`High sugar content (${sugar}g/100g) — exceeds recommended limits.`);
      }
      break;

    case 'lowCarb':
      if (carbs <= 10) {
        severity = 'GOOD';
        reasons.push(`Very low carbohydrates (${carbs}g/100g) — excellent for low-carb diets.`);
      } else if (carbs <= 30) {
        severity = 'CAUTION';
        reasons.push(`Moderate carbohydrates (${carbs}g/100g). May need portion control.`);
      } else {
        severity = 'WARNING';
        reasons.push(`High in carbohydrates (${carbs}g/100g) — not suitable for low-carb diets.`);
      }
      if (sugar > 10) {
        reasons.push(`Includes ${sugar}g sugar which adds to net carb count.`);
      }
      break;

    case 'highProtein':
      if (protein >= 15) {
        severity = 'GOOD';
        reasons.push(`Excellent protein source (${protein}g/100g) — great for muscle building.`);
      } else if (protein >= 8) {
        severity = 'GOOD';
        reasons.push(`Moderate protein content (${protein}g/100g).`);
      } else {
        severity = 'CAUTION';
        reasons.push(`Low protein content (${protein}g/100g). Consider supplementing from other sources.`);
      }
      break;

    case 'lowFat':
      if (fat <= 3) {
        severity = 'GOOD';
        reasons.push(`Very low fat (${fat}g/100g) — suitable for low-fat diets.`);
      } else if (fat <= 10) {
        severity = 'CAUTION';
        reasons.push(`Moderate fat content (${fat}g/100g). Monitor daily totals.`);
      } else {
        severity = 'WARNING';
        reasons.push(`High fat content (${fat}g/100g) — not ideal for low-fat goals.`);
      }
      if (satFat > 5) {
        reasons.push(`Contains ${satFat}g saturated fat/100g which raises LDL cholesterol.`);
      }
      break;

    case 'lowSodium':
      if (sodium <= 120) {
        severity = 'GOOD';
        reasons.push(`Low sodium (${sodium}mg/100g) — safe for sodium-restricted diets.`);
      } else if (sodium <= 600) {
        severity = 'CAUTION';
        reasons.push(`Moderate sodium (${sodium}mg/100g). Limit other high-sodium foods today.`);
      } else {
        severity = 'WARNING';
        reasons.push(`High sodium (${sodium}mg/100g) — may raise blood pressure.`);
      }
      break;

    case 'highFiber':
      if (fiber >= 5) {
        severity = 'GOOD';
        reasons.push(`Good fiber source (${fiber}g/100g) — supports digestive health.`);
      } else if (fiber >= 2) {
        severity = 'CAUTION';
        reasons.push(`Moderate fiber (${fiber}g/100g). Try pairing with high-fiber foods.`);
      } else {
        severity = 'CAUTION';
        reasons.push(`Low dietary fiber (${fiber}g/100g). Consider adding fiber-rich foods.`);
      }
      break;

    case 'vegan': {
      const animalKeywords = ['MILK', 'CREAM', 'BUTTER', 'CHEESE', 'WHEY', 'CASEIN', 'LACTOSE',
        'EGG', 'HONEY', 'GELATIN', 'GELATINE', 'SHELLAC', 'CARMINE', 'LARD', 'TALLOW',
        'ANCHOV', 'FISH', 'MEAT', 'CHICKEN', 'BEEF', 'PORK', 'LAMB'];
      const found = animalKeywords.filter(kw => ingredients.includes(kw));
      if (found.length === 0) {
        severity = 'GOOD';
        reasons.push('No animal-derived ingredients detected — appears vegan-friendly.');
      } else {
        severity = 'WARNING';
        reasons.push(`Contains animal-derived ingredients: ${found.map(f => f.toLowerCase()).join(', ')}.`);
      }
      if (!ingredients || ingredients.length < 5) {
        unavailableData.push('Full ingredient list');
        reasons.push('Ingredient list not fully available — verify packaging manually.');
      }
      break;
    }

    case 'vegetarian': {
      const meatKeywords = ['MEAT', 'CHICKEN', 'BEEF', 'PORK', 'LAMB', 'FISH', 'ANCHOV',
        'GELATIN', 'GELATINE', 'LARD', 'TALLOW', 'CARMINE', 'SHELLAC'];
      const found = meatKeywords.filter(kw => ingredients.includes(kw));
      if (found.length === 0) {
        severity = 'GOOD';
        reasons.push('No meat or non-vegetarian ingredients detected.');
      } else {
        severity = 'WARNING';
        reasons.push(`Contains non-vegetarian ingredients: ${found.map(f => f.toLowerCase()).join(', ')}.`);
      }
      if (!ingredients || ingredients.length < 5) {
        unavailableData.push('Full ingredient list');
      }
      break;
    }

    case 'glutenFree': {
      const glutenKeywords = ['WHEAT', 'BARLEY', 'RYE', 'OATS', 'SPELT', 'KAMUT', 'TRITICALE', 'SEMOLINA', 'MALT', 'GLUTEN'];
      const found = glutenKeywords.filter(kw => ingredients.includes(kw) || allergens.some(a => a.includes(kw)));
      if (found.length === 0) {
        severity = 'GOOD';
        reasons.push('No gluten-containing ingredients detected.');
      } else {
        severity = 'WARNING';
        reasons.push(`Contains gluten sources: ${found.map(f => f.toLowerCase()).join(', ')}. Not safe for celiac disease.`);
      }
      if (!ingredients || ingredients.length < 5) {
        unavailableData.push('Full ingredient list');
        reasons.push('Ingredient list not fully available — check packaging for allergen declarations.');
      }
      break;
    }

    case 'dairyFree': {
      const dairyKeywords = ['MILK', 'CREAM', 'BUTTER', 'CHEESE', 'WHEY', 'CASEIN', 'LACTOSE', 'YOGURT', 'GHEE'];
      const found = dairyKeywords.filter(kw => ingredients.includes(kw) || allergens.some(a => a.includes(kw)));
      if (found.length === 0) {
        severity = 'GOOD';
        reasons.push('No dairy ingredients detected.');
      } else {
        severity = 'WARNING';
        reasons.push(`Contains dairy: ${found.map(f => f.toLowerCase()).join(', ')}.`);
      }
      if (!ingredients || ingredients.length < 5) {
        unavailableData.push('Full ingredient list');
      }
      break;
    }

    case 'heartHealthy':
      if (satFat <= 1.5 && sodium <= 300 && transFat <= 0.1) {
        severity = 'GOOD';
        reasons.push('Low in saturated fat, sodium, and trans fats — heart-friendly choice.');
      } else if (satFat > 5 || sodium > 600 || transFat > 0.1) {
        severity = 'WARNING';
        reasons.push('High levels of heart-harmful nutrients detected.');
      } else {
        severity = 'CAUTION';
        reasons.push('Moderate levels of saturated fat or sodium. Consume mindfully.');
      }
      if (satFat > 5) reasons.push(`Saturated fat (${satFat}g/100g) raises LDL cholesterol.`);
      if (transFat > 0.1) reasons.push(`Trans fat detected (${transFat}g/100g) — avoid entirely.`);
      if (sodium > 600) reasons.push(`Sodium (${sodium}mg/100g) may elevate blood pressure.`);
      if (fiber >= 3) reasons.push(`Contains ${fiber}g fiber/100g which supports heart health.`);
      break;

    default:
      severity = 'GOOD';
      reasons.push('Fits within general healthy dietary guidelines.');
      break;
  }

  // Add at least one reason if none were generated
  if (reasons.length === 0) {
    reasons.push('Evaluated against this goal — no specific concerns found.');
  }

  return { goal: goalId, goalTitle, severity, reasons, unavailableData };
}
