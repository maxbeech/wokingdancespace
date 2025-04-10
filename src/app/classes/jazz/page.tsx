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
          src="/media/32675369_1697583180361296_1165318579814400000_n.jpg"
          alt="Jazz dance class at Woking Dance Space"
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
              Jazz Dance Classes
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Energetic and rhythmic dance for adults of all abilities
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

export default function JazzPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">About Our Jazz Classes</h2>
                <p className="mb-4">
                  Jazz dance is a vibrant, energetic style characterized by syncopated rhythms, improvisation, and dynamic movement. Our adult jazz classes combine technical training with expressive choreography to create an engaging and challenging dance experience.
                </p>
                <p className="mb-4">
                  Classes begin with a thorough warm-up focusing on isolations, stretching, and core strengthening. This is followed by technique work across the floor exploring turns, jumps, and movement combinations. Each class culminates in choreography that brings together technique with artistic expression.
                </p>
                <p>
                  Our experienced jazz dance instructors emphasize rhythm, musicality, and performance quality. Whether you're a beginner or more experienced dancer, you'll develop coordination, strength, and confidence while experiencing the joy of this distinctly American dance form.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/32746459_1697584127027868_4542205550795948032_n.jpg" 
                  alt="Jazz dancers in class" 
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
                We offer jazz classes at multiple levels to accommodate dancers with different experience and technical abilities.
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
                  Perfect for those new to jazz dance. Focuses on basic rhythm, isolations, and simple combinations to build coordination and confidence in a supportive environment.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Wednesday 6:00pm - 7:15pm<br />
                  Saturday 1:30pm - 2:45pm
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
                  For dancers with 1-2 years of jazz or other dance experience. Includes more complex rhythms, turns, jumps, and combinations to develop technical skills and performance quality.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Friday 7:30pm - 9:00pm<br />
                  Tuesday 6:15pm - 7:45pm
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
                  Designed for experienced dancers with several years of training. Features challenging technical combinations, advanced turns and jumps, and dynamic choreography with emphasis on performance quality.
                </p>
                <div className="text-center text-purple-600 font-medium">
                  Thursday 7:30pm - 9:00pm<br />
                  Sunday 1:00pm - 2:30pm
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
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Benefits of Jazz Dance</h2>
                  <p className="mb-4">
                    Jazz dance offers numerous physical and artistic benefits, making it an excellent form of exercise and creative expression for adults.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 font-display">Physical Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Improved cardiovascular fitness</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Enhanced coordination and agility</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Increased strength and flexibility</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Better balance and body control</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 font-display">Mental & Artistic Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Enhanced musicality and rhythm</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Boosted self-confidence</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Stress relief and improved mood</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                          <span>Creative expression and performance skills</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 font-display">What to Expect in Class</h3>
                  <p className="mb-4">
                    Our jazz classes are high-energy and dynamic, combining technical exercises with expressive choreography. You'll develop strength, flexibility, rhythm, and musicality while experiencing the joy of this versatile dance style.
                  </p>
                  <p>
                    Jazz dance draws from various influences including traditional jazz, Broadway, funk, and contemporary styles. Our instructors bring their unique expertise while maintaining the core principles of this diverse dance form, ensuring a well-rounded dance education.
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
                        <p className="text-sm text-gray-500 mt-1">Form-fitting, stretchy clothes that allow movement without restriction.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Jazz shoes</span>
                        <p className="text-sm text-gray-500 mt-1">Split-sole jazz shoes are ideal. Beginners can start with clean athletic shoes or dance sneakers.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Water bottle</span>
                        <p className="text-sm text-gray-500 mt-1">Jazz is energetic and you'll need to stay hydrated.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Small towel</span>
                        <p className="text-sm text-gray-500 mt-1">Jazz dance provides a great workout!</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <span className="font-medium">Energy & enthusiasm</span>
                        <p className="text-sm text-gray-500 mt-1">Jazz dance is all about expression and enjoyment!</p>
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Meet Our Jazz Dance Instructors</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn from our experienced and passionate teachers who bring diverse jazz styles and techniques.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src="/media/51486406_2072524792867131_4792193387820220416_n.jpg"
                    alt="Michael Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Michael Johnson</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">Lead Jazz Dance Instructor</p>
                  <p className="text-gray-600 mb-4">
                    Michael has over 12 years of professional dance experience in jazz and commercial styles. His dynamic classes combine technical training with fun, energetic choreography.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src="/media/59379905_2202552093197733_1968728878667005952_n.jpg"
                    alt="Rebecca Taylor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Rebecca Taylor</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">Jazz & Contemporary Instructor</p>
                  <p className="text-gray-600 mb-4">
                    Rebecca specializes in lyrical jazz and Broadway styles, bringing her extensive performance background to her teaching. Her classes focus on technique with theatrical flair.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src="/media/59635965_2202552183197724_1663965764643717120_n.jpg"
                    alt="Jason Martinez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Jason Martinez</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">Funk & Commercial Jazz Instructor</p>
                  <p className="text-gray-600 mb-4">
                    Jason's background in commercial and street jazz brings a contemporary edge to his classes. His teaching emphasizes rhythm, energy, and performance quality.
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">FAQ About Jazz Dance Classes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">Do I need previous dance experience?</h3>
                  <p className="text-gray-600">
                    Not at all! Our beginner classes are designed for adults with no prior experience. We break down movements progressively and create a supportive environment where everyone can learn at their own pace.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">What should I wear to jazz class?</h3>
                  <p className="text-gray-600">
                    Comfortable, form-fitting clothes that allow freedom of movement are best - leggings or dance pants with a tank top or t-shirt work well. For footwear, jazz shoes are ideal, but beginners can start with clean indoor athletic shoes or dance sneakers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">Is jazz dance physically demanding?</h3>
                  <p className="text-gray-600">
                    Jazz can be quite energetic, but our classes are designed to accommodate different fitness levels. You'll build stamina gradually, and our instructors offer modifications to ensure everyone can participate comfortably and safely.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">What styles of jazz do you teach?</h3>
                  <p className="text-gray-600">
                    Our program includes various jazz styles including traditional jazz, Broadway jazz, lyrical jazz, and elements of contemporary and funk. This variety provides a well-rounded jazz education while allowing students to discover their preferred style.
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
              <h2 className="text-3xl md:text-4xl font-bold font-display">Ready to experience the energy of jazz dance?</h2>
              <p className="text-xl mt-4 text-purple-100">
                Join our vibrant community and discover your rhythm and expression.
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