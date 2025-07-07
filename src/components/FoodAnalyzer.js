import React, { useRef } from 'react';
import { Camera, Brain } from 'lucide-react';
import ImageUpload from './ImageUpload';
import MedicalConditionsInput from './MedicalConditionsInput';
import { useFoodRecognition } from '../hooks/useFoodRecognition';

const FoodAnalyzer = ({
  selectedImage,
  setSelectedImage,
  medicalConditions,
  setMedicalConditions,
  isAnalyzing,
  setIsAnalyzing,
  onAnalysisComplete,
  onClear
}) => {
  const fileInputRef = useRef(null);
  const { recognizeFood, generateRecommendations } = useFoodRecognition();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    const result = await recognizeFood(selectedImage);
    
    let recs = [];
    if (medicalConditions) {
      recs = generateRecommendations(result.food, medicalConditions);
    }
    
    setIsAnalyzing(false);
    onAnalysisComplete(result, recs);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Camera className="w-6 h-6" />
        Quick Food Analysis
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <ImageUpload
          selectedImage={selectedImage}
          fileInputRef={fileInputRef}
          onImageUpload={handleImageUpload}
        />
        
        <div className="space-y-4">
          <MedicalConditionsInput
            value={medicalConditions}
            onChange={setMedicalConditions}
          />
          
          <div className="flex gap-3">
            <button
              onClick={handleAnalyze}
              disabled={!selectedImage || isAnalyzing}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5" />
                  Analyze Food
                </>
              )}
            </button>
            
            <button
              onClick={onClear}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAnalyzer;
