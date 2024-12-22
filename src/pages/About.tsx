import React from 'react';
import Mission from '../components/about/Mission';
import Founders from '../components/about/Founders';
import Purpose from '../components/about/Purpose';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">About HealthSync</h1>
          <p className="text-emerald-50 text-center mt-4 text-lg max-w-2xl mx-auto">
            Empowering individuals to take control of their health journey through technology and personalized wellness solutions.
          </p>
        </div>
      </section>

      <Mission />
      <Founders />
      <Purpose />
    </div>
  );
};

export default About;