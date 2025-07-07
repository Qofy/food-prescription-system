import React, { useState } from 'react';
import HeroSection from './HeroSection';
import FoodAnalyzer from './FoodAnalyzer';
import AnalysisResults from './AnalysisResults';
import { useAnalysisHistory } from '../hooks/useAnalysisHistory';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [medicalConditions, setMedicalConditions] = useState('');
  const [recognizedFood, setRecognizedFood] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const { addToHistory } = useAnalysisHistory();

  const handleAnalysisComplete = (result, recs) => {
    setRecognizedFood(result);
    setRecommendations(recs);
    
    // Add to history
    addToHistory({
      food: result.food,
      conditions: medicalConditions,
      recommendations: recs,
      image: selectedImage
    });
  };

  const clearAnalysis = () => {
    setSelectedImage(null);
    setRecognizedFood(null);
    setRecommendations([]);
    setMedicalConditions('');
  };

  return (
    <div className="space-y-8">
      <HeroSection />
      
      <FoodAnalyzer
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        medicalConditions={medicalConditions}
        setMedicalConditions={setMedicalConditions}
        isAnalyzing={isAnalyzing}
        setIsAnalyzing={setIsAnalyzing}
        onAnalysisComplete={handleAnalysisComplete}
        onClear={clearAnalysis}
      />
      
      {recognizedFood && (
        <AnalysisResults
          recognizedFood={recognizedFood}
          recommendations={recommendations}
        />
      )}
    </div>
  );
};

export default Home;
