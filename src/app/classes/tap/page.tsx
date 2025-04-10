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
          src="/media/32585724_1697582697028011_7151455258936344576_n.jpg"
          alt="Tap dance class at Woking Dance Space"
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
              Tap Dance Classes
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Rhythmic and percussive dance for adults of all abilities
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

export default function TapPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">About Our Tap Classes</h2>
                <p className="mb-4">
                  Tap dance is a percussive dance form where rhythm and musicality are created through the striking of metal taps attached to the dancer's shoes. Our adult tap classes offer a perfect blend of physical activity, rhythmic challenge, and creative expression.
                </p>
                <p className="mb-4">
                  Each class includes warm-up exercises, technical drills to build precision and clarity, and choreographic combinations. As you progress, you'll develop speed, rhythm, coordination, and an understanding of tap dance as both dance and percussion.
                </p>
                <p>
                  Our experienced tap instructors create a supportive, enjoyable environment where adults of all backgrounds can discover the joy of making music with their feet. We emphasize solid technique while encouraging each dancer's personal style and expression.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/59519541_2202552013197741_429893713427169280_n.jpg" 
                  alt="Tap dancers in class" 
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
                We offer tap classes at multiple levels to accommodate dancers with different experience and rhythmic abilities.
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
                  Perfect for those new to tap dance. Focuses on basic steps, rhythm development, and coordination in a supportive, fun environment.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Thursday 6:00pm - 7:15pm<br />
                  Saturday 11:30am - 12:45pm
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
                  For dancers with 1-2 years of tap experience. Focuses on developing rhythmic complexity, speed, clarity, and longer combinations.
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
                  For experienced tappers. Explores complex rhythms, improvisation, musicality, and challenging choreography with emphasis on personal style.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Tuesday 7:30pm - 9:00pm<br />
                  Sunday 3:00pm - 4:30pm
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

      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Ready to discover the joy of tap dance?</h2>
              <p className="text-xl mt-4 text-purple-100">
                Join our rhythmic community and find your beat.
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