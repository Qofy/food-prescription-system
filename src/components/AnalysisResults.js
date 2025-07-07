import React from 'react';
import { Utensils, Heart } from 'lucide-react';
import NutritionalInfo from './NutritionalInfo';
import RecommendationsList from './RecommendationsList';

const AnalysisResults = ({ recognizedFood, recommendations }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Analysis Results</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Utensils className="w-6 h-6 text-blue-600" />
            <div>
              <h4 className="font-semibold">{recognizedFood.food.name}</h4>
              <p className="text-sm text-gray-600">Confidence: {recognizedFood.confidence}%</p>
            </div>
          </div>
          
          <NutritionalInfo food={recognizedFood.food} />
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-600" />
            Medical Recommendations
          </h4>
          
          <RecommendationsList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
