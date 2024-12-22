import React, { useState } from 'react';
import { Utensils, RefreshCw } from 'lucide-react';
import MealCard from './MealCard';

const initialMeals = {
  breakfast: {
    name: 'Oatmeal with Berries',
    calories: 320,
    protein: '12g',
    carbs: '45g',
    fat: '8g',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&q=80&w=600'
  },
  lunch: {
    name: 'Grilled Chicken Salad',
    calories: 450,
    protein: '35g',
    carbs: '25g',
    fat: '22g',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'
  },
  dinner: {
    name: 'Baked Salmon with Vegetables',
    calories: 520,
    protein: '42g',
    carbs: '30g',
    fat: '28g',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600'
  }
};

const MealPlanner = () => {
  const [meals, setMeals] = useState(initialMeals);

  const handleRefresh = (mealType: keyof typeof meals) => {
    // In a real app, this would fetch new suggestions from an API
    console.log(`Refreshing ${mealType} suggestion`);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Today's Meal Plan</h2>
        <div className="flex items-center space-x-2">
          <Utensils className="h-5 w-5 text-emerald-600" />
          <span className="text-gray-600">Based on your health metrics</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(meals).map(([type, meal]) => (
          <MealCard
            key={type}
            type={type}
            meal={meal}
            onRefresh={() => handleRefresh(type as keyof typeof meals)}
          />
        ))}
      </div>
    </section>
  );
};

export default MealPlanner;