import { useState } from "react";
import ImageUpload from "../src/component/ImageUpload";
import ConditionInput from "../src/component/ConditionInput";
import RecommendationDisplay from "../src/component/RecommendationDisplay";
import "./App.css";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [medicalCondition, setMedicalCondition] = useState("");
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!uploadedImage || !medicalCondition){
      alert("Please upload an image and enter a medical condition.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", uploadedImage);
    formData.append("condition", medicalCondition);

    try{
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setRecommendations(result);
    }catch (error) {
      console.log("Error:", error);
      alert("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return(
    <div className="App">
      <header className="App-header">
        <h1>AI-Based Food Prescription System</h1>
        <p>Upload food images and get personalized dietary recommendations</p>
      </header>
      <main className="main-content">
        <div className="input-section">
          <ImageUpload 
          onImageUpload={setUploadedImage} 
          uploadedImage={uploadedImage}
          />

          <ConditionInput
          conditions={medicalCondition}
          onConditionChange={setMedicalCondition}
          />

          <button
          onClick={handleAnalyze}
          disabled={loading || !uploadedImage || !medicalCondition}
          className="analyze-button"
          >
            {loading ? "Analyzing..." : "Get Recommendations"}
          </button>
        </div>
        {recommendations && (
          <RecommendationDisplay recommendations={recommendations} />
        )}
      </main>
    </div>
  );
}

export default App;