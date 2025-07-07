import React from 'react';

const HealthMetrics = ({ userProfile }) => {
  const calculateBMI = () => {
    if (!userProfile.weight || !userProfile.height) return 0;
    return (userProfile.weight / ((userProfile.height / 100) ** 2)).toFixed(1);
  };

  const calculateDailyCalories = () => {
    if (!userProfile.weight) return 0;
    const multiplier = userProfile.activityLevel === 'sedentary' ? 1.2 : 1.5;
    return Math.round(userProfile.weight * 22 * multiplier);
  };

  const calculateProteinGoal = () => {
    if (!userProfile.weight) return 0;
    return Math.round(userProfile.weight * 0.8);
  };

  const metrics = [
    { value: calculateBMI(), label: 'BMI', color: 'blue' },
    { value: calculateDailyCalories(), label: 'Daily Calories', color: 'green' },
    { value: `${calculateProteinGoal()}g`, label: 'Protein Goal', color: 'purple' },
    { value: '2.5L', label: 'Water Goal', color: 'orange' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600'
    };
    return colors[color] || colors.blue;
  };

  if (!userProfile.weight || !userProfile.height) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Health Metrics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className={`p-4 rounded-lg text-center ${getColorClasses(metric.color)}`}>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="text-sm text-gray-600">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthMetrics;
