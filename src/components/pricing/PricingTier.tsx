import React from 'react';
import { Check } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  isPopular,
  onSelect,
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${isPopular ? 'ring-2 ring-emerald-500' : ''}`}>
      {isPopular && (
        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mt-4">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full mt-8 px-4 py-2 rounded-lg font-medium transition-colors
          ${isPopular 
            ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingTier;