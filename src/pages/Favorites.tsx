
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, MapPin, Phone, Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock data for favorite workers
const favoritesData = [
  {
    id: 1,
    name: "John Smith",
    profession: "Plumber",
    location: "New York City, NY",
    rating: 4.8,
    reviews: 124,
    photo: "https://randomuser.me/api/portraits/men/72.jpg",
    available: true
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    profession: "Electrician",
    location: "Los Angeles, CA",
    rating: 4.9,
    reviews: 89,
    photo: "https://randomuser.me/api/portraits/women/63.jpg",
    available: true
  },
  {
    id: 5,
    name: "Michael Brown",
    profession: "Plumber",
    location: "Phoenix, AZ",
    rating: 4.6,
    reviews: 78,
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    available: true
  }
];

const Favorites = () => {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState(favoritesData);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter favorites based on search term
  const filteredFavorites = searchTerm 
    ? favorites.filter(worker => 
        worker.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        worker.profession.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : favorites;
  
  const handleRemoveFavorite = (workerId: number) => {
    setFavorites(favorites.filter(worker => worker.id !== workerId));
    
    toast({
      title: "Removed from favorites",
      description: "The worker has been removed from your favorites list.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-skillconnect-black mb-4">Your Favorites</h1>
          <p className="text-gray-600 mb-8">Quickly access your favorite workers</p>
          
          {/* Search Bar */}
          {favorites.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search your favorites..."
                  className="pl-10 input-field"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}
          
          {/* Favorites List */}
          {filteredFavorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFavorites.map((worker) => (
                <div key={worker.id} className="bg-white rounded-xl overflow-hidden card-shadow relative">
                  {/* Favorite Button */}
                  <button
                    onClick={() => handleRemoveFavorite(worker.id)}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors z-10"
                    title="Remove from favorites"
                  >
                    <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                  </button>
                  
                  <div className="relative">
                    <img 
                      src={worker.photo} 
                      alt={worker.name} 
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="absolute top-3 left-3">
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
                      <span className="ml-1 text-gray-500 text-xs">({worker.reviews} reviews)</span>
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
          ) : searchTerm ? (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-gray-100 rounded-full p-4 inline-flex mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No matches found</h3>
              <p className="text-gray-600 mb-4">We couldn't find any favorites matching "{searchTerm}"</p>
              <Button 
                variant="outline"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-gray-100 rounded-full p-4 inline-flex mb-4">
                <Heart className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
              <p className="text-gray-600 mb-6">
                When you find workers you like, click the heart icon to add them to your favorites for quick access.
              </p>
              <Link to="/workers">
                <Button className="bg-blue-gradient text-white">Find Workers</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
