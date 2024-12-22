import React from 'react';
import PricingTier from '../components/pricing/PricingTier';
import ComparisonTable from '../components/pricing/ComparisonTable';

const pricingTiers = [
  {
    name: 'Basic',
    price: '$0',
    description: 'Essential features for your health journey',
    features: [
      'Health report analysis',
      'Daily task tracking',
      'Basic meal plans',
      'Achievement rewards',
      'Community support'
    ]
  },
  {
    name: 'Premium',
    price: '$9.99',
    description: 'Advanced features for health enthusiasts',
    features: [
      'All Basic features',
      'Custom meal plans',
      'Premium health insights',
      'Priority support',
      'Exclusive rewards'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '$29.99',
    description: 'Complete solution for families & organizations',
    features: [
      'All Premium features',
      'Personal health coach',
      'Family account support',
      'API access',
      'Custom reporting'
    ]
  }
];

const Pricing = () => {
  const handleSelect = (tier: string) => {
    console.log(`Selected ${tier} tier`);
    // Handle subscription logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Simple, Transparent Pricing</h1>
          <p className="text-emerald-50 text-center mt-4 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your health journey
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <PricingTier
                key={tier.name}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                isPopular={tier.isPopular}
                onSelect={() => handleSelect(tier.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
          <ComparisonTable />
        </div>
      </section>
    </div>
  );
};

export default Pricing;