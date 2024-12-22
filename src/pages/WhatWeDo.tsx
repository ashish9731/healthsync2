import React from 'react';
import ReportAnalysis from '../components/whatwedo/ReportAnalysis';
import MealPlanning from '../components/whatwedo/MealPlanning';
import RewardsSystem from '../components/whatwedo/RewardsSystem';
import ProcessFlow from '../components/whatwedo/ProcessFlow';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">How HealthSync Works</h1>
          <p className="text-emerald-50 text-center mt-4 text-lg max-w-2xl mx-auto">
            Your comprehensive health companion powered by advanced technology and personalized insights.
          </p>
        </div>
      </section>

      <ProcessFlow />
      <ReportAnalysis />
      <MealPlanning />
      <RewardsSystem />
    </div>
  );
};

export default WhatWeDo;