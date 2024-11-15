import React from 'react';
import { ArrowRight, Leaf, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Empowering Rural Prosperity</h1>
            <p className="text-xl mb-8 max-w-2xl">Your one-stop solution for all rural needs - from financial inclusion to sustainable agriculture practices.</p>
            <Link to="/about" className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition-colors">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Business Verticals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Coins className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Financial Inclusion</h3>
              <p className="text-gray-600 mb-6">Providing comprehensive financial services as a corporate business correspondent, making banking accessible to rural communities.</p>
              <Link to="/financial" className="text-green-600 inline-flex items-center hover:text-green-700">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Agriculture Solutions</h3>
              <p className="text-gray-600 mb-6">Manufacturing and distributing high-quality bio fertilizers and bio pesticides to promote sustainable farming practices.</p>
              <Link to="/agriculture" className="text-green-600 inline-flex items-center hover:text-green-700">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">To revolutionize rural development by providing integrated solutions that enhance agricultural productivity and financial accessibility, creating sustainable prosperity for rural communities.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;