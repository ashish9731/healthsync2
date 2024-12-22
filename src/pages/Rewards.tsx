import React, { useState } from 'react';
import DailyProgress from '../components/rewards/DailyProgress';
import TaskList from '../components/rewards/TaskList';
import AchievementCards from '../components/rewards/AchievementCards';
import DailyReminders from '../components/rewards/DailyReminders';
import RewardsSummaryModal from '../components/rewards/RewardsSummaryModal';
import HealthJourneySummary from '../components/rewards/HealthJourneySummary';
import { Trophy, Star, Target } from 'lucide-react';

const Rewards = () => {
  const [selectedSummary, setSelectedSummary] = useState<'streaks' | 'achievements' | 'goals' | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 to-sky-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:16px_16px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-600/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Trophy className="h-12 w-12 text-sky-100" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Your Rewards</h1>
          </div>
          <p className="text-sky-100 text-center mt-4 text-lg max-w-2xl mx-auto">
            Track your progress and earn rewards for maintaining a healthy lifestyle.
          </p>
          <div className="flex justify-center mt-8 space-x-8">
            <button 
              onClick={() => setSelectedSummary('streaks')}
              className="text-center group"
            >
              <div className="bg-white/10 rounded-full p-4 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <Star className="h-8 w-8 text-sky-100" />
              </div>
              <p className="text-sky-100 mt-2">Daily Streaks</p>
            </button>
            <button 
              onClick={() => setSelectedSummary('achievements')}
              className="text-center group"
            >
              <div className="bg-white/10 rounded-full p-4 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <Trophy className="h-8 w-8 text-sky-100" />
              </div>
              <p className="text-sky-100 mt-2">Achievements</p>
            </button>
            <button 
              onClick={() => setSelectedSummary('goals')}
              className="text-center group"
            >
              <div className="bg-white/10 rounded-full p-4 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <Target className="h-8 w-8 text-sky-100" />
              </div>
              <p className="text-sky-100 mt-2">Goals</p>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Daily Progress Section */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <DailyProgress />
          </div>

          {/* Reminders Section */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <DailyReminders />
          </div>
        </div>

        {/* Tasks Section */}
        <div className="mt-8 transform hover:scale-105 transition-transform duration-300">
          <TaskList />
        </div>

        {/* Achievements Section */}
        <div className="mt-8">
          <div className="flex items-center space-x-4 mb-6">
            <Trophy className="h-8 w-8 text-sky-600" />
            <h2 className="text-2xl font-bold">Current Achievements</h2>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <AchievementCards />
          </div>
        </div>

        {/* Health Journey Summary */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <HealthJourneySummary />
        </div>
      </div>

      {/* Floating Achievement Button */}
      <button 
        onClick={() => setSelectedSummary('achievements')}
        className="fixed bottom-8 right-8 bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 transition-colors duration-300 group"
      >
        <Trophy className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Summary Modal */}
      {selectedSummary && (
        <RewardsSummaryModal
          type={selectedSummary}
          onClose={() => setSelectedSummary(null)}
        />
      )}
    </div>
  );
};

export default Rewards;