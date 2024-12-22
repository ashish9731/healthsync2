import React from 'react';
import { Target, Heart, Users } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-600">
              To revolutionize personal health management through innovative technology and data-driven insights.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Values</h3>
            <p className="text-gray-600">
              Commitment to user privacy, scientific accuracy, and continuous improvement in health technology.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Impact</h3>
            <p className="text-gray-600">
              Helping millions achieve their health goals through personalized guidance and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;