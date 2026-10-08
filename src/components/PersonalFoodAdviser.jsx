import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  ChefHat, 
  Clock, 
  Flame, 
  Activity, 
  Leaf, 
  Egg, 
  Drumstick, 
  Scale, 
  ShieldAlert, 
  ChevronRight, 
  RefreshCw, 
  Sliders, 
  Check, 
  Plus, 
  X, 
  ArrowLeft,
  Calendar,
  Heart,
  Info,
  ShoppingBag,
  ExternalLink,
  Copy
} from 'lucide-react';
import { 
  ADVISER_RECIPES, 
  getMealSlotFromTime, 
  getRecommendedRecipes, 
  ADVISER_TIPS 
} from '../data/recipesAdviserDatabase';
import { API_BASE } from '../services/api';

/**
 * Simplify a dish name into an optimal restaurant search term for food delivery apps (Zomato/Swiggy)
 */
function getCleanDishSearchQuery(recipeName) {
  if (!recipeName) return 'Healthy Meal';
  return recipeName
    .replace(/^(High-Protein|Slow-Cooked|Comforting|Turmeric & Pepper|Herb|Zesty|Warm|Chilled|Clean|Organic|Pan-Seared|Tawa)\s+/i, '')
    .replace(/\s+(with|accompanied by|alongside|in).*$/i, '')
    .trim();
}

/**
 * Generate goal-tailored restaurant cooking instructions
 */
function getRestaurantInstructions(goal = 'fat_loss', allergies = []) {
  const g = (goal || 'fat_loss').toLowerCase();
  const notes = [];

  if (g.includes('fat_loss')) {
    notes.push("Cook with minimal oil / ghee (request 1/2 tsp max).");
    notes.push("Strictly NO added cream, butter garnish, or mayonnaise.");
    notes.push("Keep any gravies, dressings, or sauces on the side.");
    notes.push("Choose tandoori, grilled, or roasted over deep-fried.");
  } else if (g.includes('muscle_gain')) {
    notes.push("Request an extra portion of protein (paneer, eggs, chicken, or tofu).");
    notes.push("Keep gravy light; avoid sugary glazes or heavy cornstarch.");
    notes.push("Pair with whole wheat roti or steamed rice rather than butter naan.");
  } else if (g.includes('low_sugar')) {
    notes.push("STRICTLY ZERO ADDED SUGAR or sweet chutneys / sweet curries.");
    notes.push("Avoid cornstarch / maida thickening in the gravies.");
    notes.push("Include fresh lemon wedges and extra green salad.");
  } else if (g.includes('heart_healthy')) {
    notes.push("STRICTLY LOW SODIUM / LOW SALT. No added MSG or table salt.");
    notes.push("Cook in light vegetable/olive oil; no dalda/vanaspati.");
    notes.push("No salted papad, pickles, or salted butter garnish.");
  } else {
    notes.push("Prepare fresh with light oil/butter.");
    notes.push("Avoid artificial food colorings or excessive heavy cream.");
  }

  if (allergies && allergies.length > 0) {
    notes.push(`CRITICAL ALLERGY ALERT: Strictly NO ${allergies.map(a => a.toUpperCase()).join(', ')}!`);
  }

  return notes;
}

const ADVISER_PROFILE_KEY = 'indi_food_adviser_profile';

const DEFAULT_PROFILE = {
  goal: 'fat_loss',
  dietType: 'veg',
  calories: 1800,
  protein: 90,
  allergies: [],
  eatenFoods: []
};

const GOAL_OPTIONS = [
  { id: 'fat_loss', label: 'Fat Loss', icon: '🔥', desc: 'High protein, high fiber, calorie-controlled' },
  { id: 'muscle_gain', label: 'Muscle Gain', icon: '💪', desc: 'Calorie-dense, 25-40g protein per main meal' },
  { id: 'maintenance', label: 'Maintenance', icon: '⚖️', desc: 'Balanced carbs, protein, and healthy fats' },
  { id: 'high_energy', label: 'High Energy', icon: '⚡', desc: 'Sustained energy and low glycemic index' },
  { id: 'low_sugar', label: 'Low Sugar', icon: '🩸', desc: 'Diabetic-friendly, low glycemic impact' },
  { id: 'heart_healthy', label: 'Heart Healthy', icon: '❤️', desc: 'Low sodium, heart-healthy fats' }
];

const DIET_OPTIONS = [
  { id: 'veg', label: 'Pure Veg', icon: Leaf, desc: 'Dairy, pulses, paneer, no meat or egg' },
  { id: 'eggetarian', label: 'Eggetarian', icon: Egg, desc: 'Veg diet plus farm-fresh eggs' },
  { id: 'non-veg', label: 'Non-Veg', icon: Drumstick, desc: 'Chicken, fish, eggs & lean meats' },
  { id: 'vegan', label: '100% Vegan', icon: Leaf, desc: 'Plant-only, zero dairy or honey' }
];

const ALL_SLOTS = [
  { id: 'breakfast', label: 'Breakfast', icon: '🌅', range: '5:00 - 10:59' },
  { id: 'mid_morning', label: 'Mid-Morning', icon: '☀️', range: '11:00 - 11:59' },
  { id: 'lunch', label: 'Lunch', icon: '🍲', range: '12:00 - 15:29' },
  { id: 'evening_snack', label: 'Evening Snack', icon: '☕', range: '15:30 - 18:29' },
  { id: 'dinner', label: 'Dinner', icon: '🌙', range: '18:30 - 22:00' },
  { id: 'bedtime', label: 'Bedtime', icon: '✨', range: 'After 22:00' }
];

// Module-level in-memory cache for instant 0ms responses across tabs and seeds
const RECIPES_MEMORY_CACHE = new Map();

// Helper to optimize image delivery width & quality for mobile screens (cuts payload by 75-85%)
function getOptimizedImageUrl(url, width = 480, quality = 75) {
  if (!url) return null;
  if (typeof url === 'string' && url.includes('images.unsplash.com')) {
    try {
      const parsed = new URL(url);
      parsed.searchParams.set('w', width.toString());
      parsed.searchParams.set('q', quality.toString());
      parsed.searchParams.set('auto', 'format');
      parsed.searchParams.set('fit', 'crop');
      return parsed.toString();
    } catch {
      return url;
    }
  }
  return url;
}

// Sub-component for smooth image loading with skeleton shimmer and zero layout shift
function RecipeCardImage({ src, alt, slotLabel, timeToMake, optionIndex }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const optimizedSrc = useMemo(() => getOptimizedImageUrl(src, 480, 75), [src]);

  if (hasError || !optimizedSrc) return null;

  return (
    <div className="relative w-full h-44 -mt-1 rounded-2xl overflow-hidden bg-slate-100 group shadow-sm">
      {/* Shimmer skeleton while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-slate-300 border-t-emerald-500 animate-spin opacity-40" />
        </div>
      )}

      <img 
        src={optimizedSrc} 
        alt={alt} 
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30 pointer-events-none" />
      
      {/* Floating Option Badge */}
      <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider text-emerald-950 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm border border-white/40">
        Option {optionIndex + 1}
      </span>

      {/* Floating Time Pill */}
      <span className="absolute bottom-3 right-3 text-[11px] font-black text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-sm flex items-center gap-1.5 border border-white/20">
        <Clock className="w-3.5 h-3.5 text-emerald-300" /> {timeToMake}
      </span>
    </div>
  );
}

export default function PersonalFoodAdviser({ onBack }) {
  // Load saved profile or initialize default
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(ADVISER_PROFILE_KEY);
      return saved ? { ...DEFAULT_PROFILE, ...JSON.parse(saved) } : DEFAULT_PROFILE;
    } catch (e) {
      return DEFAULT_PROFILE;
    }
  });

  const [currentTimeSlot, setCurrentTimeSlot] = useState(() => getMealSlotFromTime());
  const [selectedSlotId, setSelectedSlotId] = useState(() => getMealSlotFromTime().id);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [fullDayView, setFullDayView] = useState(false);
  const [allergyInput, setAllergyInput] = useState('');
  const [eatenInput, setEatenInput] = useState('');
  const [seed, setSeed] = useState(0); // Shuffle seed
  const [cardModes, setCardModes] = useState({}); // { [recipeId]: 'cook' | 'order' | null }
  const [copiedId, setCopiedId] = useState(null);

  const handleSetMode = (recipeId, mode) => {
    setCardModes(prev => ({
      ...prev,
      [recipeId]: prev[recipeId] === mode ? null : mode
    }));
  };

  const handleCopyNote = (recipeId, text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(recipeId);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Update time slot on mount
  useEffect(() => {
    const slot = getMealSlotFromTime();
    setCurrentTimeSlot(slot);
    setSelectedSlotId(slot.id);
  }, []);

  // Save profile changes to localStorage
  const updateProfile = (partial) => {
    setProfile(prev => {
      const updated = { ...prev, ...partial };
      try {
        localStorage.setItem(ADVISER_PROFILE_KEY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  // Add Allergy
  const handleAddAllergy = (e) => {
    e.preventDefault();
    if (!allergyInput.trim()) return;
    const item = allergyInput.trim().toLowerCase();
    if (!profile.allergies.includes(item)) {
      updateProfile({ allergies: [...profile.allergies, item] });
    }
    setAllergyInput('');
  };

  const handleRemoveAllergy = (item) => {
    updateProfile({ allergies: profile.allergies.filter(a => a !== item) });
  };

  // Add Eaten Food
  const handleAddEaten = (e) => {
    e.preventDefault();
    if (!eatenInput.trim()) return;
    const item = eatenInput.trim().toLowerCase();
    if (!profile.eatenFoods.includes(item)) {
      updateProfile({ eatenFoods: [...profile.eatenFoods, item] });
    }
    setEatenInput('');
  };

  const handleRemoveEaten = (item) => {
    updateProfile({ eatenFoods: profile.eatenFoods.filter(e => e !== item) });
  };

  // Fetch Recommended Recipes for active slot (Live from Aiven MySQL via Spring Boot with SWR cache & offline fallback)
  const [backendRecipes, setBackendRecipes] = useState(null);

  useEffect(() => {
    const cacheKey = `${selectedSlotId}_${profile.dietType}_${profile.goal}_${seed}_${fullDayView}_${(profile.allergies || []).join('-')}_${(profile.eatenFoods || []).join('-')}`;

    // Instant SWR Cache Hit (0ms response)
    if (RECIPES_MEMORY_CACHE.has(cacheKey)) {
      setBackendRecipes(RECIPES_MEMORY_CACHE.get(cacheKey));
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const fetchRecipes = async () => {
      try {
        const params = new URLSearchParams({
          slot: selectedSlotId,
          dietType: profile.dietType,
          goal: profile.goal,
          limit: fullDayView ? '3' : '2',
          offset: seed.toString()
        });
        if (profile.allergies?.length) {
          params.set('allergies', profile.allergies.join(','));
        }
        if (profile.eatenFoods?.length) {
          params.set('eatenFoods', profile.eatenFoods.join(','));
        }

        const res = await fetch(`${API_BASE}/recipes/recommend?${params.toString()}`, { signal });
        if (res.ok) {
          const data = await res.json();
          if (!signal.aborted && Array.isArray(data) && data.length > 0) {
            RECIPES_MEMORY_CACHE.set(cacheKey, data);
            setBackendRecipes(data);
            return;
          }
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.warn('Backend recipes API offline, serving from local cache:', err);
        }
      }
      if (!signal.aborted) setBackendRecipes(null);
    };

    fetchRecipes();
    return () => {
      controller.abort();
    };
  }, [selectedSlotId, profile.dietType, profile.goal, profile.allergies, profile.eatenFoods, seed, fullDayView]);

  const currentSlotMeta = ALL_SLOTS.find(s => s.id === selectedSlotId) || ALL_SLOTS[0];
  const recommendedRecipes = useMemo(() => {
    if (backendRecipes && backendRecipes.length > 0) {
      return backendRecipes;
    }
    return getRecommendedRecipes(selectedSlotId, profile, fullDayView ? 3 : 2, seed);
  }, [backendRecipes, selectedSlotId, profile, seed, fullDayView]);

  // Greeting Message generator
  const getGreeting = () => {
    const hours = new Date().getHours();
    let timeGreeting = 'Good morning';
    if (hours >= 12 && hours < 17) timeGreeting = 'Good afternoon';
    else if (hours >= 17) timeGreeting = 'Good evening';

    const goalLabel = GOAL_OPTIONS.find(g => g.id === profile.goal)?.label.toLowerCase() || 'health';
    return `${timeGreeting}! Here's what fits your ${goalLabel} goal for ${currentSlotMeta.label.toLowerCase()}.`;
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] max-w-md mx-auto px-4 py-4 space-y-4 pb-16">
      
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Scanner
        </button>

        <button
          onClick={() => setIsEditingProfile(!isEditingProfile)}
          className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl transition-all border ${
            isEditingProfile 
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          {isEditingProfile ? 'Done Editing' : 'Goal Profile'}
        </button>
      </div>

      {/* Hero Banner: Personal Food Adviser */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-5 text-white shadow-md relative overflow-hidden space-y-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 border border-emerald-400/30">
              <ChefHat className="w-3 h-3 text-emerald-300" /> Personal Food Adviser
            </span>
            <h2 className="text-xl font-black tracking-tight text-white">
              What Should I Eat Now?
            </h2>
          </div>
          <button
            onClick={() => {
              setSeed(s => s + 1);
              setCardModes({});
              setBackendRecipes(null);
            }}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-white"
            title="Shuffle Options"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        {/* Profile Snapshot Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-bold">
          <span className="bg-white/15 px-2.5 py-1 rounded-xl flex items-center gap-1">
            <span>{GOAL_OPTIONS.find(g => g.id === profile.goal)?.icon}</span>
            <span>{GOAL_OPTIONS.find(g => g.id === profile.goal)?.label}</span>
          </span>
          <span className="bg-white/15 px-2.5 py-1 rounded-xl flex items-center gap-1">
            {profile.dietType === 'veg' && <Leaf className="w-3 h-3 text-emerald-300" />}
            {profile.dietType === 'eggetarian' && <Egg className="w-3 h-3 text-amber-300" />}
            {profile.dietType === 'non-veg' && <Drumstick className="w-3 h-3 text-red-300" />}
            {profile.dietType === 'vegan' && <Leaf className="w-3 h-3 text-green-400" />}
            <span className="capitalize">{profile.dietType}</span>
          </span>
          <span className="bg-white/15 px-2.5 py-1 rounded-xl">
            Target: ~{profile.calories} kcal • {profile.protein}g protein
          </span>
        </div>
      </div>

      {/* EDIT PROFILE DRAWER (Interactive) */}
      {isEditingProfile && (
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-emerald-600" /> Customize Your Goal Profile
            </h3>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">Auto-Saved</span>
          </div>

          {/* Diet Type Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700">1. Diet Type</label>
            <div className="grid grid-cols-2 gap-2">
              {DIET_OPTIONS.map(opt => {
                const isSel = profile.dietType === opt.id;
                const IconComponent = opt.icon;
                return (
                  <button
                    key={opt.id}
                    onClick={() => updateProfile({ dietType: opt.id })}
                    className={`p-2.5 rounded-2xl border text-left transition-all flex items-center gap-2 ${
                      isSel 
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isSel ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <div>
                      <div className="text-xs font-black">{opt.label}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Goal Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700">2. Active Food Goal</label>
            <div className="grid grid-cols-2 gap-2">
              {GOAL_OPTIONS.map(opt => {
                const isSel = profile.goal === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => updateProfile({ goal: opt.id })}
                    className={`p-2.5 rounded-2xl border text-left transition-all ${
                      isSel 
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-black flex items-center gap-1.5">
                      <span>{opt.icon}</span> {opt.label}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">{opt.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Calorie & Protein Targets */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700">Daily Calories (kcal)</label>
              <input
                type="number"
                value={profile.calories}
                onChange={(e) => updateProfile({ calories: Number(e.target.value) || 1800 })}
                className="w-full text-xs font-bold px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-emerald-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700">Daily Protein (g)</label>
              <input
                type="number"
                value={profile.protein}
                onChange={(e) => updateProfile({ protein: Number(e.target.value) || 90 })}
                className="w-full text-xs font-bold px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-emerald-500"
              />
            </div>
          </div>

          {/* Allergies / Dislikes */}
          <div className="space-y-2 pt-1">
            <label className="text-[11px] font-bold text-slate-700">Allergies / Dislikes (Never Suggest)</label>
            <form onSubmit={handleAddAllergy} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. peanuts, dairy, gluten, mushroom"
                value={allergyInput}
                onChange={(e) => setAllergyInput(e.target.value)}
                className="flex-1 text-xs px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-emerald-500"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Add
              </button>
            </form>
            {profile.allergies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {profile.allergies.map(item => (
                  <span
                    key={item}
                    className="text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 px-2.5 py-1 rounded-lg flex items-center gap-1"
                  >
                    {item}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-red-900"
                      onClick={() => handleRemoveAllergy(item)}
                    />
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Foods Eaten Today */}
          <div className="space-y-2 pt-1">
            <label className="text-[11px] font-bold text-slate-700">Foods Eaten Earlier Today (Avoid repeating)</label>
            <form onSubmit={handleAddEaten} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. oats, boiled eggs, rajma"
                value={eatenInput}
                onChange={(e) => setEatenInput(e.target.value)}
                className="flex-1 text-xs px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-emerald-500"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Log
              </button>
            </form>
            {profile.eatenFoods.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {profile.eatenFoods.map(item => (
                  <span
                    key={item}
                    className="text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1"
                  >
                    {item}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-slate-900"
                      onClick={() => handleRemoveEaten(item)}
                    />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* STEP 1: Meal Slot Selector Bar */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-800">
              Meal Slot based on Time
            </span>
          </div>
          <button
            onClick={() => setFullDayView(!fullDayView)}
            className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <Calendar className="w-3 h-3" />
            {fullDayView ? 'Current Slot Only' : 'Full-Day Plan'}
          </button>
        </div>

        {/* Slot Pills Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {ALL_SLOTS.map(slot => {
            const isSelected = selectedSlotId === slot.id;
            const isRealCurrent = currentTimeSlot.id === slot.id;
            return (
              <button
                key={slot.id}
                onClick={() => {
                  setSelectedSlotId(slot.id);
                  setFullDayView(false);
                  setSeed(0);
                  setCardModes({});
                  setBackendRecipes(null);
                }}
                className={`px-3 py-2 rounded-2xl flex-shrink-0 text-left border transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">{slot.icon}</span>
                  <span className="text-xs font-black">{slot.label}</span>
                  {isRealCurrent && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Current time" />
                  )}
                </div>
                <div className={`text-[9px] font-medium mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                  {slot.range}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Friendly Greeting Message */}
      <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-3.5 flex items-start gap-2.5 text-emerald-950">
        <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs font-semibold leading-relaxed">
          {getGreeting()}
        </p>
      </div>

      {/* RECIPES DISPLAY (2 or 3 Options) */}
      <div className="space-y-4">
        {recommendedRecipes.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center space-y-3 border border-slate-200">
            <ShieldAlert className="w-8 h-8 text-amber-500 mx-auto" />
            <h4 className="text-sm font-bold text-slate-800">No matching recipes found</h4>
            <p className="text-xs text-slate-500">
              Your allergy or dislike filter may be too restrictive. Try clearing some dislikes.
            </p>
          </div>
        ) : (
          recommendedRecipes.slice(0, fullDayView ? 3 : 2).map((recipe, idx) => {
            const activeMode = cardModes[recipe.id] || null;
            const dishSearchQuery = getCleanDishSearchQuery(recipe.name);
            const restaurantInstructions = getRestaurantInstructions(profile.goal, profile.allergies);
            const restaurantNoteText = `Special Cooking Request for Chef:\n` +
              restaurantInstructions.map(i => `• ${i}`).join('\n');

            return (
              <div 
                key={recipe.id}
                className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {/* Dish Photo Banner with Skeleton Shimmer or Plain Badge */}
                {recipe.imageUrl ? (
                  <RecipeCardImage 
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    slotLabel={currentSlotMeta.label}
                    timeToMake={recipe.timeToMake}
                    optionIndex={idx}
                  />
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Option {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {recipe.timeToMake}
                    </span>
                  </div>
                )}

                {/* Recipe Title & Why It Fits */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {recipe.name}
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200/60 text-xs font-medium text-slate-700 leading-relaxed">
                    <span className="font-bold text-emerald-700">Why it fits your goal: </span>
                    {recipe.whyItFits}
                  </div>
                </div>

                {/* Approx Nutrition Bar */}
                <div className="bg-slate-900 text-white rounded-2xl p-3 flex items-center justify-between text-center">
                  <div>
                    <div className="text-[10px] font-semibold text-slate-400">Approx. Cal</div>
                    <div className="text-xs font-black text-emerald-400">{recipe.nutrition.calories} kcal</div>
                  </div>
                  <div className="w-[1px] h-6 bg-slate-800" />
                  <div>
                    <div className="text-[10px] font-semibold text-slate-400">Protein</div>
                    <div className="text-xs font-black text-white">{recipe.nutrition.protein}g</div>
                  </div>
                  <div className="w-[1px] h-6 bg-slate-800" />
                  <div>
                    <div className="text-[10px] font-semibold text-slate-400">Carbs</div>
                    <div className="text-xs font-black text-white">{recipe.nutrition.carbs}g</div>
                  </div>
                  <div className="w-[1px] h-6 bg-slate-800" />
                  <div>
                    <div className="text-[10px] font-semibold text-slate-400">Fat</div>
                    <div className="text-xs font-black text-white">{recipe.nutrition.fat}g</div>
                  </div>
                </div>

                {/* CHOICE SELECTOR: Make by Yourself vs Order Online */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
                    <span>How would you like this meal?</span>
                    {activeMode && (
                      <button
                        onClick={() => handleSetMode(recipe.id, null)}
                        className="text-[10px] text-slate-400 hover:text-slate-700 underline font-semibold"
                      >
                        Hide details
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-2xl">
                    <button
                      onClick={() => handleSetMode(recipe.id, 'cook')}
                      className={`py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                        activeMode === 'cook'
                          ? 'bg-white text-emerald-950 shadow-sm border border-slate-200/80 font-black'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <ChefHat className={`w-4 h-4 ${activeMode === 'cook' ? 'text-emerald-600' : 'text-slate-400'}`} />
                      Make Yourself
                    </button>

                    <button
                      onClick={() => handleSetMode(recipe.id, 'order')}
                      className={`py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                        activeMode === 'order'
                          ? 'bg-white text-rose-950 shadow-sm border border-slate-200/80 font-black'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <ShoppingBag className={`w-4 h-4 ${activeMode === 'order' ? 'text-rose-500' : 'text-slate-400'}`} />
                      Order Online
                    </button>
                  </div>

                  {/* PROMPT WHEN NONE SELECTED */}
                  {!activeMode && (
                    <p className="text-[11px] text-center text-slate-400 font-medium italic pt-0.5">
                      Tap "Make Yourself" for home recipe steps or "Order Online" for restaurant delivery.
                    </p>
                  )}

                  {/* OPTION A: Make by Yourself -> Ingredients & Step-by-Step Method */}
                  {activeMode === 'cook' && (
                    <div className="space-y-4 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-emerald-600" />
                          Est. Time: {recipe.timeToMake}
                        </span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-black border border-emerald-200/60">
                          Home Kitchen
                        </span>
                      </div>

                      {/* Ingredients List */}
                      <div className="space-y-1.5">
                        <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                          Ingredients with Quantities
                        </h4>
                        <ul className="space-y-1 text-xs text-slate-700 font-medium bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
                          {recipe.ingredients.map((ing, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span>{ing}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Step-by-Step Method */}
                      <div className="space-y-1.5">
                        <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                          How to Prepare (Quick Steps)
                        </h4>
                        <ol className="space-y-2 text-xs text-slate-700 font-medium">
                          {recipe.method.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5">
                              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}

                  {/* OPTION B: Order Online -> Goal-based Cooking Instructions & Zomato / Swiggy */}
                  {activeMode === 'order' && (
                    <div className="space-y-3.5 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                      <div className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-3.5 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                            Cooking Instructions for Restaurant
                          </span>
                          <button
                            onClick={() => handleCopyNote(recipe.id, restaurantNoteText)}
                            className="text-[10px] font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 px-2 py-0.5 rounded-lg flex items-center gap-1 transition-colors"
                          >
                            {copiedId === recipe.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            {copiedId === recipe.id ? 'Copied Note!' : 'Copy Note'}
                          </button>
                        </div>

                        <ul className="text-xs text-amber-950 font-medium space-y-1.5">
                          {restaurantInstructions.map((inst, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-amber-600 font-bold">✓</span>
                              <span>{inst}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-[10px] text-amber-800/80 italic pt-1 border-t border-amber-200/50">
                          💡 Paste this note into the restaurant instructions box during checkout on Zomato or Swiggy!
                        </p>
                      </div>

                      {/* Food Delivery App Redirect Buttons */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold text-slate-600 flex items-center justify-between">
                          <span>Search & order "{dishSearchQuery}" on:</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5">
                          {/* Zomato */}
                          <a
                            href={`https://www.zomato.com/search?q=${encodeURIComponent(dishSearchQuery)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-[#E23744] hover:bg-[#d02835] text-white rounded-2xl font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span className="tracking-wide font-black">ZOMATO</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>

                          {/* Swiggy */}
                          <a
                            href={`https://www.swiggy.com/search?query=${encodeURIComponent(dishSearchQuery)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-[#FC8019] hover:bg-[#eb7410] text-white rounded-2xl font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span className="tracking-wide font-black">SWIGGY</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Helpful Contextual Tip & Next Action */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-start gap-2.5">
          <Info className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs font-semibold text-slate-700 leading-relaxed">
            <span className="font-extrabold text-slate-900">Advisor Tip: </span>
            {ADVISER_TIPS[selectedSlotId] || 'Cook with minimal added oil and drink adequate water between meals.'}
          </p>
        </div>

        <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
          <p className="text-xs font-bold text-center text-slate-600">
            Want another option or a full-day plan?
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSeed(s => s + 1);
                setCardModes({});
                setBackendRecipes(null);
              }}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Give Me Another Option
            </button>
            <button
              onClick={() => setFullDayView(v => !v)}
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" /> {fullDayView ? 'Show 2 Options' : 'Full-Day Plan'}
            </button>
          </div>
        </div>
      </div>

      {/* Safe Disclaimer Banner */}
      <div className="px-3 py-2 text-center text-[10px] text-slate-400">
        Nutrition values are approximate home cooking estimates. For clinical conditions or caloric intakes below 1200 kcal, consult a certified dietitian or physician.
      </div>

    </div>
  );
}
