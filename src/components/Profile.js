import React, { useState } from 'react';
import { User } from 'lucide-react';
import UserProfileForm from './UserProfileFrom';
import HealthMetrics from './HealthMetrics';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    activityLevel: 'moderate'
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <User className="w-6 h-6" />
          User Profile
        </h2>
        
        <UserProfileForm 
          userProfile={userProfile} 
          setUserProfile={setUserProfile} 
        />
      </div>
      
      <HealthMetrics userProfile={userProfile} />
    </div>
  );
};

export default Profile;
