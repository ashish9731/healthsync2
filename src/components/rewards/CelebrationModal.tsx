import React from 'react';
import { Trophy, Star, X } from 'lucide-react';

interface CelebrationModalProps {
  title: string;
  onClose: () => void;
}

const CelebrationModal: React.FC<CelebrationModalProps> = ({ title, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-md w-full mx-4 text-center p-6 animate-bounce-slow">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Trophy className="h-16 w-16 text-yellow-500" />
            <Star className="h-8 w-8 text-emerald-500 absolute -top-2 -right-2 animate-spin-slow" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3">🎉 Congratulations! 🎉</h2>
        <p className="text-xl text-emerald-600 font-semibold mb-4">
          You've achieved {title}!
        </p>
        <p className="text-gray-600">
          Keep up the great work! Your dedication to health is inspiring.
        </p>
      </div>
    </div>
  );
};

export default CelebrationModal;