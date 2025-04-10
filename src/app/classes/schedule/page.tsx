'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation component for fade-in effects
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Class type interface
interface ClassType {
  name: string;
  style: string;
  level: string;
  time: string;
  duration: string;
  instructor: string;
  room: string;
  link: string;
}

export default function SchedulePage() {
  // Define class styles with colors
  const classStyles = {
    'Ballet': 'bg-pink-100 text-pink-800 border-pink-200',
    'Contemporary': 'bg-purple-100 text-purple-800 border-purple-200',
    'Jazz': 'bg-blue-100 text-blue-800 border-blue-200',
    'Tap': 'bg-amber-100 text-amber-800 border-amber-200',
    'Creative': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Fitness': 'bg-red-100 text-red-800 border-red-200'
  };
  
  // Define class schedule data
  const schedule: Record<string, ClassType[]> = {
    'Monday': [
      { name: 'Ballet Beginners', style: 'Ballet', level: 'Beginner', time: '18:30', duration: '60 min', instructor: 'Sarah Johnson', room: 'Studio 1', link: '/classes/ballet' },
      { name: 'Contemporary Intermediate', style: 'Contemporary', level: 'Intermediate', time: '19:45', duration: '75 min', instructor: 'Michael Chen', room: 'Studio 1', link: '/classes/contemporary' },
    ],
    'Tuesday': [
      { name: 'Pilates for Dancers', style: 'Fitness', level: 'All Levels', time: '18:00', duration: '60 min', instructor: 'Emma Wilson', room: 'Studio 2', link: '/classes/fitness' },
      { name: 'Jazz Open Level', style: 'Jazz', level: 'All Levels', time: '19:15', duration: '75 min', instructor: 'David Roberts', room: 'Studio 1', link: '/classes/jazz' },
      { name: 'Ballet Intermediate', style: 'Ballet', level: 'Intermediate', time: '20:00', duration: '75 min', instructor: 'Sarah Johnson', room: 'Studio 2', link: '/classes/ballet' },
    ],
    'Wednesday': [
      { name: 'Tap Beginners', style: 'Tap', level: 'Beginner', time: '18:30', duration: '60 min', instructor: 'James Miller', room: 'Studio 1', link: '/classes/tap' },
      { name: 'Contemporary Beginners', style: 'Contemporary', level: 'Beginner', time: '19:45', duration: '75 min', instructor: 'Michael Chen', room: 'Studio 1', link: '/classes/contemporary' },
    ],
    'Thursday': [
      { name: 'Ballet Advanced', style: 'Ballet', level: 'Advanced', time: '18:30', duration: '75 min', instructor: 'Sarah Johnson', room: 'Studio 1', link: '/classes/ballet' },
      { name: 'Creative Dance', style: 'Creative', level: 'All Levels', time: '19:00', duration: '90 min', instructor: 'Linda Thompson', room: 'Studio 2', link: '/classes/creative' },
      { name: 'Tap Intermediate', style: 'Tap', level: 'Intermediate', time: '20:00', duration: '60 min', instructor: 'James Miller', room: 'Studio 1', link: '/classes/tap' },
    ],
    'Friday': [
      { name: 'Stretch & Strengthen', style: 'Fitness', level: 'All Levels', time: '12:15', duration: '60 min', instructor: 'Emma Wilson', room: 'Studio 1', link: '/classes/fitness' },
      { name: 'Jazz Intermediate', style: 'Jazz', level: 'Intermediate', time: '18:30', duration: '75 min', instructor: 'David Roberts', room: 'Studio 1', link: '/classes/jazz' },
    ],
    'Saturday': [
      { name: 'Ballet Open Level', style: 'Ballet', level: 'All Levels', time: '10:00', duration: '90 min', instructor: 'Sarah Johnson', room: 'Studio 1', link: '/classes/ballet' },
      { name: 'Contemporary Advanced', style: 'Contemporary', level: 'Advanced', time: '11:45', duration: '90 min', instructor: 'Michael Chen', room: 'Studio 1', link: '/classes/contemporary' },
      { name: 'Tap Advanced', style: 'Tap', level: 'Advanced', time: '13:30', duration: '75 min', instructor: 'James Miller', room: 'Studio 2', link: '/classes/tap' },
    ],
    'Sunday': []
  };
  
  // State for filtering
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  
  // Filter options
  const days = Object.keys(schedule);
  const styles = ['Ballet', 'Contemporary', 'Jazz', 'Tap', 'Creative', 'Fitness'];
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
  
  // Filter classes
  const filteredSchedule = Object.entries(schedule).reduce<Record<string, ClassType[]>>(
    (filtered, [day, classes]) => {
      if (selectedDay && day !== selectedDay) {
        return filtered;
      }
      
      const filteredClasses = classes.filter(c => {
        const styleMatch = !selectedStyle || c.style === selectedStyle;
        const levelMatch = !selectedLevel || c.level === selectedLevel;
        return styleMatch && levelMatch;
      });
      
      if (filteredClasses.length > 0 || !selectedDay) {
        filtered[day] = filteredClasses;
      }
      
      return filtered;
    },
    {}
  );
  
  // Toggle filter selection
  const toggleDay = (day: string) => {
    setSelectedDay(prev => (prev === day ? null : day));
  };
  
  const toggleStyle = (style: string) => {
    setSelectedStyle(prev => (prev === style ? null : style));
  };
  
  const toggleLevel = (level: string) => {
    setSelectedLevel(prev => (prev === level ? null : level));
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSelectedDay(null);
    setSelectedStyle(null);
    setSelectedLevel(null);
  };

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-purple-700">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/media/pattern.svg"
            alt="Background pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
            >
              Class Schedule
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-purple-100 mb-8"
            >
              Find the perfect class for your schedule. We offer a variety of classes throughout the week to accommodate your busy lifestyle.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-bold mb-4">Filter Classes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">By Day:</h3>
                  <div className="flex flex-wrap gap-2">
                    {days.map(day => (
                      <button
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                          selectedDay === day
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">By Style:</h3>
                  <div className="flex flex-wrap gap-2">
                    {styles.map(style => (
                      <button
                        key={style}
                        onClick={() => toggleStyle(style)}
                        className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                          selectedStyle === style
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">By Level:</h3>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <button
                        key={level}
                        onClick={() => toggleLevel(level)}
                        className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                          selectedLevel === level
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                
                {(selectedDay || selectedStyle || selectedLevel) && (
                  <div className="pt-2">
                    <button
                      onClick={resetFilters}
                      className="text-sm text-purple-600 font-medium hover:text-purple-800 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
          
          <div className="space-y-8">
            {Object.entries(filteredSchedule).map(([day, classes], dayIndex) => (
              <FadeIn key={day} delay={dayIndex * 0.1}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-100 px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900">{day}</h2>
                  </div>
                  
                  {classes.length > 0 ? (
                    <div className="divide-y divide-gray-200">
                      {classes.map((classItem, idx) => (
                        <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center">
                          <div className="flex-grow md:flex md:items-center mb-4 md:mb-0">
                            <div className="md:w-1/4">
                              <div className={`inline-flex text-sm rounded-full px-2.5 py-0.5 ${classStyles[classItem.style as keyof typeof classStyles]}`}>
                                {classItem.style}
                              </div>
                              <p className="font-medium text-lg mt-1">{classItem.name}</p>
                              <p className="text-sm text-gray-500">{classItem.level}</p>
                            </div>
                            <div className="md:w-1/4 mt-2 md:mt-0">
                              <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 mr-1">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-gray-600">{classItem.time} ({classItem.duration})</span>
                              </div>
                              <div className="flex items-center mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 mr-1">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                <span className="text-sm text-gray-600">{classItem.instructor}</span>
                              </div>
                            </div>
                            <div className="md:w-1/4 mt-2 md:mt-0">
                              <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 mr-1">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                </svg>
                                <span className="text-sm text-gray-600">{classItem.room}</span>
                              </div>
                              <div className="flex items-center mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400 mr-1">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <span className="text-sm text-gray-600">12 spots left</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Link 
                              href={classItem.link} 
                              className="text-purple-600 hover:text-purple-800 font-medium text-sm"
                            >
                              Class Details
                            </Link>
                            <Link 
                              href="/classes/register" 
                              className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 transition-colors shadow-sm"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-gray-500">No classes scheduled for this day</div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">
                How to Join a Class
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Joining our classes is easy! Follow these simple steps to get started on your dance journey with us.
              </p>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <FadeIn delay={0.1}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">1. Choose a Class</h3>
                  <p className="text-gray-600">
                    Browse our schedule and select a class that fits your interests and schedule.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">2. Register</h3>
                  <p className="text-gray-600">
                    Book your spot online or contact us to register for your selected class.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">3. Attend Class</h3>
                  <p className="text-gray-600">
                    Arrive 10-15 minutes early to your first class to get settled and meet your instructor.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Ready to get started?</h2>
              <p className="text-xl mt-4 text-purple-100">
                Join one of our classes today and become part of our vibrant dance community.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-white text-purple-700 font-medium rounded-md hover:bg-purple-100 transition-colors duration-300 text-center"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/classes/register" 
                  className="px-6 py-3 bg-purple-800 text-white font-medium rounded-md hover:bg-purple-900 transition-colors duration-300 text-center"
                >
                  Register Now
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 