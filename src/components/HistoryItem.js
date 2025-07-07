import React from 'react';

const HistoryItem = ({ item }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center gap-4 mb-3">
        <img
          src={item.image}
          alt={item.food.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h4 className="font-semibold">{item.food.name}</h4>
          <p className="text-sm text-gray-600">
            {new Date(item.timestamp).toLocaleDateString()} at {new Date(item.timestamp).toLocaleTimeString()}
          </p>
          <p className="text-sm text-gray-600">Conditions: {item.conditions}</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-3 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div>Calories: {item.food.calories}</div>
          <div>Protein: {item.food.protein}g</div>
          <div>Carbs: {item.food.carbs}g</div>
          <div>Fat: {item.food.fat}g</div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
