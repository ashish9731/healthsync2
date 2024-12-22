import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <Activity className="h-8 w-8 text-sky-600" />
            <span className="text-xl font-bold text-gray-800">HealthSync</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-sky-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-sky-600 transition-colors">
              About Us
            </Link>
            <Link to="/what-we-do" className="text-gray-600 hover:text-sky-600 transition-colors">
              What We Do
            </Link>
            <Link to="/rewards" className="text-gray-600 hover:text-sky-600 transition-colors">
              Rewards
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-sky-600 transition-colors">
              Pricing
            </Link>
            <Link 
              to="/login" 
              className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;