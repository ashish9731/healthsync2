import React from 'react';
import { FileText, AlertTriangle, TrendingUp, TrendingDown, Activity, Heart } from 'lucide-react';

const HealthReportAnalysis = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Health Report Analysis</h2>
        <span className="text-sm text-gray-600">Last report: 2 days ago</span>
      </div>

      {/* Key Findings */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FileText className="h-5 w-5 text-blue-600 mr-2" />
          Key Findings
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <span className="font-medium text-amber-800">Attention Required</span>
            </div>
            <ul className="space-y-2 text-amber-700">
              <li>• Cholesterol slightly elevated</li>
              <li>• Blood pressure trending higher</li>
              <li>• Vitamin D deficiency</li>
            </ul>
          </div>

          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-emerald-800">Improvements</span>
            </div>
            <ul className="space-y-2 text-emerald-700">
              <li>• Blood sugar control improved</li>
              <li>• Iron levels normalized</li>
              <li>• Better sleep patterns</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-blue-800">Recommendations</span>
            </div>
            <ul className="space-y-2 text-blue-700">
              <li>• Increase fiber intake</li>
              <li>• Add vitamin D supplement</li>
              <li>• Monitor blood pressure daily</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Trend Analysis</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-rose-600" />
                <span>Blood Pressure</span>
              </div>
              <div className="flex items-center text-amber-600">
                <TrendingUp className="h-5 w-5 mr-1" />
                <span>+5%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Activity className="h-5 w-5 text-emerald-600" />
                <span>Blood Sugar</span>
              </div>
              <div className="flex items-center text-emerald-600">
                <TrendingDown className="h-5 w-5 mr-1" />
                <span>-12%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Action Items</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-amber-100 rounded">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="font-medium">Schedule Follow-up</p>
                <p className="text-sm text-gray-600">Book appointment for blood pressure check</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-emerald-100 rounded">
                <Activity className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium">Dietary Changes</p>
                <p className="text-sm text-gray-600">Implement recommended meal plan changes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthReportAnalysis;