import React from 'react';

const founders = [
  {
    name: 'Deepak Agrawal',
    role: 'CEO & Co-founder',
    bio: 'Former healthcare technology researcher with 15 years of experience in digital health solutions.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    name: 'Suhit Gupta',
    role: 'CEO & Co-founder',
    bio: 'Former healthcare technology researcher with 15 years of experience in digital health solutions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    name: 'Hrindam Hooja',
    role: 'CTO & Co-founder',
    bio: 'AI specialist with expertise in health data analysis and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    name: 'Agila Devaraj',
    role: 'Chief Medical Officer',
    bio: 'Board-certified nutritionist specializing in personalized diet planning and health optimization.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const Founders = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                <p className="text-emerald-600 mb-4">{founder.role}</p>
                <p className="text-gray-600">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;