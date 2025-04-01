
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Heart, Clock, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Demo toggle login function (for demonstration purposes)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="bg-blue-gradient text-white p-2 rounded-md">
              <Home size={20} />
            </span>
            <span className="font-bold text-xl text-skillconnect-black">
              SkillConnect
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-skillconnect-blue font-medium">Home</Link>
            <Link to="/history" className="text-gray-700 hover:text-skillconnect-blue font-medium">History</Link>
            <Link to="/favorites" className="text-gray-700 hover:text-skillconnect-blue font-medium">Favorites</Link>
            <Link to="/contact" className="text-gray-700 hover:text-skillconnect-blue font-medium">Contact</Link>
            {isLoggedIn ? (
              <Link to="/profile">
                <Button variant="outline" className="flex items-center gap-2">
                  <User size={18} />
                  Profile
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button className="bg-blue-gradient text-white">Login</Button>
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner animate-slideDown">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-skillconnect-blue font-medium flex items-center gap-2">
              <Home size={18} />
              Home
            </Link>
            <Link to="/history" className="text-gray-700 hover:text-skillconnect-blue font-medium flex items-center gap-2">
              <Clock size={18} />
              History
            </Link>
            <Link to="/favorites" className="text-gray-700 hover:text-skillconnect-blue font-medium flex items-center gap-2">
              <Heart size={18} />
              Favorites
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-skillconnect-blue font-medium">
              Contact
            </Link>
            {isLoggedIn ? (
              <Link to="/profile">
                <Button variant="outline" className="flex items-center gap-2 w-full justify-center">
                  <User size={18} />
                  Profile
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button className="bg-blue-gradient text-white w-full">Login</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
