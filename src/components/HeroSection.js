import React from 'react';

const HeroSection = () => {
  const stats = [
    { value: '94.2%', label: 'Food Recognition Accuracy' },
    { value: '50+', label: 'Medical Conditions' },
    { value: '2.3s', label: 'Average Response Time' }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Food Prescription System</h1>
        <p className="text-xl mb-6">Personalized dietary recommendations based on your medical conditions</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/20 p-3 rounded-lg">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
