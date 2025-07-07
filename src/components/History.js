import React from 'react';
import { Clock, FileText } from 'lucide-react';
import { useAnalysisHistory } from '../hooks/useAnalysisHistory';
import HistoryItem from './HistoryItem';

const History = () => {
  const { analysisHistory } = useAnalysisHistory();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Clock className="w-6 h-6" />
          Analysis History
        </h2>
        
        {analysisHistory.length > 0 ? (
          <div className="space-y-4">
            {analysisHistory.map((item) => (
              <HistoryItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No analysis history yet. Start by analyzing some food!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
