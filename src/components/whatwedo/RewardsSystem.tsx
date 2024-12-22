import React from 'react';
import { Trophy, Gift, Star } from 'lucide-react';

const RewardsSystem = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Rewards Program</h2>
            <p className="text-gray-600 mb-8">
              Stay motivated with our comprehensive rewards system that celebrates your health achievements.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Trophy className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Daily Achievements</h3>
                  <p className="text-gray-600">Earn points for completing health tasks</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Gift className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Special Rewards</h3>
                  <p className="text-gray-600">Unlock premium features and exclusive content</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Star className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Progress Tracking</h3>
                  <p className="text-gray-600">Monitor your achievements and milestones</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1553451166-232112912bcd?auto=format&fit=crop&q=80&w=2000"
              alt="Rewards and Achievements"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSystem;