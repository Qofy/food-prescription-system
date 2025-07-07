import { foodDatabase, medicalConditionsDB } from '../data/mockData';

export const useFoodRecognition = () => {
  const recognizeFood = async (imageFile) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const foods = Object.keys(foodDatabase);
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    const confidence = (Math.random() * 0.15 + 0.85) * 100;
    
    return {
      food: foodDatabase[randomFood],
      confidence: confidence.toFixed(1),
      timestamp: new Date().toISOString()
    };
  };

  const generateRecommendations = (food, conditions) => {
    const recommendations = [];
    const conditionsList = conditions.toLowerCase().split(',').map(c => c.trim());
    
    conditionsList.forEach(condition => {
      const normalizedCondition = condition.replace(/\s+/g, '').toLowerCase();
      const medicalCondition = medicalConditionsDB[normalizedCondition];
      
      if (medicalCondition) {
        const rec = medicalCondition.recommendations;
        let suitability = 'suitable';
        let reason = '';
        
        if (normalizedCondition === 'diabetes') {
          if (food.glycemicIndex > rec.preferredGI) {
            suitability = 'caution';
            reason = `High glycemic index (${food.glycemicIndex}). Consider portion control.`;
          } else {
            suitability = 'recommended';
            reason = `Low glycemic index (${food.glycemicIndex}). Good for blood sugar control.`;
          }
        }
        
        recommendations.push({
          condition: medicalCondition.name,
          suitability,
          reason,
          alternatives: rec.prefer.slice(0, 2)
        });
      }
    });
    
    return recommendations;
  };

  return { recognizeFood, generateRecommendations };
};
