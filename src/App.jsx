import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScannerChoiceView from './components/ScannerChoiceView';
import Scanner from './components/Scanner';
import ProductDetail from './components/ProductDetail';
import PersonalFoodAdviser from './components/PersonalFoodAdviser';
import SearchModal from './components/SearchModal';
import GoalSetupModal from './components/GoalSetupModal';
import CompareModal from './components/CompareModal';
import InstallPrompt from './components/InstallPrompt';
import PWAUpdatePrompt from './components/PWAUpdatePrompt';
import { Loader2, AlertCircle } from 'lucide-react';
import { fetchProductByBarcode as clientFetchProduct, normalizeOFFProduct } from './services/openFoodFacts';
import { getFallbackProduct } from './data/fallbackProducts';
import { API_BASE } from './services/api';
import { evaluatePackagedGoals } from './utils/healthAnalyzer';

const USER_GOALS_KEY = 'healthscan_user_goals';
const DEFAULT_PREPARATION = 'raw';
const SCANNER_MODE = {
  choice: 'choice',
  packaged: 'packaged',
  adviser: 'adviser',
  fresh: 'adviser'
};
const ACTIVE_TAB = {
  scanner: 'scanner',
  result: 'result'
};
const FRESH_FOOD_SOURCE = 'USDA Reference Data (Development Data)';

const getStoredGoals = () => {
  try {
    const savedGoals = localStorage.getItem(USER_GOALS_KEY);
    return savedGoals ? JSON.parse(savedGoals) : [];
  } catch (error) {
    console.warn('Failed to read saved goals from localStorage', error);
    return [];
  }
};

const buildFallbackFreshFood = (nutData) => ({
  id: nutData.id,
  name: nutData.foodName,
  category: nutData.category,
  emoji: '🥬',
  servingSize: nutData.servingSize || '100g',
  source: nutData.source || FRESH_FOOD_SOURCE,
  nutriments: {
    energyServing: nutData.calories,
    proteinServing: nutData.protein,
    carbohydratesServing: nutData.carbohydrates,
    fatServing: nutData.fat,
    fiberServing: nutData.fiber,
    sugarsServing: nutData.sugar,
    sodiumServing: nutData.sodium
  }
});

export default function App() {
  const [scannerMode, setScannerMode] = useState(SCANNER_MODE.choice);
  const [activeTab, setActiveTab] = useState(ACTIVE_TAB.scanner);

  const [scannedProduct, setScannedProduct] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [alternatives, setAlternatives] = useState([]);

  const [freshFood, setFreshFood] = useState(null);
  const [freshEvaluation, setFreshEvaluation] = useState(null);
  const [freshPreparation, setFreshPreparation] = useState(DEFAULT_PREPARATION);
  const [freshAlternatives, setFreshAlternatives] = useState([]);
  const [freshRecipes, setFreshRecipes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedGoals, setSelectedGoals] = useState(getStoredGoals);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGoalSetupOpen, setIsGoalSetupOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);



  useEffect(() => {
    loadGoals();
  }, []);

  const persistGoals = (goals) => {
    setSelectedGoals(goals);
    localStorage.setItem(USER_GOALS_KEY, JSON.stringify(goals));
  };

  const loadGoals = async () => {
    try {
      const response = await fetch(`${API_BASE}/user/goals`);
      if (!response.ok) {
        return;
      }

      const data = await response.json();
      if (data.goals && data.goals.length > 0) {
        persistGoals(data.goals);
      }
    } catch (error) {
      console.warn('Backend goals API unavailable, fallback to local state', error);
    }
  };

  const refreshCurrentEvaluation = () => {
    if (scannedProduct && scannerMode === SCANNER_MODE.packaged) {
      handleBarcodeScanned(scannedProduct.barcode);
      return;
    }

    if (freshFood && scannerMode === SCANNER_MODE.fresh) {
      handleSelectFreshFood(freshFood.id, freshPreparation);
    }
  };

  const handleSaveGoals = async (newGoals) => {
    persistGoals(newGoals);

    try {
      await fetch(`${API_BASE}/user/goals`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goals: newGoals })
      });

      refreshCurrentEvaluation();
    } catch (error) {
      console.warn('Failed to update goals on backend', error);
    }
  };

  const fetchBarcodeProductFromBackend = async (barcode) => {
    try {
      const response = await fetch(`${API_BASE}/products/barcode/${barcode}`);
      if (!response.ok) {
        return null;
      }

      const data = await response.json();

      if (typeof data === 'string') {
        try {
          const parsed = JSON.parse(data);
          if (parsed.product) return normalizeOFFProduct(parsed.product, barcode);
          if (parsed.status === 1) return normalizeOFFProduct(parsed, barcode);
        } catch (e) {}
      }

      if (data.product) {
        return normalizeOFFProduct(data.product, barcode);
      }

      if (data.status === 1) {
        return normalizeOFFProduct(data, barcode);
      }

      if (data.barcode || data.productName || data.product_name) {
        return {
          barcode: data.barcode || barcode,
          name: data.product_name || data.productName || data.name || 'Unknown Product',
          brand: data.brand || 'Unknown Brand',
          category: data.categories || data.category || 'Packaged Food',
          image: data.image_url || data.image || data.imageUrl || null,
          servingSize: data.serving_size || data.servingSize || '100g',
          servingUnit: 'g',
          nutriments: {
            energy100g: data.energyKcal ?? data.energy_kcal ?? 0,
            sugars100g: data.sugar ?? data.sugars ?? 0,
            fat100g: data.fat ?? 0,
            saturatedFat100g: data.saturatedFat ?? data.saturated_fat ?? 0,
            transFat100g: data.transFat ?? data.trans_fat ?? 0,
            sodium100g: data.sodium ?? 0,
            protein100g: data.protein ?? 0,
            fiber100g: data.fiber ?? 0,
            carbohydrates100g: data.carbohydrates ?? 0
          },
          ingredientsText: data.ingredients_text || data.ingredientsText || '',
          allergens: data.allergens ? (Array.isArray(data.allergens) ? data.allergens : data.allergens.split(',').map(s => s.trim())) : [],
          offGrade: null
        };
      }

      return null;
    } catch (error) {
      console.warn('Backend API lookup error, falling back to client lookup', error);
      return null;
    }
  };

  const fetchBarcodeProductFromClient = async (barcode) => {
    return fetchBarcodeProductFromBackend(barcode);
  };

  const loadProductAlternatives = async (barcode) => {
    try {
      const response = await fetch(`${API_BASE}/products/${barcode}/alternatives`);
      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setAlternatives(data.alternatives || []);
    } catch (error) {
      console.warn('Failed to load packaged product alternatives', error);
    }
  };

  const handleBarcodeScanned = async (barcode) => {
    if (!barcode) {
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setScannerMode(SCANNER_MODE.packaged);

    try {
      let product = await fetchBarcodeProductFromBackend(barcode);

      // If backend was unable to find or connect (e.g. Render IP rate-limit), fetch via client and auto-cache
      if (!product) {
        const clientRes = await clientFetchProduct(barcode);
        if (clientRes && clientRes.product) {
          product = clientRes.product;
        }
      }

      // If still not found, check regional catalog
      if (!product) {
        product = getFallbackProduct(barcode);
      }

      if (!product) {
        setErrorMsg(`Product with barcode "${barcode}" not found. Try searching by name or check the barcode number.`);
        return;
      }

      const evaluationData = evaluatePackagedGoals(product, selectedGoals);

      setScannedProduct(product);
      setEvaluation(evaluationData);
      await loadProductAlternatives(barcode);
      setActiveTab(ACTIVE_TAB.result);
    } catch (error) {
      console.error('Barcode lookup error:', error);
      setErrorMsg('Failed to fetch product data. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const loadFreshFoodRecipes = async (foodId) => {
    try {
      const response = await fetch(`${API_BASE}/fresh-food/${encodeURIComponent(foodId)}/recipes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goals: selectedGoals })
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setFreshRecipes(data.recipes || []);
    } catch (error) {
      console.warn('Failed to load fresh food recipes', error);
    }
  };

  const loadFreshFoodAlternatives = async (foodId) => {
    try {
      const response = await fetch(`${API_BASE}/fresh-food/${encodeURIComponent(foodId)}/alternatives`);
      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setFreshAlternatives(data.alternatives || []);
    } catch (error) {
      console.warn('Failed to load fresh food alternatives', error);
    }
  };

  const handleSelectFreshFood = async (foodId, preparation = DEFAULT_PREPARATION, customImage = null) => {
    if (!foodId) {
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setScannerMode(SCANNER_MODE.fresh);
    setFreshPreparation(preparation);

    try {
      const response = await fetch(`${API_BASE}/fresh-food/${encodeURIComponent(foodId)}/evaluate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          preparation,
          goals: selectedGoals
        })
      });

      if (response.ok) {
        const data = await response.json();
        const foodWithImage = customImage ? { ...data.food, userUploadedImage: customImage } : data.food;

        setFreshFood(foodWithImage);
        setFreshEvaluation(data.evaluation);
        await Promise.all([
          loadFreshFoodRecipes(foodId),
          loadFreshFoodAlternatives(foodId)
        ]);
        setActiveTab(ACTIVE_TAB.result);
        return;
      }

      const fallbackResponse = await fetch(`${API_BASE}/foods/${encodeURIComponent(foodId)}`);
      if (!fallbackResponse.ok) {
        setErrorMsg('Nutrition information is not available for this food yet.');
        return;
      }

      const nutData = await fallbackResponse.json();
      const constructedFood = buildFallbackFreshFood(nutData);

      setFreshFood(constructedFood);
      setFreshEvaluation({
        overallStatus: 'GOOD MATCH',
        goals: [],
        disclaimer: 'Notice: HealthScan provides general nutritional guidance for development/testing and does not replace medical advice.'
      });
      setActiveTab(ACTIVE_TAB.result);
    } catch (error) {
      console.error('Fresh food evaluation error', error);
      setErrorMsg('Nutrition information is not available for this food yet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      <Header
        scannerMode={scannerMode}
        setScannerMode={setScannerMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenGoalSetup={() => setIsGoalSetupOpen(true)}
        goalsCount={selectedGoals.length}
      />

      <main className="flex-1 max-w-md w-full mx-auto">
        {loading && (
          <div className="py-24 px-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-teal-500/10 text-teal-600 flex items-center justify-center mx-auto border border-teal-500/20">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-slate-900">Evaluating Food & Nutrition Data...</h3>
              <p className="text-xs text-slate-500 font-medium">Running Deterministic Rules Engine</p>
            </div>
          </div>
        )}

        {errorMsg && !loading && (
          <div className="p-4 mx-4 mt-4 bg-red-50 border border-red-200 rounded-2xl space-y-3">
            <div className="flex items-start gap-2.5 text-red-900">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold">Item Not Found</h4>
                <p className="text-xs text-red-700 leading-relaxed font-medium">{errorMsg}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => {
                  setErrorMsg(null);
                  setIsSearchOpen(true);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-xl text-xs transition-colors shadow-sm"
              >
                Search Food by Name
              </button>
              <button
                onClick={() => setErrorMsg(null)}
                className="px-3 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-xs"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {!loading && activeTab === ACTIVE_TAB.scanner && (
          <>
            {scannerMode === SCANNER_MODE.choice && (
              <ScannerChoiceView
                onSelectMode={(mode) => setScannerMode(mode)}
                onOpenGoalSetup={() => setIsGoalSetupOpen(true)}
                selectedGoals={selectedGoals}
              />
            )}

            {scannerMode === SCANNER_MODE.packaged && (
              <Scanner
                onScanSuccess={handleBarcodeScanned}
                onOpenSearch={() => setIsSearchOpen(true)}
                onOpenGoalSetup={() => setIsGoalSetupOpen(true)}
                selectedGoals={selectedGoals}
              />
            )}

            {(scannerMode === SCANNER_MODE.adviser || scannerMode === 'fresh') && (
              <PersonalFoodAdviser
                onBack={() => setScannerMode(SCANNER_MODE.choice)}
              />
            )}
          </>
        )}

        {!loading && activeTab === ACTIVE_TAB.result && (
          <>
            {scannerMode === SCANNER_MODE.packaged && (
              <ProductDetail
                product={scannedProduct}
                evaluation={evaluation}
                onBack={() => setActiveTab(ACTIVE_TAB.scanner)}
                onOpenCompare={() => setIsCompareOpen(true)}
              />
            )}
          </>
        )}
      </main>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(idOrBarcode) => {
          if (idOrBarcode && isNaN(Number(idOrBarcode)) && idOrBarcode.length < 20) {
            handleSelectFreshFood(idOrBarcode, DEFAULT_PREPARATION);
          } else {
            handleBarcodeScanned(idOrBarcode);
          }
        }}
      />

      <GoalSetupModal
        isOpen={isGoalSetupOpen}
        onClose={() => setIsGoalSetupOpen(false)}
        selectedGoals={selectedGoals}
        onSaveGoals={handleSaveGoals}
      />

      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        scannedProduct={scannedProduct}
        alternatives={alternatives}
        onSelectAlternative={handleBarcodeScanned}
      />

      <InstallPrompt />
      <PWAUpdatePrompt />
    </div>
  );
}
