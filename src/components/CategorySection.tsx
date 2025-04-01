
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Plumbers",
    icon: "🔧",
    description: "Expert plumbers for all your water system needs."
  },
  {
    id: 2,
    name: "Electricians",
    icon: "⚡",
    description: "Skilled electricians for installations and repairs."
  },
  {
    id: 3,
    name: "Carpenters",
    icon: "🪚",
    description: "Talented woodworkers for custom furniture and repairs."
  },
  {
    id: 4,
    name: "Painters",
    icon: "🖌️",
    description: "Professional painters for interior and exterior jobs."
  },
  {
    id: 5,
    name: "Gardeners",
    icon: "🌱",
    description: "Experienced gardeners to keep your outdoor space beautiful."
  },
  {
    id: 6,
    name: "Cleaners",
    icon: "🧹",
    description: "Thorough cleaners for homes and commercial spaces."
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Browse by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/category/${category.name.toLowerCase()}`} 
              key={category.id}
              className="bg-white rounded-xl p-6 card-shadow flex flex-col hover:border-skillconnect-blue-light border-2 border-transparent transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">{category.icon}</span>
                <ArrowRight className="text-skillconnect-blue-light" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-skillconnect-black">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
