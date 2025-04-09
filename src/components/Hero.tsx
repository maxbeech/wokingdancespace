'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Hero image and video paths
const heroMedia = [
  '/media/home_hero_slider/AQPQTrq1z3LZWWgBANC4kMa4SW96K9v_VxRkfzuASV56Ad4-xjSb3lvms6SH8PnPgSOF7q4FcvcnHjLAMXIehyXz.mp4',
  '/media/home_hero_slider/AQMpSsY0t35ktR-h45Yayxc82ntkfZMWmASri3D4jTyAy4SpEBOuG0wKPQbBcMt6NP1NUR7Lp8WCq8lVPoJpu5QK.mp4',
  '/media/home_hero_slider/walkthrough.mp4',
  '/media/home_hero_slider/AQOVbgVtQefpiMzL3lvJ9PxKpJnV1dEnwxjTJWm5MnowJtG6C-9Mf83JeQ7giU28z9CA_n_i7h4jFUq2ZkEMQ_S6.mp4',
];

const Hero = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isClient]);

  // Ensure video plays when it's active
  useEffect(() => {
    if (isClient && videoRef.current && heroMedia[currentMediaIndex].endsWith('.mov')) {
      videoRef.current.play().catch(err => console.error('Video play error:', err));
    }
  }, [currentMediaIndex, isClient]);

  const isVideo = (src: string) => src.endsWith('.mov') || src.endsWith('.mp4');

  return (
    <section className="relative h-screen overflow-hidden">
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
                {isVideo(heroMedia[currentMediaIndex]) ? (
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="absolute w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    >
                      <source src={heroMedia[currentMediaIndex]} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  </div>
                ) : (
                  <Image
                    src={heroMedia[currentMediaIndex]}
                    alt="Bisley Base childcare"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </motion.div>
            </AnimatePresence>
            
            {/* Dark overlay with pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 mix-blend-multiply" />
            <div 
              className="absolute inset-0 opacity-20 mix-blend-overlay" 
              style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.2" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
                backgroundSize: '20px 20px'
              }}
            />
          </>
        )}
      </div>

      {/* Hero content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nurturing Little Minds at Bisley Base
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A nurturing preschool and wraparound care provider offering exceptional childcare in a stimulating environment
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/parents/admissions" 
                className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors duration-300 text-center"
              >
                Enroll Now
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/30 transition-colors duration-300 text-center"
              >
                Book a Tour
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Ofsted Outstanding</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Ages 2-11 Years</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Established 2001</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 