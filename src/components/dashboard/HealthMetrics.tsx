import React from 'react';
import { Activity, Heart, Droplet } from 'lucide-react';
import MetricCard from './MetricCard';

const metrics = [
  {
    title: 'Blood Sugar',
    value: '126',
    unit: 'mg/dL',
    status: 'warning',
    icon: Droplet,
    change: '+12',
    details: 'Slightly elevated'
  },
  {
    title: 'HbA1c',
    value: '6.2',
    unit: '%',
    status: 'normal',
    icon: Activity,
    change: '-0.3',
    details: 'Within target range'
  },
  {
    title: 'Cholesterol',
    value: '185',
    unit: 'mg/dL',
    status: 'normal',
    icon: Heart,
    change: '-15',
    details: 'Healthy level'
  }
];

const HealthMetrics = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Health Metrics</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>
    </section>
  );
};

export default HealthMetrics;