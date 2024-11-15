import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About Vankal Agri Solutions</h1>
          <p className="text-xl max-w-2xl">Dedicated to transforming rural lives through innovative agricultural and financial solutions.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Target className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading catalyst in rural development by creating sustainable solutions 
                that enhance agricultural productivity and financial accessibility.
              </p>
            </div>
            <div>
              <Globe className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower rural communities through integrated services that promote sustainable 
                farming practices and inclusive financial growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Vankal Agri Solutions was founded with a vision to bridge the gap between rural 
              communities and modern agricultural & financial solutions. Our journey began with 
              a deep understanding of rural challenges and a commitment to addressing them through 
              innovative approaches.
            </p>
            <p className="mb-4">
              Today, we operate as a dynamic organization with two core verticals - Financial 
              Inclusion and Agricultural Solutions. Our financial services division works as a 
              corporate business correspondent, making banking services accessible to rural areas, 
              while our agricultural division produces and distributes high-quality bio fertilizers 
              and bio pesticides.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Commitment to environmentally responsible practices and sustainable development.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuous improvement and adoption of modern solutions for rural challenges.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Community Focus</h3>
              <p className="text-gray-600">
                Prioritizing the needs and development of rural communities in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold">Leadership Name</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold">Leadership Name</h3>
              <p className="text-gray-600">Agricultural Director</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold">Leadership Name</h3>
              <p className="text-gray-600">Financial Services Head</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;