import React from 'react';
import { Clock, Utensils, Bell } from 'lucide-react';

const reminders = [
  {
    type: 'meal',
    time: '1:00 PM',
    title: 'Lunch',
    description: 'Grilled chicken salad with quinoa',
  },
  {
    type: 'task',
    time: '5:00 PM',
    title: 'Evening Walk',
    description: '30 minutes moderate pace walk',
  },
  {
    type: 'meal',
    time: '7:00 PM',
    title: 'Dinner',
    description: 'Baked salmon with steamed vegetables',
  },
];

const DailyReminders = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Today's Reminders</h2>
        <Bell className="h-6 w-6 text-sky-600 animate-bounce" />
      </div>
      <div className="space-y-4">
        {reminders.map((reminder, index) => (
          <div 
            key={index} 
            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-md"
          >
            {reminder.type === 'meal' ? (
              <Utensils className="h-6 w-6 text-sky-600 mt-1" />
            ) : (
              <Clock className="h-6 w-6 text-sky-600 mt-1" />
            )}
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{reminder.time}</span>
                <span className="text-gray-600">•</span>
                <span className="text-sky-600">{reminder.title}</span>
              </div>
              <p className="text-gray-600 mt-1">{reminder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyReminders;