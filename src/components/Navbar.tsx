import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Vankal Agri Solutions</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/financial"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/financial') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Financial Services
            </Link>
            <Link
              to="/agriculture"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/agriculture') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Agriculture Solutions
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;