
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I found an excellent plumber through SkillConnect who fixed our leaky pipes in no time. The platform made it so easy to find someone reliable.",
    author: "Jennifer Adams",
    role: "Homeowner",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    id: 2,
    text: "As an electrician, this platform has helped me find consistent work in my area. The profile setup was simple, and I started getting jobs within days.",
    author: "Michael Barnes",
    role: "Electrician",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 3,
    text: "We needed a carpenter for some custom shelving, and the worker we found through SkillConnect exceeded all our expectations. Will definitely use again!",
    author: "Robert Chen",
    role: "Apartment Owner",
    rating: 4,
    photo: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">What Our Users Say</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Hear from workers and homeowners who have found success on our platform.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl card-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
