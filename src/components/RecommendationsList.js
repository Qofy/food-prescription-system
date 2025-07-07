import React from 'react';
import { CheckCircle, AlertCircle, X, FileText } from 'lucide-react';

const RecommendationsList = ({ recommendations }) => {
  const getSuitabilityColor = (suitability) => {
    switch (suitability) {
      case 'recommended': return 'text-green-600 bg-green-50';
      case 'caution': return 'text-yellow-600 bg-yellow-50';
      case 'avoid': return 'text-red-600 bg-red-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  const getSuitabilityIcon = (suitability) => {
    switch (suitability) {
      case 'recommended': return <CheckCircle className="w-5 h-5" />;
      case 'caution': return <AlertCircle className="w-5 h-5" />;
      case 'avoid': return <X className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  if (recommendations.length === 0) {
    return (
      <p className="text-gray-500">Enter medical conditions to get personalized recommendations.</p>
    );
  }

  return (
    <div className="space-y-3">
      {recommendations.map((rec, index) => (
        <div key={index} className={`p-3 rounded-lg border ${getSuitabilityColor(rec.suitability)}`}>
          <div className="flex items-center gap-2 mb-2">
            {getSuitabilityIcon(rec.suitability)}
            <span className="font-medium">{rec.condition}</span>
          </div>
          <p className="text-sm">{rec.reason}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
