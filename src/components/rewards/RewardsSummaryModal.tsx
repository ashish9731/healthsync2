import React from 'react';
import { X, Star, Trophy, Target, ArrowRight, Award } from 'lucide-react';

interface RewardsSummaryModalProps {
  type: 'streaks' | 'achievements' | 'goals';
  onClose: () => void;
}

const summaryContent = {
  streaks: {
    title: 'Daily Streaks',
    icon: Star,
    description: 'Keep up your daily health routines to build streaks',
    stats: [
      { label: 'Current Streak', value: '7 days' },
      { label: 'Longest Streak', value: '21 days' },
      { label: 'Total Streaks', value: '15' }
    ],
    items: [
      'Complete daily tasks consistently',
      'Log meals and activities',
      'Track water intake',
      'Record exercise sessions'
    ],
    rewards: [
      '7 days - Unlock basic badge',
      '14 days - Premium meal plans',
      '30 days - Health coach consultation',
      '60 days - Premium membership discount'
    ]
  },
  achievements: {
    title: 'Achievements',
    icon: Trophy,
    description: 'Milestones and badges earned on your health journey',
    stats: [
      { label: 'Total Earned', value: '12' },
      { label: 'This Month', value: '3' },
      { label: 'Points', value: '2,450' }
    ],
    items: [
      'Perfect Week Warrior',
      'Nutrition Master',
      'Exercise Champion',
      'Hydration Hero'
    ],
    rewards: [
      'Exclusive badges for profile',
      'Monthly leaderboard position',
      'Special health tips access',
      'Reward points for store'
    ]
  },
  goals: {
    title: 'Health Goals',
    icon: Target,
    description: 'Track and achieve your personalized health objectives',
    stats: [
      { label: 'Active Goals', value: '4' },
      { label: 'Completed', value: '8' },
      { label: 'Success Rate', value: '75%' }
    ],
    items: [
      'Weight management',
      'Daily step count',
      'Nutrition balance',
      'Sleep quality'
    ],
    rewards: [
      'Personalized goal insights',
      'Progress certificates',
      'Achievement badges',
      'Health coach feedback'
    ]
  }
};

const RewardsSummaryModal: React.FC<RewardsSummaryModalProps> = ({ type, onClose }) => {
  const content = summaryContent[type];
  const Icon = content.icon;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-sky-100 rounded-xl">
                <Icon className="h-8 w-8 text-sky-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{content.title}</h2>
                <p className="text-gray-600">{content.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {content.stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-sky-600">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {/* Items */}
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 text-sky-600 mr-2" />
                Current {content.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {content.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-sky-600" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rewards */}
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 text-sky-600 mr-2" />
                Available Rewards
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {content.rewards.map((reward, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-sky-600" />
                    <span className="text-gray-600">{reward}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsSummaryModal;