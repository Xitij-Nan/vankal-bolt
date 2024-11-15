import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Vankal Agri Solutions</h3>
            <p className="text-gray-300">Empowering Rural Prosperity</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/financial" className="text-gray-300 hover:text-white">Financial Services</a></li>
              <li><a href="/agriculture" className="text-gray-300 hover:text-white">Agriculture Solutions</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                Head Office Location
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                +91 XXXXX XXXXX
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                info@vankalagri.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Vankal Agri Solutions Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;