import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BCApplicationFormProps {
  onClose: () => void;
}

const BCApplicationForm: React.FC<BCApplicationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    villageName: '',
    mobile: '',
    email: '',
    accountNumber: '',
    address: {
      village: '',
      gramPanchayat: '',
      block: '',
      district: '',
      state: '',
      pinCode: ''
    },
    dateOfBirth: '',
    aadharNumber: '',
    aadharPhoto: null,
    panNumber: '',
    panPhoto: null,
    passportPhoto: null,
    education: '',
    acceptTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment gateway integration and form submission
    console.log(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        [field]: e.target.files[0]
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
      >
        <X className="h-6 w-6" />
      </button>
      
      <h2 className="text-2xl font-bold mb-6">RMGB BC Application Form</h2>
      <p className="mb-6 text-gray-600">
        Application fee: ₹2,500 (Required for BC KO code)
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Middle Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.middleName}
              onChange={(e) => setFormData({...formData, middleName: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">WhatsApp/Mobile Number</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                +91
              </span>
              <input
                type="tel"
                required
                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email ID</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        {/* Address Information */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Village</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.address.village}
              onChange={(e) => setFormData({
                ...formData,
                address: {...formData.address, village: e.target.value}
              })}
            />
          </div>
          {/* Add other address fields similarly */}
        </div>

        {/* Document Uploads */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Aadhaar Card Photo</label>
            <input
              type="file"
              accept="image/*"
              required
              className="mt-1 block w-full"
              onChange={(e) => handleFileChange(e, 'aadharPhoto')}
            />
          </div>
          {/* Add other document upload fields */}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start">
          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            checked={formData.acceptTerms}
            onChange={(e) => setFormData({...formData, acceptTerms: e.target.checked})}
          />
          <label className="ml-2 block text-sm text-gray-700">
            I accept the Terms and Conditions, including the monthly activity requirement and security deposit policy.
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Proceed to Payment (₹2,500)
          </button>
        </div>
      </form>
    </div>
  );
};

export default BCApplicationForm;