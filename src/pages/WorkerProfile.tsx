
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, MapPin, Phone, Mail, Calendar, Briefcase, ThumbsUp, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Mock worker data
const worker = {
  id: 1,
  name: "John Smith",
  profession: "Plumber",
  location: "New York City, NY",
  joinedDate: "March 2020",
  rating: 4.8,
  reviews: [
    {
      id: 1,
      author: "Sarah Johnson",
      date: "2 weeks ago",
      rating: 5,
      comment: "John was excellent! He fixed our leaky sink quickly and was very professional. Would definitely hire again."
    },
    {
      id: 2,
      author: "Michael Brown",
      date: "1 month ago",
      rating: 5,
      comment: "Fixed our water heater issue on the same day we called. Very knowledgeable and reasonably priced."
    },
    {
      id: 3,
      author: "Emily Davis",
      date: "2 months ago",
      rating: 4,
      comment: "Good work replacing our bathroom fixtures. Very thorough and cleaned up everything after the job."
    }
  ],
  completedJobs: 156,
  bio: "Professional plumber with over 10 years of experience in residential and commercial plumbing. Specializing in repairs, installations, and maintenance of plumbing systems.",
  photo: "https://randomuser.me/api/portraits/men/72.jpg",
  available: true,
  phone: "+1 (555) 123-4567",
  email: "john.smith@example.com",
  skills: ["Pipe Installation", "Leak Repairs", "Water Heaters", "Drain Cleaning", "Fixture Installation"],
  experience: [
    {
      id: 1,
      title: "Lead Plumber",
      company: "City Plumbing Services",
      period: "2018 - Present"
    },
    {
      id: 2,
      title: "Plumber Technician",
      company: "Metro Maintenance Co.",
      period: "2012 - 2018"
    }
  ],
  customerReviews: [
    {
      id: 1,
      author: "Sarah Johnson",
      date: "2 weeks ago",
      rating: 5,
      comment: "John was excellent! He fixed our leaky sink quickly and was very professional. Would definitely hire again."
    },
    {
      id: 2,
      author: "Michael Brown",
      date: "1 month ago",
      rating: 5,
      comment: "Fixed our water heater issue on the same day we called. Very knowledgeable and reasonably priced."
    },
    {
      id: 3,
      author: "Emily Davis",
      date: "2 months ago",
      rating: 4,
      comment: "Good work replacing our bathroom fixtures. Very thorough and cleaned up everything after the job."
    }
  ]
};

const WorkerProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Worker Profile Header */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover md:w-48" 
                  src={worker.photo} 
                  alt={worker.name} 
                />
              </div>
              
              <div className="p-8 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        worker.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {worker.available ? 'Available for Work' : 'Currently Unavailable'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl font-bold text-skillconnect-black">{worker.name}</h1>
                    
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 font-medium">{worker.rating}</span>
                        <span className="ml-1 text-gray-500">({worker.reviews.length} reviews)</span>
                      </div>
                      <div className="ml-4 flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {worker.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Member since {worker.joinedDate}</span>
                      <span className="mx-2">•</span>
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>{worker.completedJobs} jobs completed</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex flex-col space-y-2">
                    <Button className="bg-blue-gradient text-white flex items-center gap-2">
                      <Phone size={16} /> Contact
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <MessageSquare size={16} /> Message
                    </Button>
                  </div>
                </div>
                
                <div className="border-t mt-6 pt-4">
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setActiveTab('overview')}
                      className={`px-3 py-2 font-medium text-sm rounded-md transition-colors ${
                        activeTab === 'overview' 
                          ? 'bg-skillconnect-blue text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Overview
                    </button>
                    <button 
                      onClick={() => setActiveTab('reviews')}
                      className={`px-3 py-2 font-medium text-sm rounded-md transition-colors ${
                        activeTab === 'reviews' 
                          ? 'bg-skillconnect-blue text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-skillconnect-blue mr-3" />
                    <span>{worker.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-skillconnect-blue mr-3" />
                    <span>{worker.email}</span>
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {worker.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {activeTab === 'overview' && (
                <>
                  {/* About */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">About</h2>
                    <p className="text-gray-700">{worker.bio}</p>
                  </div>
                  
                  {/* Work Experience */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Work Experience</h2>
                    <div className="space-y-4">
                      {worker.experience.map(exp => (
                        <div key={exp.id} className="border-l-2 border-skillconnect-blue pl-4">
                          <h3 className="font-medium">{exp.title}</h3>
                          <p className="text-gray-600">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.period}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
              
              {activeTab === 'reviews' && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Customer Reviews</h2>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 font-medium">{worker.rating}</span>
                      <span className="ml-1 text-gray-500">({worker.reviews.length} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {worker.reviews.map(review => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{review.author}</h4>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-gray-700">{review.comment}</p>
                        <Button variant="ghost" size="sm" className="mt-2 text-gray-600 hover:text-skillconnect-blue flex items-center gap-1">
                          <ThumbsUp size={14} /> Helpful
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkerProfile;
