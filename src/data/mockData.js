export const foodDatabase = {
  apple: {
    name: 'Apple',
    calories: 95,
    carbs: 25,
    fiber: 4,
    sugar: 19,
    protein: 0.5,
    fat: 0.3,
    vitamins: ['Vitamin C', 'Vitamin K'],
    minerals: ['Potassium'],
    glycemicIndex: 38,
    category: 'fruit'
  },
  banana: {
    name: 'Banana',
    calories: 105,
    carbs: 27,
    fiber: 3,
    sugar: 14,
    protein: 1.3,
    fat: 0.4,
    vitamins: ['Vitamin B6', 'Vitamin C'],
    minerals: ['Potassium', 'Magnesium'],
    glycemicIndex: 51,
    category: 'fruit'
  },
  salmon: {
    name: 'Salmon',
    calories: 208,
    carbs: 0,
    fiber: 0,
    sugar: 0,
    protein: 22,
    fat: 12,
    vitamins: ['Vitamin D', 'Vitamin B12'],
    minerals: ['Selenium', 'Phosphorus'],
    omega3: 1.8,
    category: 'protein'
  },
  broccoli: {
    name: 'Broccoli',
    calories: 34,
    carbs: 7,
    fiber: 2.6,
    sugar: 1.5,
    protein: 2.8,
    fat: 0.4,
    vitamins: ['Vitamin C', 'Vitamin K', 'Folate'],
    minerals: ['Iron', 'Potassium'],
    glycemicIndex: 15,
    category: 'vegetable'
  },
  rice: {
    name: 'White Rice',
    calories: 130,
    carbs: 28,
    fiber: 0.4,
    sugar: 0.1,
    protein: 2.7,
    fat: 0.3,
    vitamins: ['Niacin'],
    minerals: ['Manganese'],
    glycemicIndex: 73,
    category: 'grain'
  }
};

export const medicalConditionsDB = {
  diabetes: {
    name: 'Diabetes Type 2',
    recommendations: {
      avoid: ['High glycemic index foods', 'Refined sugars', 'Processed foods'],
      prefer: ['Low glycemic index foods', 'High fiber foods', 'Lean proteins'],
      maxCarbs: 45,
      maxSugar: 25,
      preferredGI: 55
    }
  },
  hypertension: {
    name: 'Hypertension',
    recommendations: {
      avoid: ['High sodium foods', 'Processed meats', 'Excessive alcohol'],
      prefer: ['Low sodium foods', 'Potassium-rich foods', 'Whole grains'],
      maxSodium: 2300,
      preferPotassium: true
    }
  },
  heartdisease: {
    name: 'Heart Disease',
    recommendations: {
      avoid: ['Saturated fats', 'Trans fats', 'High cholesterol foods'],
      prefer: ['Omega-3 rich foods', 'Antioxidant-rich foods', 'Whole grains'],
      maxSaturatedFat: 20,
      preferOmega3: true
    }
  },
  kidneydisease: {
    name: 'Kidney Disease',
    recommendations: {
      avoid: ['High protein foods', 'High phosphorus foods', 'Excessive fluids'],
      prefer: ['Controlled protein', 'Low phosphorus foods', 'Fresh fruits'],
      maxProtein: 50,
      maxPhosphorus: 1000
    }
  }
};
