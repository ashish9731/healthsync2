import React from 'react';
import { Utensils, Leaf, Apple } from 'lucide-react';

const MealPlanning = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=2000"
              alt="Healthy Meal Planning"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Smart Meal Planning</h2>
            <p className="text-gray-600 mb-8">
              Get personalized meal suggestions based on your health profile and dietary preferences.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Utensils className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Customized Meals</h3>
                  <p className="text-gray-600">Tailored meal plans that match your health needs</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Alternative Options</h3>
                  <p className="text-gray-600">Multiple meal choices to suit your preferences</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Apple className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Nutritional Balance</h3>
                  <p className="text-gray-600">Perfectly balanced meals for optimal health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlanning;