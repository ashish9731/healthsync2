import React from 'react';
import { Activity, Heart, Droplet } from 'lucide-react';

const ReportAnalysis = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Smart Health Analysis</h2>
            <p className="text-gray-600 mb-8">
              Our advanced AI analyzes your health reports to provide comprehensive insights about your well-being.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Activity className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Vital Statistics</h3>
                  <p className="text-gray-600">Track blood sugar, cholesterol, and other key metrics</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Heart className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Health Trends</h3>
                  <p className="text-gray-600">View your progress over time with detailed charts</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Droplet className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Risk Assessment</h3>
                  <p className="text-gray-600">Get early warnings about potential health risks</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
              alt="Health Analysis Dashboard"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportAnalysis;