'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';

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
          src="/media/58986724_2202551979864411_7664688461940523008_n.jpg" 
          alt="Contact Woking Dance Space" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Contact Us
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              Get in touch with us for any questions, feedback, or to learn more about our adult dance classes in Surrey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
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
            {/* Contact form */}
            <FadeIn delay={0.2} direction="right">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 font-display">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We've received your inquiry and will get back to you shortly.</p>
                  </div>
                ) : error ? (
                  <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">
                    <p className="font-medium">There was a problem sending your message.</p>
                    <p>{error}</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject*</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="Class Inquiry">Class Inquiry</option>
                        <option value="Registration">Registration</option>
                        <option value="Studio Hire">Studio Hire</option>
                        <option value="Show Information">Show Information</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-purple-600 text-white py-3 px-6 rounded-md font-medium transition-colors ${
                      isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 'hover:bg-purple-700'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </FadeIn>
            
            {/* Contact information */}
            <FadeIn delay={0.4} direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 font-display">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    We'd love to hear from you! Whether you have questions about our classes, want to register, or have other inquiries, don't hesitate to get in touch.
                  </p>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <FaMapMarkerAlt className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-900">Studio Address</h3>
                        <p className="text-gray-600">
                          Woking Dance Space<br />
                          Woking Leisure Centre<br />
                          Kingfield Road<br />
                          Woking<br />
                          GU22 9BA
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaPhoneAlt className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-900">Phone</h3>
                        <p className="text-gray-600">
                          07908 465665
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaEnvelope className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-900">Email</h3>
                        <p className="text-gray-600">
                          info@wokingdancespace.org.uk
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 font-display">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/wokingdancespace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-100 hover:bg-purple-200 text-purple-600 p-3 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/wokingdancespace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-100 hover:bg-purple-200 text-purple-600 p-3 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.8021499306264!2d-0.5653388233742927!3d51.311155322048014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875df9c6a9a8e3b%3A0x447bec0c792cbf74!2sWoking%20Leisure%20Centre!5e0!3m2!1sen!2suk!4v1709230193662!5m2!1sen!2suk" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    title="Map to Woking Dance Space"
                  ></iframe>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Class Registration</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ready to join a dance class? Check out our schedule and registration information.
              </p>
              <a 
                href="/classes/register" 
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
              >
                Register for Classes
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 