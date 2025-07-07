import React from 'react';

 const NutritionalInfo = ({ food }) => {
  const nutritionData = [
    { label: 'Calories', value: food.calories },
    { label: 'Protein', value: `${food.protein}g` },
    { label: 'Carbs', value: `${food.carbs}g` },
    { label: 'Fat', value: `${food.fat}g` },
    { label: 'Fiber', value: `${food.fiber}g` },
    { label: 'Sugar', value: `${food.sugar}g` }
  ];

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h5 className="font-medium mb-2">Nutritional Information (per 100g)</h5>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {nutritionData.map((item, index) => (
          <div key={index}>{item.label}: {item.value}</div>
        ))}
      </div>
    </div>
  );
};


export default NutritionalInfo;