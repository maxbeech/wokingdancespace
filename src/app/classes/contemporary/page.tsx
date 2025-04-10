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
          src="/media/32554999_1697576077028673_1437418227033440256_n.jpg"
          alt="Contemporary dance class at Woking Dance Space"
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
              Contemporary Dance Classes
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Expressive movement for adults of all abilities
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

export default function ContemporaryPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">About Our Contemporary Classes</h2>
                <p className="mb-4">
                  Contemporary dance is a versatile and expressive form that draws from multiple dance techniques including ballet, jazz, and modern. Our adult contemporary classes provide a space to explore fluid movement, creative expression, and dynamic physicality.
                </p>
                <p className="mb-4">
                  Each class typically begins with a thorough warm-up focused on alignment, core strength, and mobility. This is followed by center work exploring movement concepts, technical elements, and improvisational tasks. Classes conclude with choreographic combinations that emphasize artistic expression.
                </p>
                <p>
                  Our experienced contemporary dance instructors create a supportive environment for exploration and growth. While technical elements are taught, equal emphasis is placed on developing your unique movement voice and artistic expression.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/59488127_2202552029864406_2430191185835327488_n.jpg" 
                  alt="Contemporary dancers in class" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Class Levels</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer contemporary classes at multiple levels to accommodate dancers with different experience and movement capabilities.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-lg p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Beginner</h3>
                <p className="text-gray-600 text-center mb-4">
                  Perfect for those new to contemporary dance. Focuses on basic movement principles, floorwork fundamentals, and developing body awareness in a supportive environment.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Friday 6:00pm - 7:15pm<br />
                  Saturday 2:00pm - 3:15pm
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-lg p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Intermediate</h3>
                <p className="text-gray-600 text-center mb-4">
                  For dancers with 1-2 years of contemporary or other dance experience. Includes more challenging floorwork, improvisation techniques, and longer movement sequences.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Monday 7:30pm - 9:00pm<br />
                  Wednesday 6:15pm - 7:45pm
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-lg p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Advanced</h3>
                <p className="text-gray-600 text-center mb-4">
                  Designed for experienced dancers with several years of training. Features complex movement patterns, advanced floorwork, partner work, and challenging choreographic material.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Thursday 7:30pm - 9:00pm<br />
                  Sunday 11:00am - 12:30pm
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
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Benefits of Contemporary Dance</h2>
                  <p className="mb-4">
                    Contemporary dance offers numerous physical and emotional benefits, making it an excellent form of exercise and artistic expression for adults.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 font-display">Physical Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Increased body awareness and control</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Enhanced flexibility and strength</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Improved coordination and balance</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Full-body conditioning and stamina</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 font-display">Mental & Emotional Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Emotional expression and release</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Enhanced creativity and imagination</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Stress reduction and mindfulness</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Increased confidence in movement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 font-display">What to Expect in Class</h3>
                  <p className="mb-4">
                    Our contemporary classes blend technical training with creative exploration. You'll learn to move efficiently through space, connect with the floor, and express yourself through movement. Each class builds sequentially, allowing you to develop both technical skills and artistic confidence.
                  </p>
                  <p>
                    Contemporary dance encourages personal interpretation and authentic movement, making it accessible to dancers of varying backgrounds. Our instructors create an inclusive, non-competitive atmosphere where everyone can grow at their own pace.
                  </p>
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
                        <p className="text-sm text-gray-500 mt-1">Form-fitting but stretchy clothes that allow freedom of movement.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Footwear</span>
                        <p className="text-sm text-gray-500 mt-1">Bare feet, socks, or foot thongs depending on personal preference.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Water bottle</span>
                        <p className="text-sm text-gray-500 mt-1">Stay hydrated during this physically demanding activity.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Small towel</span>
                        <p className="text-sm text-gray-500 mt-1">Contemporary dance can be quite physical!</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Open mind</span>
                        <p className="text-sm text-gray-500 mt-1">Contemporary dance encourages exploration and self-expression.</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 font-display">Pricing</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span>Single class</span>
                        <span className="font-medium">£12</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>5-class card</span>
                        <span className="font-medium">£55</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>10-class card</span>
                        <span className="font-medium">£100</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly unlimited</span>
                        <span className="font-medium">£80</span>
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
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Meet Our Contemporary Dance Instructors</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn from our experienced and passionate teachers who bring diverse contemporary techniques and approaches.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src="/media/316240983_5610032369116338_374439241220607926_n.jpg"
                    alt="Emma Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Emma Chen</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">Contemporary Dance Instructor</p>
                  <p className="text-gray-600 mb-4">
                    Emma brings 15 years of contemporary dance experience, with training in Limon, Graham, and Release techniques. Her classes blend technical precision with creative exploration.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src="/media/316171610_5610032145783027_4215840854848055820_n.jpg"
                    alt="Daniel Thomas"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Daniel Thomas</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">Contemporary Dance Instructor</p>
                  <p className="text-gray-600 mb-4">
                    Daniel specializes in floorwork and improvisation, drawing from his background in capoeira and contemporary dance. His energetic classes focus on dynamic movement and physical awareness.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src="/media/316180614_5610031842449724_1004370439022595399_n.jpg"
                    alt="Sofia Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Sofia Rodriguez</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">Contemporary & Improvisation Instructor</p>
                  <p className="text-gray-600 mb-4">
                    Sofia's approach blends contemporary technique with somatic practices. Her classes emphasize body-mind connection and authentic movement exploration.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">FAQ About Contemporary Dance Classes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">Do I need previous dance experience?</h3>
                  <p className="text-gray-600">
                    Not at all! Our beginner classes are specifically designed for adults with no prior experience. We break down movements carefully and foster a supportive environment where everyone can learn at their own pace.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">What should I wear to contemporary class?</h3>
                  <p className="text-gray-600">
                    Comfortable clothing that allows a full range of motion is best. Many dancers choose to wear leggings or sweatpants with a fitted top. Contemporary dance is typically performed barefoot or in socks, though some dancers prefer foot thongs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">Is contemporary dance physically demanding?</h3>
                  <p className="text-gray-600">
                    Contemporary dance can be quite physical, but our classes are designed to accommodate different fitness levels. You'll build stamina gradually, and our instructors offer modifications for all movements to ensure everyone can participate safely.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">Will we perform in shows?</h3>
                  <p className="text-gray-600">
                    Performance opportunities are entirely optional. Many of our students enjoy taking classes solely for the physical benefits and creative expression, while others participate in our biannual performances.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Ready to explore contemporary dance?</h2>
              <p className="text-xl mt-4 text-purple-100">
                Join our supportive community and discover the joy of expressive movement.
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