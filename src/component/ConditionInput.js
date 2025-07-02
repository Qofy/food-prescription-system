import { useState } from "react";

 const ConditionInput=({ conditions, onConditionChange }) => {
  const [suggetions] = useState([
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "Obesity",
    "Cholesterol",
    "Allergies",
    "Digestive Issues",
    "Kidney Disease",
    "Liver Disease",
    "Thyroid Disorders",
    "High Cholesterol",
  ])

  const handleSuggestionClick = (condition) => {
    if(!conditions.includes(condition)){
      const newConditions = conditions ? `${conditions}, ${condition}` : condition;
      onConditionChange(newConditions);
    }
  };

  return(
    <div className="condition-inputt-container">
      <h3>Medical Conditions</h3>
      <textarea
      value ={conditions}
      onChange={(e) => onConditionChange(e.target.value)}
      placeholder="Enter your medical conditions (e.g., diebetes, high blood pressure, heart disease)"
      rows={4}
      className="condition-textarea"
      />
      <div className="suggestions">
        <p>Common condition:</p>
        <div className="suggestion-tags">
          {suggetions.map((suggestion, index) => (
            <button
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="suggestion-tag"
            type="button">
              {suggestion}
            </button>
          ))}
        </div>
    </div>
    </div>
  )
}

export default ConditionInput;