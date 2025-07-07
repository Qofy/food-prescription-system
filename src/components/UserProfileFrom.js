

const UserProfileForm = ({ userProfile, setUserProfile }) => {
  const handleInputChange = (field, value) => {
    setUserProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            value={userProfile.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Age</label>
          <input
            type="number"
            value={userProfile.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your age"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Weight (kg)</label>
          <input
            type="number"
            value={userProfile.weight}
            onChange={(e) => handleInputChange('weight', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your weight"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Height (cm)</label>
          <input
            type="number"
            value={userProfile.height}
            onChange={(e) => handleInputChange('height', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your height"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Activity Level</label>
          <select
            value={userProfile.activityLevel}
            onChange={(e) => handleInputChange('activityLevel', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Light Activity</option>
            <option value="moderate">Moderate Activity</option>
            <option value="active">Very Active</option>
          </select>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfileForm;
