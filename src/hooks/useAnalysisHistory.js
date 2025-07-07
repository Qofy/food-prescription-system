import { useState } from 'react';

export const useAnalysisHistory = () => {
  const [analysisHistory, setAnalysisHistory] = useState([]);

  const addToHistory = (data) => {
    const historyItem = {
      id: Date.now(),
      ...data,
      timestamp: new Date().toISOString()
    };
    
    setAnalysisHistory(prev => [historyItem, ...prev.slice(0, 9)]);
  };

  return { analysisHistory, addToHistory };
};
