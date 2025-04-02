
import React from 'react';
import { Search, UserCheck, Phone, Star } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Search",
    description: "Find workers based on skills, location, and ratings",
    icon: Search,
    color: "bg-blue-100 text-skillconnect-blue"
  },
  {
    id: 2,
    title: "Select",
    description: "Choose the best match for your specific needs",
    icon: UserCheck,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 3,
    title: "Connect",
    description: "Contact workers directly through our platform",
    icon: Phone,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 4,
    title: "Rate",
    description: "Leave feedback after job completion to help us improve",
    icon: Star,
    color: "bg-amber-100 text-amber-600"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 bg-skillconnect-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">How It Works</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          SkillConnect makes it simple to find skilled workers for your household needs in just a few steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                <step.icon size={24} />
              </div>
              <div className="bg-white p-6 rounded-xl w-full card-shadow">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {/* {step.id < steps.length && (
                <div className="hidden lg:block absolute transform translate-x-24">
                  <div className="h-0.5 w-16 bg-gray-300 mt-10"></div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
