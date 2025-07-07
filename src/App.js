import React, { useState } from 'react';
import { Utensils } from 'lucide-react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Profile from './components/Profile';
import History from './components/History';
import Footer from './components/Footer';// Assuming you have a global CSS file

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && <Home />}
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'history' && <History />}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
