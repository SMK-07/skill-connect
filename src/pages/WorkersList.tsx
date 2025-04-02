
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, MapPin, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

// Mock data for workers
const workersData = [
  {
    id: 1,
    name: "John Smith",
    profession: "Plumber",
    location: "New York City, NY",
    distance: "2.5 miles",
    rating: 4.8,
    reviews: 124,
    photo: "https://randomuser.me/api/portraits/men/72.jpg",
    available: true,
    hourlyRate: 60
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    profession: "Electrician",
    location: "Los Angeles, CA",
    distance: "1.8 miles",
    rating: 4.9,
    reviews: 89,
    photo: "https://randomuser.me/api/portraits/women/63.jpg",
    available: true,
    hourlyRate: 65
  },
  {
    id: 3,
    name: "David Johnson",
    profession: "Carpenter",
    location: "Chicago, IL",
    distance: "3.2 miles",
    rating: 4.7,
    reviews: 56,
    photo: "https://randomuser.me/api/portraits/men/70.jpg",
    available: false,
    hourlyRate: 55
  },
  {
    id: 4,
    name: "Sarah Williams",
    profession: "Painter",
    location: "Houston, TX",
    distance: "4.1 miles",
    rating: 4.9,
    reviews: 42,
    photo: "https://randomuser.me/api/portraits/women/73.jpg",
    available: true,
    hourlyRate: 50
  },
  {
    id: 5,
    name: "Michael Brown",
    profession: "Plumber",
    location: "Phoenix, AZ",
    distance: "2.9 miles",
    rating: 4.6,
    reviews: 78,
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    available: true,
    hourlyRate: 58
  },
  {
    id: 6,
    name: "Jennifer Lee",
    profession: "Electrician",
    location: "Philadelphia, PA",
    distance: "1.5 miles",
    rating: 4.8,
    reviews: 65,
    photo: "https://randomuser.me/api/portraits/women/80.jpg",
    available: true,
    hourlyRate: 63
  }
];

// Categories for filtering
const categories = ["All", "Plumber", "Electrician", "Carpenter", "Painter", "Gardener", "Cleaner"];

const WorkersList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [distance, setDistance] = useState(10);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [availabilityFilter, setAvailabilityFilter] = useState(false);

  // Filter workers based on current filters
  const filteredWorkers = workersData.filter(worker => {
    // Filter by category
    if (selectedCategory !== "All" && worker.profession !== selectedCategory) return false;
    
    // Filter by search term (name or profession)
    if (searchTerm && !worker.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !worker.profession.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    // Filter by availability if filter is active
    if (availabilityFilter && !worker.available) return false;
    
    // Filter by rating
    if (worker.rating < ratingFilter) return false;
    
    // Filter by price range
    if (worker.hourlyRate < priceRange[0] || worker.hourlyRate > priceRange[1]) return false;
    
    // Filter by distance (assuming distance is in miles)
    if (parseFloat(worker.distance) > distance) return false;
    
    return true;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search API call
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-skillconnect-black mb-2">Find Skilled Workers</h1>
            <p className="text-gray-600">Browse our directory of verified and rated professionals</p>
          </div>
          
          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or profession..."
                  className="pl-10 input-field"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-blue-gradient text-white">
                Search
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="md:w-auto"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </form>
            
            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Distance (up to {distance} miles)
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={distance}
                      onChange={(e) => setDistance(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Minimum Rating
                    </label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setRatingFilter(rating)}
                          className={`p-1 rounded-full ${
                            ratingFilter >= rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          <Star className={`h-5 w-5 ${ratingFilter >= rating ? 'fill-yellow-400' : ''}`} />
                        </button>
                      ))}
                      {ratingFilter > 0 && (
                        <button 
                          className="ml-2 text-xs text-red-500"
                          onClick={() => setRatingFilter(0)}
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Availability
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="availability"
                        checked={availabilityFilter}
                        onChange={() => setAvailabilityFilter(!availabilityFilter)}
                        className="h-4 w-4 text-skillconnect-blue focus:ring-skillconnect-blue border-gray-300 rounded"
                      />
                      <label htmlFor="availability" className="ml-2 block text-sm text-gray-700">
                        Available workers only
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setDistance(10);
                      setPriceRange([0, 100]);
                      setRatingFilter(0);
                      setAvailabilityFilter(false);
                    }}
                    className="mr-2"
                  >
                    Reset Filters
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Categories Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-skillconnect-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">{filteredWorkers.length} workers found</p>
          </div>
          
          {/* Workers List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkers.length > 0 ? (
              filteredWorkers.map((worker) => (
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
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                        <Star size={12} className="mr-1 fill-amber-500" />
                        {worker.rating} ({worker.reviews})
                      </div>
                      <div className="text-skillconnect-blue font-medium">${worker.hourlyRate}/hr</div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-1">{worker.name}</h3>
                    <p className="text-skillconnect-blue font-medium mb-2">{worker.profession}</p>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <MapPin size={14} className="mr-1" />
                      {worker.distance} away
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link to={`/workers/${worker.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </Link>
                      <Button className="bg-blue-gradient text-white">Contact</Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-gray-100 rounded-full p-4 mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No workers found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setDistance(10);
                    setPriceRange([0, 100]);
                    setRatingFilter(0);
                    setAvailabilityFilter(false);
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkersList;
