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
          src="/media/316240983_5610032369116338_374439241220607926_n.jpg"
          alt="Woking Dance Space Winter Spectacular"
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
              Winter Spectacular
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Our magical winter show celebrating the festive season through dance
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

export default function WinterSpectacularPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">About the Winter Spectacular</h2>
                <p className="mb-4">
                  Each December, Woking Dance Space transforms the stage into a winter wonderland with our annual Winter Spectacular. This enchanting production showcases the creativity and talent of our dance community through festive-themed performances across multiple dance styles.
                </p>
                <p className="mb-4">
                  The Winter Spectacular is a beloved tradition at Woking Dance Space, bringing together dancers from all our classes to celebrate the holiday season. The production is held at the Rhoda McGaw Theatre in Woking, featuring innovative choreography, stunning costumes, and magical stage effects.
                </p>
                <p>
                  More than just a dance show, our Winter Spectacular creates a special shared experience for dancers and audience members alike, embodying the joy and community spirit of the holiday season.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/59488127_2202552029864406_2430191185835327488_n.jpg" 
                  alt="Winter Spectacular performance" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">2023 Winter Spectacular</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most recent Winter Spectacular took place on December 9-10, 2023 at the Rhoda McGaw Theatre in Woking.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-60">
                  <Image 
                    src="/media/32554999_1697576077028673_1437418227033440256_n.jpg" 
                    alt="Contemporary winter dance" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Frost & Snow</h3>
                  <p className="text-gray-600 mb-4">
                    Our contemporary dancers presented ethereal pieces inspired by the beauty and stillness of winter landscapes.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-60">
                  <Image 
                    src="/media/32690302_1697584233694524_684998595962732544_n.jpg" 
                    alt="Winter celebration dance" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Festive Celebrations</h3>
                  <p className="text-gray-600 mb-4">
                    Our jazz and tap dancers brought the joy of holiday celebrations to life with upbeat and spirited performances.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-60">
                  <Image 
                    src="/media/32579366_1697585960361018_1645710439943766016_n.jpg" 
                    alt="Ballet winter piece" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Winter Tales</h3>
                  <p className="text-gray-600 mb-4">
                    Our ballet dancers presented elegant interpretations of beloved winter stories and festive classics.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/gallery" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
            >
              View Photo Gallery
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/59285352_2202551896531086_595400389847678976_n.jpg" 
                  alt="Dancers in winter costume" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Upcoming 2024 Winter Spectacular</h2>
                <p className="mb-4">
                  Planning is already underway for our 2024 Winter Spectacular, which will take place on December 7-8, 2024 at the Rhoda McGaw Theatre in Woking.
                </p>
                <p className="mb-4">
                  This year's production will feature a magical journey through winter traditions from around the world, with each class creating a unique interpretation through their individual dance styles.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-bold font-display">Performance Details</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      <span><strong>Dates:</strong> December 7-8, 2024</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span><strong>Venue:</strong> Rhoda McGaw Theatre, Woking</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>Shows:</strong> Saturday 2:30pm & 7:30pm, Sunday 2:30pm</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <p className="font-medium">
                    Rehearsals will begin in October 2024. Tickets will go on sale in November 2024. Stay tuned for more information about this magical winter production.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Join Our Winter Spectacular</h2>
              <p className="text-xl text-gray-700 mb-8">
                All Woking Dance Space students are invited to participate in our Winter Spectacular. Begin your dance journey with us today to be part of this magical holiday tradition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/classes/register" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                >
                  Join a Class
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-purple-600 text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 transition-all duration-300"
                >
                  Contact Us for Details
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 