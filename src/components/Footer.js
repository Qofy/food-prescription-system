import React from 'react';
import { Utensils } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Features',
      items: ['Food Recognition', 'Medical Analysis', 'Personalized Recommendations', 'Nutritional Tracking']
    },
    {
      title: 'Performance',
      items: ['94.2% Food Recognition Accuracy', '50+ Medical Conditions', '2.3s Average Response Time', 'Clinical Validation']
    }
  ];

  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="w-6 h-6 text-blue-600" />
              <span className="font-bold">FoodRx AI</span>
            </div>
            <p className="text-gray-600 text-sm">
              AI-powered food prescription system for personalized dietary recommendations based on medical conditions.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="font-semibold mb-4">Medical Disclaimer</h4>
            <p className="text-xs text-gray-500">
              This system provides general dietary information and should not replace professional medical advice.
              Always consult with healthcare providers for medical decisions.
            </p>
          </div>
        </div>
        
        <div className="border-t pt-8 mt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 FoodRx AI. Built with advanced AI and medical expertise.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
