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
          src="/media/316180614_5610031842449724_1004370439022595399_n.jpg"
          alt="Woking Dance Space Summer Showcase"
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
              Summer Showcase
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Our annual celebration of dance featuring performances from all our classes
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

export default function SummerShowcasePage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">About the Summer Showcase</h2>
                <p className="mb-4">
                  Each summer, Woking Dance Space presents its annual Summer Showcase, a vibrant celebration of dance featuring performances from students across all our classes. This event highlights the progress and achievements of our dancers, showcasing a diverse range of styles from ballet and contemporary to jazz, tap, and creative dance.
                </p>
                <p className="mb-4">
                  The Summer Showcase is held at the Rhoda McGaw Theatre in Woking, providing our dancers with the opportunity to experience performing on a professional stage. The production features choreography from our talented instructors, showcasing both technical skill and artistic expression.
                </p>
                <p>
                  This performance is not only a chance for our dancers to share their passion and hard work with friends and family but also a celebration of our community's collective creativity and dedication to dance.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/59635965_2202552183197724_1663965764643717120_n.jpg" 
                  alt="Summer Showcase performance" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">2023 Summer Showcase</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most recent Summer Showcase took place on July 15-16, 2023 at the Rhoda McGaw Theatre in Woking.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-60">
                  <Image 
                    src="/media/32675369_1697583180361296_1165318579814400000_n.jpg" 
                    alt="Jazz performance" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Jazz Showcase</h3>
                  <p className="text-gray-600 mb-4">
                    Our jazz classes delivered energetic and dynamic performances, showcasing a range of styles from classic to contemporary jazz.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-60">
                  <Image 
                    src="/media/32582015_1697582060361408_6135726739319422976_n.jpg" 
                    alt="Ballet performance" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Ballet Pieces</h3>
                  <p className="text-gray-600 mb-4">
                    Our ballet dancers presented elegant and graceful routines, demonstrating the technical and artistic skills developed throughout the year.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-60">
                  <Image 
                    src="/media/32585724_1697582697028011_7151455258936344576_n.jpg" 
                    alt="Tap performance" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Tap Numbers</h3>
                  <p className="text-gray-600 mb-4">
                    Our tap dancers impressed audiences with their rhythmic precision and showmanship in a variety of group and featured performances.
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
                  src="/media/59519541_2202552013197741_429893713427169280_n.jpg" 
                  alt="Dancers preparing backstage" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Upcoming 2024 Summer Showcase</h2>
                <p className="mb-4">
                  Planning is already underway for our 2024 Summer Showcase, which will take place on July 13-14, 2024 at the Rhoda McGaw Theatre in Woking.
                </p>
                <p className="mb-4">
                  All of our classes will be working on special choreography for the showcase starting in the spring term. This is a wonderful opportunity for our dancers to apply what they've learned in class to a performance piece and experience the excitement of dancing on stage.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-bold font-display">Performance Details</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      <span><strong>Dates:</strong> July 13-14, 2024</span>
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
                    Tickets will go on sale in June 2024. Check back here or sign up for our newsletter to be notified when tickets become available.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Participate in Our Showcase</h2>
              <p className="text-xl text-gray-700 mb-8">
                All Woking Dance Space students are invited to participate in our showcases. It's a wonderful opportunity to experience the joy of performance in a supportive environment.
              </p>
              <Link 
                href="/classes/register" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                Join a Class
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 