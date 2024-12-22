import React from 'react';
import { FileText, Utensils, Trophy, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-sky-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Personal Health Journey Starts Here
              </h1>
              <p className="text-xl mb-8 text-sky-50">
                Transform your health with personalized meal plans, detailed health analysis, 
                and rewarding lifestyle changes.
              </p>
              <button 
                onClick={handleGetStarted}
                className="relative bg-white text-sky-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-sky-50 transition-colors overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-white/40 via-white/0 to-transparent group-hover:w-full transition-all duration-700 ease-out"></div>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <FeatureCard
                icon={FileText}
                title="Health Reports"
                description="Upload and analyze your health reports instantly"
              />
              <FeatureCard
                icon={Utensils}
                title="Meal Plans"
                description="Get personalized meal suggestions based on your health"
              />
              <FeatureCard
                icon={Trophy}
                title="Rewards"
                description="Earn rewards for maintaining a healthy lifestyle"
              />
              <FeatureCard
                icon={Activity}
                title="Progress Tracking"
                description="Monitor your health journey with detailed insights"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How HealthSync Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Upload Reports</h3>
              <p className="text-gray-600">
                Simply upload your health reports and get instant analysis of your vital health metrics
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Meal Plans</h3>
              <p className="text-gray-600">
                Receive customized meal suggestions based on your health profile and preferences
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Earn Rewards</h3>
              <p className="text-gray-600">
                Stay motivated with daily rewards for following your health plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Your Health Journey Visualized
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Health Monitoring"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">Health Monitoring</h3>
                  <p className="text-white/80 text-sm">Track your vitals in real-time</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Healthy Meals"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">Personalized Nutrition</h3>
                  <p className="text-white/80 text-sm">Customized meal plans for your goals</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Activity Tracking"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">Activity Tracking</h3>
                  <p className="text-white/80 text-sm">Monitor your daily progress</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Health Reports"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">Smart Analytics</h3>
                  <p className="text-white/80 text-sm">AI-powered health insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;