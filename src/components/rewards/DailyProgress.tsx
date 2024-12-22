import React from 'react';
import { Circle } from 'lucide-react';

const DailyProgress = () => {
  const progress = 70; // This would come from your state management

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Today's Progress</h2>
      <div className="relative h-4 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div 
          className="absolute h-full bg-sky-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg text-gray-700">
          You have earned <span className="font-bold text-sky-600">{progress}%</span> of your daily rewards
        </p>
        <Circle className="h-6 w-6 text-sky-600 animate-pulse" />
      </div>
    </div>
  );
};

export default DailyProgress;