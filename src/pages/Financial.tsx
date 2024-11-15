import React, { useState } from 'react';
import { Wallet, CreditCard, PiggyBank, Users, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import BCApplicationForm from '../components/BCApplicationForm';

const Financial = () => {
  const [showBCForm, setShowBCForm] = useState(false);

  const services = [
    {
      icon: <Wallet className="h-12 w-12 text-green-600" />,
      title: "Banking Services",
      description: "Comprehensive banking services including account opening, deposits, withdrawals, and fund transfers through our BC network."
    },
    {
      icon: <CreditCard className="h-12 w-12 text-green-600" />,
      title: "Digital Payments",
      description: "Secure digital payment solutions and money transfer services for rural communities, powered by Aadhar-enabled payment systems."
    },
    {
      icon: <PiggyBank className="h-12 w-12 text-green-600" />,
      title: "Direct Benefit Transfers",
      description: "Efficient facilitation of government subsidies and welfare payments through our established distribution channels."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Insurance Services",
      description: "Comprehensive life and non-life insurance products with streamlined claims processing and support."
    }
  ];

  const bcBenefits = [
    {
      icon: <FileText />,
      title: "Minimal Investment",
      description: "Start your BC business with a low initial investment of ₹2,500"
    },
    {
      icon: <CheckCircle />,
      title: "Regular Income",
      description: "Earn through commissions on transactions and services"
    },
    {
      icon: <AlertCircle />,
      title: "Full Support",
      description: "Complete training and operational support provided"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Financial Inclusion Services</h1>
          <p className="text-xl max-w-2xl">As a Corporate Business Correspondent, we bridge the gap between banking services and rural communities through innovative financial solutions.</p>
        </div>
      </section>

      {/* BC Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Business Correspondent Services</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At Vankal Agri Solutions, we serve as a vital link between banks and communities, 
              specializing in providing comprehensive Business Correspondent (BC) services that 
              extend banking reach to underserved populations.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Financial Inclusion Initiatives</h3>
                <p>
                  We leverage our BC networks to promote financial inclusion through:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Aadhar-enabled payment services</li>
                  <li>Basic banking services in remote areas</li>
                  <li>Financial literacy programs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Government Scheme Implementation</h3>
                <p>
                  Active facilitation of government initiatives including:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Jan Dhan Yojana</li>
                  <li>PM-Kisan</li>
                  <li>Direct Benefit Transfers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RMGB BC Program */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">RMGB Bank BC Program</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg mb-6">
              Become a Business Correspondent for Rajasthan Marudhara Gramin Bank (RMGB) and be part 
              of our mission to promote financial inclusion.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {bcBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 border rounded-lg">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => setShowBCForm(true)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Apply Now for BC Position
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Financial Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BC Application Form Modal */}
      {showBCForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-90vh overflow-y-auto p-6">
            <BCApplicationForm onClose={() => setShowBCForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Financial;