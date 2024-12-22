import React from 'react';
import { Activity, Droplet, LineChart, AlertTriangle, Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const glucoseData = [
  { time: '6am', value: 120 },
  { time: '9am', value: 140 },
  { time: '12pm', value: 110 },
  { time: '3pm', value: 130 },
  { time: '6pm', value: 125 },
  { time: '9pm', value: 115 },
];

const DiabetesMetrics = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Diabetes Management</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Last updated: 2 hours ago</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Droplet className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-blue-600">Now</span>
          </div>
          <h3 className="text-sm text-gray-600">Blood Glucose</h3>
          <div className="flex items-baseline space-x-2 mt-1">
            <span className="text-2xl font-bold">126</span>
            <span className="text-gray-500">mg/dL</span>
          </div>
          <div className="flex items-center mt-2 text-sm">
            <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
            <span className="text-amber-600">Slightly elevated</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Activity className="h-5 w-5 text-emerald-600" />
            </div>
            <span className="text-sm font-medium text-emerald-600">7-day avg</span>
          </div>
          <h3 className="text-sm text-gray-600">HbA1c Estimate</h3>
          <div className="flex items-baseline space-x-2 mt-1">
            <span className="text-2xl font-bold">6.2</span>
            <span className="text-gray-500">%</span>
          </div>
          <div className="flex items-center mt-2 text-sm text-emerald-600">
            <span>Within target range</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-violet-100 rounded-lg">
              <LineChart className="h-5 w-5 text-violet-600" />
            </div>
            <span className="text-sm font-medium text-violet-600">Today</span>
          </div>
          <h3 className="text-sm text-gray-600">Glucose Variability</h3>
          <div className="flex items-baseline space-x-2 mt-1">
            <span className="text-2xl font-bold">18</span>
            <span className="text-gray-500">%</span>
          </div>
          <div className="flex items-center mt-2 text-sm text-violet-600">
            <span>Low variability</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-rose-100 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-rose-600" />
            </div>
            <span className="text-sm font-medium text-rose-600">24h</span>
          </div>
          <h3 className="text-sm text-gray-600">Hypo Events</h3>
          <div className="flex items-baseline space-x-2 mt-1">
            <span className="text-2xl font-bold">0</span>
            <span className="text-gray-500">events</span>
          </div>
          <div className="flex items-center mt-2 text-sm text-emerald-600">
            <span>No events detected</span>
          </div>
        </div>
      </div>

      {/* Glucose Trend Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Today's Glucose Trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={glucoseData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="glucoseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#glucoseGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default DiabetesMetrics;