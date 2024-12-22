import React from 'react';
import { Footprints, Trophy, Target, TrendingUp } from 'lucide-react';

const StepTracker = () => {
  const dailyGoal = 10000;
  const currentSteps = 7234;
  const percentage = (currentSteps / dailyGoal) * 100;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step Tracking</h2>

      {/* Main Step Counter */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-indigo-100 rounded-xl">
              <Footprints className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Today's Steps</h3>
              <p className="text-gray-600">Keep moving towards your goal!</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-indigo-600">{currentSteps.toLocaleString()}</div>
            <div className="text-sm text-gray-600">of {dailyGoal.toLocaleString()} steps</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div 
            className="absolute h-full bg-indigo-500 rounded-full transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Target className="h-5 w-5 text-indigo-600 mr-1" />
              <span className="font-medium">Goal Progress</span>
            </div>
            <div className="text-2xl font-bold text-indigo-600">{Math.round(percentage)}%</div>
          </div>
          
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-5 w-5 text-emerald-600 mr-1" />
              <span className="font-medium">Calories</span>
            </div>
            <div className="text-2xl font-bold text-emerald-600">312</div>
          </div>

          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="h-5 w-5 text-amber-600 mr-1" />
              <span className="font-medium">Streak</span>
            </div>
            <div className="text-2xl font-bold text-amber-600">5 days</div>
          </div>
        </div>
      </div>

      {/* Weekly Overview */}
      <div className="grid grid-cols-7 gap-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={day} className="bg-white p-3 rounded-lg shadow text-center">
            <div className="text-sm font-medium text-gray-600 mb-2">{day}</div>
            <div className={`text-lg font-semibold ${index <= 4 ? 'text-indigo-600' : 'text-gray-400'}`}>
              {index <= 4 ? `${Math.round(Math.random() * 3000 + 6000)}` : '-'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepTracker;