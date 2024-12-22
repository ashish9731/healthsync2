import React, { useState, useEffect } from 'react';
import { Award, Target, Zap } from 'lucide-react';
import AchievementModal from './AchievementModal';
import CelebrationModal from './CelebrationModal';

const achievements = [
  {
    icon: Award,
    title: 'Perfect Week',
    description: 'Complete all daily tasks for 7 days',
    progress: 5,
    total: 7,
    details: {
      benefits: ['Unlock premium meal plans', 'Special badge on profile'],
      requirements: ['Complete all daily tasks', 'Log all meals', 'Track water intake'],
      tips: ['Set daily reminders', 'Plan meals in advance', 'Track progress in the app']
    }
  },
  {
    icon: Target,
    title: 'Health Master',
    description: 'Maintain optimal health metrics for 30 days',
    progress: 22,
    total: 30,
    details: {
      benefits: ['Health insights report', 'Personal coach consultation'],
      requirements: ['Daily health checks', 'Regular exercise', 'Balanced nutrition'],
      tips: ['Monitor vital signs', 'Follow recommended diet', 'Stay active daily']
    }
  },
  {
    icon: Zap,
    title: 'Meal Streak',
    description: 'Follow meal plans for 5 consecutive days',
    progress: 3,
    total: 5,
    details: {
      benefits: ['Nutrition guide unlock', 'Recipe collection access'],
      requirements: ['Log all meals', 'Follow portion guidelines', 'Stay within calorie goals'],
      tips: ['Prep meals in advance', 'Take food photos', 'Track nutrients']
    }
  },
];

export default function AchievementCards() {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);
  const [completedAchievement, setCompletedAchievement] = useState<string | null>(null);

  useEffect(() => {
    achievements.forEach(achievement => {
      if (achievement.progress === achievement.total) {
        setCompletedAchievement(achievement.title);
      }
    });
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          const percentage = (achievement.progress / achievement.total) * 100;
          
          return (
            <div
              key={achievement.title}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer relative overflow-hidden group"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-violet-100 rounded-lg">
                    <Icon className="h-6 w-6 text-violet-600" />
                  </div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-violet-500 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {achievement.progress} / {achievement.total} days
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}

      {completedAchievement && (
        <CelebrationModal
          title={completedAchievement}
          onClose={() => setCompletedAchievement(null)}
        />
      )}
    </>
  );
}