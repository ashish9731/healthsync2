import React from 'react';
import { X, Trophy, Gift, LightbulbIcon } from 'lucide-react';

interface AchievementModalProps {
  achievement: {
    icon: any;
    title: string;
    description: string;
    progress: number;
    total: number;
    details: {
      benefits: string[];
      requirements: string[];
      tips: string[];
    };
  };
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  const Icon = achievement.icon;
  const percentage = (achievement.progress / achievement.total) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Icon className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{achievement.title}</h2>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-6">
            <div className="relative h-3 bg-gray-200 rounded-full mb-2">
              <div
                className="absolute h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">
              {achievement.progress} of {achievement.total} days completed
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Trophy className="h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold">Benefits</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                {achievement.details.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Gift className="h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold">Requirements</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                {achievement.details.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-3">
                <LightbulbIcon className="h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold">Tips</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                {achievement.details.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;