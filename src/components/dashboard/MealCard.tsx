import React from 'react';
import { RefreshCw } from 'lucide-react';

interface MealProps {
  type: string;
  meal: {
    name: string;
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    image: string;
  };
  onRefresh: () => void;
}

const MealCard: React.FC<MealProps> = ({ type, meal, onRefresh }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl relative z-10">
      <img
        src={meal.image}
        alt={meal.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 capitalize">{type}</h3>
            <p className="text-gray-600">{meal.name}</p>
          </div>
          <button
            onClick={onRefresh}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <RefreshCw className="h-5 w-5 text-gray-400" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <p className="text-sm font-medium text-gray-900">{meal.calories}</p>
            <p className="text-xs text-gray-500">kcal</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{meal.protein}</p>
            <p className="text-xs text-gray-500">protein</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{meal.carbs}</p>
            <p className="text-xs text-gray-500">carbs</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{meal.fat}</p>
            <p className="text-xs text-gray-500">fat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;