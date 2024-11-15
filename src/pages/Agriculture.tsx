import React from 'react';
import { Leaf, Droplets, Sprout, ShieldCheck } from 'lucide-react';

const Agriculture = () => {
  const products = [
    {
      name: "NPK Bio Fertilizers",
      description: "Balanced nutrition for optimal plant growth and soil health.",
      image: "https://images.unsplash.com/photo-1592978557745-a93705bc4531?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Trichoderma",
      description: "Biological fungicide for plant disease control and root health.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mycorrhiza",
      description: "Enhanced nutrient uptake and stress resistance for plants.",
      image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Agricultural Solutions</h1>
          <p className="text-xl max-w-2xl">Sustainable farming solutions with our range of bio fertilizers and bio pesticides.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Products?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">100% organic and environmentally sustainable solutions</p>
            </div>
            <div className="text-center">
              <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
              <p className="text-gray-600">Affordable solutions for better crop yields</p>
            </div>
            <div className="text-center">
              <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Better Yields</h3>
              <p className="text-gray-600">Improved crop productivity and quality</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Tested and certified products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Expert Technical Support</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of agricultural experts provides comprehensive support and guidance 
            on product usage, application methods, and best practices for maximum benefits.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;