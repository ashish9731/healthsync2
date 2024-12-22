import React from 'react';
import { Activity, Sun, Moon, Heart } from 'lucide-react';

const HealthJourneySummary = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Your Health Journey Summary</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Activity className="h-5 w-5 text-sky-600 mr-2" />
            Today's Recommendations
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <Heart className="h-5 w-5 text-rose-500" />
              <span>30 minutes of cardio exercise</span>
            </li>
            <li className="flex items-center space-x-3">
              <Sun className="h-5 w-5 text-amber-500" />
              <span>15 minutes of morning yoga</span>
            </li>
            <li className="flex items-center space-x-3">
              <Moon className="h-5 w-5 text-indigo-500" />
              <span>8 hours of quality sleep</span>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suggested Activities</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Morning Routine:</h4>
              <p className="text-gray-600">Start with 10 minutes of stretching, followed by a balanced breakfast rich in protein and fiber.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Afternoon Boost:</h4>
              <p className="text-gray-600">Take a 15-minute walk after lunch to improve digestion and energy levels.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Evening Wellness:</h4>
              <p className="text-gray-600">Practice mindfulness or light yoga before bed to improve sleep quality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Progress Insight */}
      <div className="mt-8 bg-sky-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Weekly Progress Insight</h3>
        <p className="text-gray-600">
          You're making great progress! Remember to stay hydrated and maintain a balanced diet. Consider adding strength training to your routine 2-3 times per week for optimal results.
        </p>
      </div>
    </div>
  );
};

export default HealthJourneySummary;