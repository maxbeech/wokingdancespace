'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Page header component with parallax effect
const PageHeader = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="relative h-[50vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[60vh]">
        <Image
          src="/media/32599586_1697584553694492_8655924415155929088_n.jpg"
          alt="Pilates and fitness class at Woking Dance Space"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 mix-blend-multiply" />
      </motion.div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Pilates & Fitness Classes
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Strength, flexibility and conditioning for dancers and non-dancers alike
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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

export default function FitnessPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">About Our Pilates & Fitness Classes</h2>
                <p className="mb-4">
                  Our Pilates and fitness classes provide targeted conditioning to enhance your dance practice or simply promote overall physical wellbeing. These classes focus on core strength, flexibility, proper alignment, and muscle balance—all essential components for healthy movement.
                </p>
                <p className="mb-4">
                  Each class begins with a careful warm-up, followed by precise exercises designed to build strength, improve posture, and increase body awareness. Special attention is paid to the core muscles, proper breathing, and efficient movement patterns.
                </p>
                <p>
                  Our experienced instructors provide modifications for different fitness levels, ensuring that each participant can work safely and effectively. Whether you're a dancer looking to supplement your training or someone seeking a mindful approach to fitness, these classes will help you develop a stronger, more balanced body.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/32579366_1697585960361018_1645710439943766016_n.jpg" 
                  alt="Pilates class participants" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Our Fitness Offerings</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various fitness classes designed to complement dance training or provide balanced exercise for anyone seeking mindful movement.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-lg p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Pilates for Dancers</h3>
                <p className="text-gray-600 mb-4">
                  This class draws on the principles of Pilates with specific adaptations for dancers. Focuses on core strength, spinal mobility, and balanced muscle development to enhance dance technique and prevent injury.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Tuesday 6:00pm - 7:00pm<br />
                  Saturday 9:00am - 10:00am
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-lg p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Stretch & Strengthen</h3>
                <p className="text-gray-600 mb-4">
                  A balanced class that combines flexibility work with targeted strength exercises. Great for improving range of motion, muscle tone, and overall fitness in a dancer-friendly approach.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Friday 12:15pm - 1:15pm<br />
                  Sunday 10:00am - 11:00am
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/classes/schedule" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
            >
              View Full Schedule
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <FadeIn delay={0.2}>
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Benefits of Our Fitness Classes</h2>
                  <p className="mb-4">
                    Pilates and conditioning work offer numerous benefits that complement dance training and support overall health.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 font-display">For Dancers</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Enhanced technical execution</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Injury prevention</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Balanced muscle development</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Improved alignment and posture</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 font-display">For Everyone</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Increased core strength</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Better body awareness</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Stress reduction</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Overall improved fitness</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 font-display">Who Should Take These Classes?</h3>
                  <p className="mb-4">
                    Our Pilates and fitness classes are appropriate for adults of all fitness levels. They're particularly valuable for:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Dancers looking to enhance their technique and prevent injury</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Adults seeking mindful exercise that improves strength and flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Anyone with posture concerns or seeking improved body alignment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Those recovering from injury (with medical clearance)</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-4">
              <FadeIn delay={0.4} direction="left">
                <div className="bg-gray-50 rounded-lg p-8 shadow-md sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 font-display">What to Bring</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Comfortable clothing</span>
                        <p className="text-sm text-gray-500 mt-1">Form-fitting but stretchy clothes that allow movement and instructor observation.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Exercise mat</span>
                        <p className="text-sm text-gray-500 mt-1">Bring your own mat if possible (we have extras if needed).</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Water bottle</span>
                        <p className="text-sm text-gray-500 mt-1">Stay hydrated during your workout.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Small towel</span>
                        <p className="text-sm text-gray-500 mt-1">Optional but recommended.</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 font-display">Pricing</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span>Single class</span>
                        <span className="font-medium">£10</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>5-class card</span>
                        <span className="font-medium">£45</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>10-class card</span>
                        <span className="font-medium">£85</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly unlimited</span>
                        <span className="font-medium">£75</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link 
                        href="/classes/pricing" 
                        className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
                      >
                        View all pricing options
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold font-display">Ready to strengthen your core and improve your flexibility?</h2>
              <p className="text-xl mt-4 text-purple-100">
                Join our mindful fitness classes and support your dance practice or overall wellness.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link 
                  href="/classes/schedule" 
                  className="px-6 py-3 bg-white text-purple-700 font-medium rounded-md hover:bg-purple-100 transition-colors duration-300 text-center"
                >
                  View Schedule
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