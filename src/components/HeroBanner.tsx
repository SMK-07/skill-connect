
import React from 'react';
import { Search, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative bg-blue-gradient-vertical text-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 animate-fadeIn">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Connect with Skilled Workers in Your Area
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Find reliable carpenters, plumbers, electricians, and more for your household needs. Quick, easy, and trusted connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/workers">
                <Button className="bg-white text-skillconnect-blue hover:bg-gray-100 px-6 py-5 font-medium text-base flex items-center gap-2">
                  <Search size={18} />
                  Find Workers
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-5 font-medium text-base flex items-center gap-2">
                  <UserPlus size={18} />
                  Join as a Worker
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fadeIn">
            <div className="relative w-full max-w-md">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Popular Categories</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Plumber', 'Electrician', 'Carpenter', 'Painter', 'Gardener', 'Cleaner'].map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="bg-white/70 hover:bg-white text-skillconnect-blue rounded-lg py-3 px-4 text-center transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
