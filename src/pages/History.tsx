
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface Job {
  id: number;
  title: string;
  workerName: string;
  workerId: number;
  workerPhoto: string;
  date: string;
  location: string;
  status: 'completed' | 'pending' | 'cancelled';
  price?: number;
  rated?: boolean;
  rating?: number;
}

const jobsData: Job[] = [
  {
    id: 1,
    title: "Leaking Sink Repair",
    workerName: "John Smith",
    workerId: 1,
    workerPhoto: "https://randomuser.me/api/portraits/men/72.jpg",
    date: "June 15, 2023",
    location: "123 Main St, New York",
    status: "completed",
    price: 120,
    rated: true,
    rating: 5
  },
  {
    id: 2,
    title: "Electrical Panel Installation",
    workerName: "Maria Rodriguez",
    workerId: 2,
    workerPhoto: "https://randomuser.me/api/portraits/women/63.jpg",
    date: "May 28, 2023",
    location: "456 Oak Ave, New York",
    status: "completed",
    price: 350,
    rated: true,
    rating: 4
  },
  {
    id: 3,
    title: "Kitchen Cabinet Repair",
    workerName: "David Johnson",
    workerId: 3,
    workerPhoto: "https://randomuser.me/api/portraits/men/70.jpg",
    date: "Today at 3:00 PM",
    location: "789 Pine Rd, New York",
    status: "pending"
  },
  {
    id: 4,
    title: "Bathroom Wall Painting",
    workerName: "Sarah Williams",
    workerId: 4,
    workerPhoto: "https://randomuser.me/api/portraits/women/73.jpg",
    date: "Cancelled on June 5, 2023",
    location: "321 Cedar St, New York",
    status: "cancelled"
  }
];

const History = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'pending' | 'cancelled'>('all');
  
  // Filter jobs based on the active tab
  const filteredJobs = activeTab === 'all' 
    ? jobsData 
    : jobsData.filter(job => job.status === activeTab);
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-skillconnect-black mb-8">Job History</h1>
          
          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md mb-6 p-1 flex">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 py-2 rounded-lg text-center font-medium transition-colors ${
                activeTab === 'all' 
                  ? 'bg-skillconnect-blue text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 py-2 rounded-lg text-center font-medium transition-colors ${
                activeTab === 'completed' 
                  ? 'bg-skillconnect-blue text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`flex-1 py-2 rounded-lg text-center font-medium transition-colors ${
                activeTab === 'pending' 
                  ? 'bg-skillconnect-blue text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab('cancelled')}
              className={`flex-1 py-2 rounded-lg text-center font-medium transition-colors ${
                activeTab === 'cancelled' 
                  ? 'bg-skillconnect-blue text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Cancelled
            </button>
          </div>
          
          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                          <div className="flex items-center mb-4">
                            <img 
                              src={job.workerPhoto} 
                              alt={job.workerName} 
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            <Link to={`/workers/${job.workerId}`} className="text-skillconnect-blue hover:underline">
                              {job.workerName}
                            </Link>
                          </div>
                        </div>
                        
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                          {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{job.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      
                      {job.status === 'completed' && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-gray-600">Total:</span>
                              <span className="ml-2 font-semibold">${job.price}</span>
                            </div>
                            
                            {job.rated ? (
                              <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Your Rating:</span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <svg 
                                      key={i} 
                                      className={`w-4 h-4 ${i < (job.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    >
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Button size="sm" variant="outline">
                                Leave a Review
                              </Button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Actions Panel */}
                    <div className="bg-gray-50 p-6 md:w-1/3 flex flex-col justify-center space-y-3 border-t md:border-t-0 md:border-l border-gray-100">
                      {job.status === 'pending' && (
                        <>
                          <Button variant="outline" className="w-full">
                            Reschedule
                          </Button>
                          <Button variant="destructive" className="w-full">
                            Cancel Job
                          </Button>
                        </>
                      )}
                      {job.status === 'completed' && (
                        <>
                          <Button variant="outline" className="w-full">
                            View Receipt
                          </Button>
                          <Button className="bg-blue-gradient text-white w-full">
                            Book Again
                          </Button>
                        </>
                      )}
                      {job.status === 'cancelled' && (
                        <Button className="bg-blue-gradient text-white w-full">
                          Book Again
                        </Button>
                      )}
                      <Link to={`/workers/${job.workerId}`} className="text-skillconnect-blue hover:underline text-center text-sm mt-2">
                        View Worker's Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="bg-gray-100 rounded-full p-4 inline-flex mb-4">
                  <Clock className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-6">You don't have any {activeTab !== 'all' ? activeTab : ''} jobs yet.</p>
                <Link to="/workers">
                  <Button className="bg-blue-gradient text-white">Find Workers</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
