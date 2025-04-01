
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-gradient-vertical text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of workers and households already connecting through our platform.
          Find the right skill for your needs today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button className="bg-white text-skillconnect-blue hover:bg-gray-100 px-6 py-6 font-medium text-base">
              Create an Account
            </Button>
          </Link>
          <Link to="/workers">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 font-medium text-base flex items-center gap-2">
              Browse Workers
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
