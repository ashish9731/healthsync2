import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  icon: LucideIcon;
  change: string;
  details: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  status,
  icon: Icon,
  change,
  details
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-emerald-100 text-emerald-800';
      case 'warning':
        return 'bg-amber-100 text-amber-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Icon className="h-6 w-6 text-gray-600" />
          </div>
          <h3 className="font-medium text-gray-900">{title}</h3>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
          <span className="ml-1 text-gray-500">{unit}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-sm ${change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
            {change}
          </span>
          <span className="text-sm text-gray-500">{details}</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;