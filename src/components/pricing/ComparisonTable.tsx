import React from 'react';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'Health Report Analysis', basic: true, premium: true, enterprise: true },
  { name: 'Daily Task Tracking', basic: true, premium: true, enterprise: true },
  { name: 'Basic Meal Plans', basic: true, premium: true, enterprise: true },
  { name: 'Custom Meal Plans', basic: false, premium: true, enterprise: true },
  { name: 'Achievement Rewards', basic: true, premium: true, enterprise: true },
  { name: 'Premium Health Insights', basic: false, premium: true, enterprise: true },
  { name: 'Personal Health Coach', basic: false, premium: false, enterprise: true },
  { name: 'Priority Support', basic: false, premium: true, enterprise: true },
  { name: 'Family Account Support', basic: false, premium: false, enterprise: true },
  { name: 'API Access', basic: false, premium: false, enterprise: true },
];

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-t border-b">
            <th className="py-4 px-6 text-left">Features</th>
            <th className="py-4 px-6 text-center">Basic</th>
            <th className="py-4 px-6 text-center">Premium</th>
            <th className="py-4 px-6 text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.name} className="border-b">
              <td className="py-4 px-6">{feature.name}</td>
              <td className="py-4 px-6 text-center">
                {feature.basic ? (
                  <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.premium ? (
                  <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.enterprise ? (
                  <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;