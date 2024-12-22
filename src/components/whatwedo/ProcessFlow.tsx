import React from 'react';
import { FileUp, LineChart, Utensils, Trophy } from 'lucide-react';

const steps = [
  {
    icon: FileUp,
    title: 'Upload Reports',
    description: 'Securely upload your health reports or input your metrics manually'
  },
  {
    icon: LineChart,
    title: 'Get Analysis',
    description: 'Receive detailed insights about your health metrics and trends'
  },
  {
    icon: Utensils,
    title: 'Personalized Plans',
    description: 'Get customized meal plans based on your health profile'
  },
  {
    icon: Trophy,
    title: 'Earn Rewards',
    description: 'Complete health goals and earn rewards for your progress'
  }
];

const ProcessFlow = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Health Journey</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-10 w-10 text-emerald-600" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-emerald-200" />
                )}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;