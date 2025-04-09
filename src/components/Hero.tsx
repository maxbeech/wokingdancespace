'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Hero slider media paths
const heroMedia = [
  '/media/home_hero_slider/naive_peace (540p).mov',
  '/media/home_hero_slider/proud_mary (540p) 2.mov',
  '/media/home_hero_slider/proud_mary (540p) 1.mov',
  '/media/home_hero_slider/ching-a-ling (540p).mov',
];

const Hero = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [isClient]);

  // Ensure video plays when it's active
  useEffect(() => {
    if (isClient && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(err => console.error('Video play error:', err));
    }
  }, [currentMediaIndex, isClient]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Media slider */}
      <div className="absolute inset-0">
        {isClient && (
          <>
            {/* Current media with fade effect */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMediaIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="absolute w-full h-full object-cover"
                  >
                    <source src={heroMedia[currentMediaIndex]} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Dark overlay with pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 mix-blend-multiply" />
            <div className="dark-pattern-overlay" />
          </>
        )}
      </div>

      {/* Hero content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display">
              Express Yourself Through Dance
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Woking Dance Space provides a supportive community for adults of all abilities to explore dance, develop skills, and discover creative expression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/classes/schedule" 
                className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors duration-300 text-center"
              >
                View Class Schedule
              </Link>
              <Link 
                href="/classes/register" 
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/30 transition-colors duration-300 text-center"
              >
                Join a Class
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">All Abilities Welcome</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Adult-Only Classes</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Established 1982</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 