
import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface Worker {
  id: number;
  name: string;
  profession: string;
  location: string;
  rating: number;
  photo: string;
  available: boolean;
}

const workers: Worker[] = [
  {
    id: 1,
    name: "John Smith",
    profession: "Plumber",
    location: "New York City, NY",
    rating: 4.8,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    available: true
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    profession: "Electrician",
    location: "Los Angeles, CA",
    rating: 4.9,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    available: true
  },
  {
    id: 3,
    name: "David Johnson",
    profession: "Carpenter",
    location: "Chicago, IL",
    rating: 4.7,
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    available: false
  },
  {
    id: 4,
    name: "Sarah Williams",
    profession: "Painter",
    location: "Houston, TX",
    rating: 4.9,
    photo: "https://randomuser.me/api/portraits/women/37.jpg",
    available: true
  }
];

const FeaturedWorkers = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title mb-0">Featured Workers</h2>
          <Link to="/workers" className="text-skillconnect-blue hover:text-skillconnect-blue-dark font-medium">
            View all
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workers.map((worker) => (
            <div key={worker.id} className="bg-white rounded-xl overflow-hidden card-shadow">
              <div className="relative">
                <img 
                  src={worker.photo} 
                  alt={worker.name} 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    worker.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {worker.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                    <Star size={12} className="mr-1" fill="#F59E0B" />
                    {worker.rating.toFixed(1)}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-1">{worker.name}</h3>
                <p className="text-skillconnect-blue font-medium mb-2">{worker.profession}</p>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin size={14} className="mr-1" />
                  {worker.location}
                </div>
                
                <div className="flex space-x-2">
                  <Link to={`/workers/${worker.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">View Profile</Button>
                  </Link>
                  <Button className="bg-blue-gradient text-white">
                    <Phone size={18} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkers;
