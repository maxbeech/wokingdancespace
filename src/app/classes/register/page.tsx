'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';

// FadeIn component with proper TypeScript types
const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: string;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: direction === "up" ? 20 : direction === "down" ? -20 : 0, x: direction === "left" ? 20 : direction === "right" ? -20 : 0, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const PageHeader = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90 z-10"></div>
      <div className="absolute inset-0">
        <Image 
          src="/media/463606265_8462423727210507_5355783135448814171_n.jpg" 
          alt="Register for classes at Woking Dance Space" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Register for Classes
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              Join our dance community and start your dance journey with us today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define mock class data for demonstration
const popularClasses = [
  {
    id: 1,
    name: "Adult Ballet - Beginners",
    day: "Monday",
    time: "7:00 PM - 8:30 PM",
    instructor: "Sarah Johnson",
    price: "£12 per class",
    description: "A gentle introduction to ballet for adults with little or no prior experience. Focus on basic positions, alignment, and simple combinations.",
    image: "/media/32542328_1697574203695527_3784862633073573888_n.jpg",
  },
  {
    id: 2,
    name: "Contemporary Dance - Mixed Level",
    day: "Wednesday",
    time: "6:30 PM - 8:00 PM",
    instructor: "Michael Chen",
    price: "£12 per class",
    description: "Explore fluid movement, floor work, and creative expression in this contemporary dance class suitable for dancers with some prior experience.",
    image: "/media/32582015_1697582060361408_6135726739319422976_n.jpg",
  },
  {
    id: 3,
    name: "Jazz Dance - Intermediate",
    day: "Thursday",
    time: "7:30 PM - 9:00 PM",
    instructor: "Emma Williams",
    price: "£12 per class",
    description: "A dynamic jazz class focusing on technique, style, and choreography for dancers with previous jazz or dance experience.",
    image: "/media/32880565_1697574030362211_2024745422689402880_n.jpg",
  },
];

export default function RegisterPage() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    danceExperience: '',
    className: '',
    message: '',
    howHeard: '',
    agreeTerms: false
  });
  
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          danceExperience: '',
          className: '',
          message: '',
          howHeard: '',
          agreeTerms: false
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <FadeIn delay={0.2} direction="right">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 font-display">Class Registration Form</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                    <p className="font-medium">Thank you for registering!</p>
                    <p>We've received your registration and will contact you shortly with confirmation and payment details.</p>
                  </div>
                ) : error ? (
                  <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">
                    <p className="font-medium">There was a problem with your registration.</p>
                    <p>{error}</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name*</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name*</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="className" className="block text-gray-700 font-medium mb-2">Class of Interest*</label>
                    <select
                      id="className"
                      name="className"
                      value={formData.className}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a class</option>
                      <option value="Adult Ballet - Beginners">Adult Ballet - Beginners</option>
                      <option value="Adult Ballet - Improvers">Adult Ballet - Improvers</option>
                      <option value="Contemporary Dance - Mixed Level">Contemporary Dance - Mixed Level</option>
                      <option value="Jazz Dance - Intermediate">Jazz Dance - Intermediate</option>
                      <option value="Tap Dance - Beginners">Tap Dance - Beginners</option>
                      <option value="Tap Dance - Intermediate">Tap Dance - Intermediate</option>
                      <option value="Creative Dance">Creative Dance</option>
                      <option value="Pilates">Pilates</option>
                      <option value="Multiple Classes">Multiple Classes</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="danceExperience" className="block text-gray-700 font-medium mb-2">Dance Experience*</label>
                    <select
                      id="danceExperience"
                      name="danceExperience"
                      value={formData.danceExperience}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select your experience level</option>
                      <option value="Beginner - No prior experience">Beginner - No prior experience</option>
                      <option value="Beginner - Some experience">Beginner - Some experience</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="howHeard" className="block text-gray-700 font-medium mb-2">How did you hear about us?</label>
                    <select
                      id="howHeard"
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="Friend or Family">Friend or Family</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Local Advertisement">Local Advertisement</option>
                      <option value="Attended a Show">Attended a Show</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please let us know if you have any specific requirements, injuries, or questions."
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                        className="mt-1 mr-2"
                      />
                      <span className="text-gray-700 text-sm">
                        I agree to the <Link href="/terms" className="text-purple-600 hover:text-purple-800">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-purple-600 hover:text-purple-800">Privacy Policy</Link>. I understand that by submitting this form, I am consenting to be contacted regarding classes.
                      </span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-purple-600 text-white py-3 px-6 rounded-md font-medium transition-colors ${
                      isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 'hover:bg-purple-700'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Register for Class'}
                  </button>
                </form>
              </div>
            </FadeIn>
            
            {/* Registration Info */}
            <FadeIn delay={0.4} direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 font-display">Registration Information</h2>
                  <p className="text-gray-600 mb-8">
                    Interested in joining our dance classes? Fill out the registration form, and we'll contact you with payment information and further details about your chosen class.
                  </p>
                  
                  <div className="bg-purple-50 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-bold mb-4 font-display">Registration Process</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                      <li>Complete and submit the registration form</li>
                      <li>Receive confirmation email with payment instructions</li>
                      <li>Make payment to secure your place</li>
                      <li>Attend your first class!</li>
                    </ol>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 font-display">Popular Classes</h3>
                  <div className="space-y-4">
                    {popularClasses.map(classItem => (
                      <div key={classItem.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                        <div className="grid grid-cols-3">
                          <div className="relative h-32">
                            <Image 
                              src={classItem.image} 
                              alt={classItem.name} 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="col-span-2 p-4">
                            <h4 className="font-bold text-gray-900">{classItem.name}</h4>
                            <div className="text-sm text-gray-600 mt-1 space-y-1">
                              <div className="flex items-center">
                                <FaCalendarAlt className="mr-2 text-purple-600 text-xs" />
                                <span>{classItem.day}</span>
                              </div>
                              <div className="flex items-center">
                                <FaClock className="mr-2 text-purple-600 text-xs" />
                                <span>{classItem.time}</span>
                              </div>
                              <div className="flex items-center">
                                <FaMoneyBillWave className="mr-2 text-purple-600 text-xs" />
                                <span>{classItem.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link 
                      href="/classes/schedule" 
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      View Full Class Schedule
                    </Link>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 font-display">Have Questions?</h3>
                  <p className="text-gray-700 mb-4">
                    Need help choosing the right class or have questions about registration? Contact us directly and we'll be happy to assist.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors font-medium"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to Dance?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Join our welcoming community of adult dancers and experience the joy of dance in a supportive environment.
              </p>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
              >
                Register Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 