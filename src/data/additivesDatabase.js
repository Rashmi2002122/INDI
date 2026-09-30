// Database of food additives (E-numbers and chemical names) with health implications
export const ADDITIVES_DATABASE = {
  // FLAVOR ENHANCERS
  'E621': {
    code: 'E621',
    name: 'Monosodium Glutamate (MSG)',
    category: 'Flavor Enhancer',
    risk: 'moderate',
    description: 'Enhances savory (umami) flavor.',
    details: 'May cause sensitivity, headaches, flushing, or sweating in sensitive individuals ("MSG Symptom Complex"). Frequent consumption of high-MSG processed foods is linked to overeating.'
  },
  'E627': {
    code: 'E627',
    name: 'Disodium Guanylate',
    category: 'Flavor Enhancer',
    risk: 'low',
    description: 'Synergistic flavor enhancer often paired with MSG.',
    details: 'Metabolized into purines. Individuals with gout or kidney stones should limit intake.'
  },
  'E631': {
    code: 'E631',
    name: 'Disodium Inosinate',
    category: 'Flavor Enhancer',
    risk: 'low',
    description: 'Flavor enhancer commonly found in chips and savory snacks.',
    details: 'Converts to purines in the body. Not suitable for individuals with gout.'
  },

  // ARTIFICIAL COLORS
  'E102': {
    code: 'E102',
    name: 'Tartrazine (Yellow #5)',
    category: 'Artificial Color',
    risk: 'high',
    description: 'Synthetic azo dye providing bright lemon yellow color.',
    details: 'Requires warning in EU due to link with hyperactivity & attention deficit in children. Strong trigger for allergic reactions and asthma in sensitive people.'
  },
  'E110': {
    code: 'E110',
    name: 'Sunset Yellow FCF (Yellow #6)',
    category: 'Artificial Color',
    risk: 'high',
    description: 'Synthetic orange-yellow dye used in snacks, jellies, and beverages.',
    details: 'Associated with hyperactivity in children, hives, and stomach upset. Restricted in Sweden and Norway.'
  },
  'E122': {
    code: 'E122',
    name: 'Azorubine / Carmoisine',
    category: 'Artificial Color',
    risk: 'high',
    description: 'Red synthetic azo dye.',
    details: 'Linked to hyperactive behavior in children and potential allergen flare-ups. Banned in USA and Japan.'
  },
  'E129': {
    code: 'E129',
    name: 'Allura Red AC (Red #40)',
    category: 'Artificial Color',
    risk: 'high',
    description: 'Deep red synthetic dye in candies and flavored drinks.',
    details: 'Implicated in allergic skin reactions and childhood hyperactivity. Banned in several European countries.'
  },
  'E133': {
    code: 'E133',
    name: 'Brilliant Blue FCF (Blue #1)',
    category: 'Artificial Color',
    risk: 'moderate',
    description: 'Synthetic blue colorant.',
    details: 'May cause allergic reactions in individuals with pre-existing asthma or skin conditions.'
  },
  'E150D': {
    code: 'E150d',
    name: 'Sulphite Ammonia Caramel (Caramel IV)',
    category: 'Colorant',
    risk: 'moderate',
    description: 'Dark brown color produced by heating carbohydrates with ammonium and sulphite compounds.',
    details: 'May contain trace levels of 4-MEI (4-methylimidazole), a byproduct monitored for potential carcinogenic risks in high doses.'
  },

  // PRESERVATIVES
  'E211': {
    code: 'E211',
    name: 'Sodium Benzoate',
    category: 'Preservative',
    risk: 'high',
    description: 'Antifungal preservative in acidic foods and carbonated drinks.',
    details: 'When combined with Ascorbic Acid (Vitamin C), can react to form small amounts of Benzene, a known carcinogen. May exacerbate ADHD.'
  },
  'E220': {
    code: 'E220',
    name: 'Sulfur Dioxide / Sulphites',
    category: 'Preservative',
    risk: 'high',
    description: 'Preservative and antioxidant in dried fruits, wines, and juices.',
    details: 'Known severe allergen. Can trigger bronchial spasms and severe attacks in asthmatic individuals.'
  },
  'E250': {
    code: 'E250',
    name: 'Sodium Nitrite',
    category: 'Preservative & Color Fixative',
    risk: 'high',
    description: 'Used in cured meats to prevent botulism and maintain pink color.',
    details: 'Can react with protein amines under high heat to form nitrosamines, classified as probable human carcinogens.'
  },
  'E282': {
    code: 'E282',
    name: 'Calcium Propionate',
    category: 'Preservative',
    risk: 'moderate',
    description: 'Antifungal agent used in commercial bread and baked goods.',
    details: 'Linked to irritability, restlessness, and sleep disturbance in young children when consumed regularly.'
  },

  // SWEETENERS
  'E951': {
    code: 'E951',
    name: 'Aspartame',
    category: 'Artificial Sweetener',
    risk: 'moderate',
    description: 'Low-calorie intense artificial sweetener.',
    details: 'Contains Phenylalanine (dangerous for individuals with Phenylketonuria PKU). Some consumers report headaches or digestive discomfort.'
  },
  'E955': {
    code: 'E955',
    name: 'Sucralose',
    category: 'Artificial Sweetener',
    risk: 'moderate',
    description: 'Zero-calorie sweetener derived from chlorinated sugar.',
    details: 'May alter gut microbiome composition and affect glycemic responses when heated with fats.'
  },
  'E950': {
    code: 'E950',
    name: 'Acesulfame Potassium (Ace-K)',
    category: 'Artificial Sweetener',
    risk: 'moderate',
    description: 'Calorie-free sweetener 200x sweeter than sugar.',
    details: 'Often blended with aspartame. Contenders cite lack of long-term gut flora impact data.'
  },

  // FATS & OILS / EMULSIFIERS / ANTIOXIDANTS
  'HFCS': {
    code: 'HFCS',
    name: 'High Fructose Corn Syrup',
    category: 'Sweetener',
    risk: 'high',
    description: 'Highly processed corn starch sweetener with concentrated fructose.',
    details: 'Bypasses normal hepatic regulation, contributing directly to non-alcoholic fatty liver disease (NAFLD), visceral fat accumulation, and insulin resistance.'
  },
  'TRANS_FAT': {
    code: 'TRANS_FAT',
    name: 'Hydrogenated Oils / Trans Fats',
    category: 'Unhealthy Fat',
    risk: 'high',
    description: 'Hardened vegetable oil formed via chemical hydrogenation.',
    details: 'Significantly increases LDL (bad) cholesterol while reducing HDL (good) cholesterol. Strongly linked to coronary heart disease.'
  },
  'PALM_OIL': {
    code: 'PALM_OIL',
    name: 'Palm Oil / Palmolein',
    category: 'Fat',
    risk: 'moderate',
    description: 'High saturated fat tropical oil commonly used in Indian snacks and fried chips.',
    details: 'Contains around 50% saturated fatty acids. Frequent high intake increases arterial plaque risk.'
  },
  'E320': {
    code: 'E320',
    name: 'BHA (Butylated Hydroxyanisole)',
    category: 'Antioxidant Preservative',
    risk: 'high',
    description: 'Synthetic antioxidant used to prevent fat rancidity.',
    details: 'Classified as a potential endocrine disruptor and reasonably anticipated human carcinogen by health authorities.'
  },
  'E321': {
    code: 'E321',
    name: 'BHT (Butylated Hydroxytoluene)',
    category: 'Antioxidant Preservative',
    risk: 'high',
    description: 'Synthetic preservative in oils and snack packaging.',
    details: 'Potential toxic effects on liver, thyroid, and kidney function at high exposure levels.'
  },
  'TBHQ': {
    code: 'E319',
    name: 'TBHQ (Tertiary Butylhydroquinone)',
    category: 'Antioxidant Preservative',
    risk: 'high',
    description: 'Synthetic fat stabilizer used in instant noodles and fried chips.',
    details: 'High doses linked to immune system disruption and cellular damage.'
  }
};

// Helper function to scan ingredient text for additives & E-numbers
export function detectAdditives(ingredientText) {
  if (!ingredientText || typeof ingredientText !== 'string') return [];

  const textUpper = ingredientText.toUpperCase();
  const detectedMap = new Map();

  // Search by E-numbers or keywords
  Object.values(ADDITIVES_DATABASE).forEach(additive => {
    // Check E-number code (e.g. E621, E102)
    const codeRegex = new RegExp(`\\b${additive.code}\\b`, 'i');
    const nameRegex = new RegExp(additive.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');

    let matched = codeRegex.test(textUpper) || nameRegex.test(textUpper);

    // Keyword special checks
    if (!matched) {
      if (additive.code === 'HFCS' && (textUpper.includes('HIGH FRUCTOSE') || textUpper.includes('CORN SYRUP'))) {
        matched = true;
      } else if (additive.code === 'TRANS_FAT' && (textUpper.includes('HYDROGENATED') || textUpper.includes('TRANS FAT'))) {
        matched = true;
      } else if (additive.code === 'PALM_OIL' && (textUpper.includes('PALM OIL') || textUpper.includes('PALMOLEIN'))) {
        matched = true;
      } else if (additive.code === 'E621' && (textUpper.includes('MSG') || textUpper.includes('MONOSODIUM GLUTAMATE'))) {
        matched = true;
      } else if (additive.code === 'E102' && textUpper.includes('TARTRAZINE')) {
        matched = true;
      } else if (additive.code === 'E110' && textUpper.includes('SUNSET YELLOW')) {
        matched = true;
      } else if (additive.code === 'TBHQ' && textUpper.includes('TBHQ')) {
        matched = true;
      }
    }

    if (matched && !detectedMap.has(additive.code)) {
      detectedMap.set(additive.code, additive);
    }
  });

  // Also extract any standard E-numbers present in ingredients not in database
  const genericERegex = /\bE[- ]?([1-9]\d{2,3}[a-z]?)\b/gi;
  let match;
  while ((match = genericERegex.exec(ingredientText)) !== null) {
    const eCode = 'E' + match[1].toUpperCase();
    if (!detectedMap.has(eCode)) {
      detectedMap.set(eCode, {
        code: eCode,
        name: `Additive ${eCode}`,
        category: 'Food Additive',
        risk: 'low',
        description: 'Standard regulated food additive or preservative.',
        details: 'Listed on package ingredient breakdown.'
      });
    }
  }

  return Array.from(detectedMap.values());
}
