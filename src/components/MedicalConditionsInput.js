import React from 'react';

const MedicalConditionsInput = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Medical Conditions</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your medical conditions (e.g., diabetes, hypertension, heart disease)"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
      />
    </div>
  );
};

export default MedicalConditionsInput;
