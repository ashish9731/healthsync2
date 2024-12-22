import React from 'react';
import HealthMetrics from '../components/dashboard/HealthMetrics';
import ReportUpload from '../components/dashboard/ReportUpload';
import MealPlanner from '../components/dashboard/MealPlanner';
import DiabetesMetrics from '../components/dashboard/DiabetesMetrics';
import HealthReportAnalysis from '../components/dashboard/HealthReportAnalysis';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Health Dashboard</h1>
        <div className="grid gap-8">
          <ReportUpload />
          <HealthReportAnalysis />
          <DiabetesMetrics />
          <HealthMetrics />
          <MealPlanner />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;