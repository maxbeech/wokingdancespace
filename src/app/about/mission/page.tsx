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
    <section className="relative h-[40vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[50vh]">
        <Image
          src="/media/32579366_1697585960361018_1645710439943766016_n.jpg"
          alt="Woking Dance Space dancers"
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
              Our Mission & Values
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              The principles that guide everything we do
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

export default function MissionPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Our Mission</h2>
                <div className="relative inline-block">
                  <div className="w-24 h-1 bg-purple-600 absolute -bottom-4 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-8 rounded-lg shadow-sm mb-12">
                <p className="text-2xl text-center text-gray-700 italic font-display">
                  "To empower adults to explore dance regardless of prior experience, promoting personal development, community, and creative expression."
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Since our founding in 1982, Woking Dance Space has been dedicated to creating opportunities for adults of all ages and abilities to experience the joy and benefits of dance. We believe that dance is for everyone, not just those who started as children or who aspire to professional careers.
                </p>
                <p>
                  Our mission guides everything we do, from the classes we offer to the performances we produce. We strive to create an environment where dancers can develop their skills, express themselves creatively, and build meaningful connections with others who share their passion for movement.
                </p>
                <p>
                  Through our work, we aim to demonstrate that dance is a lifelong pursuit that offers physical, emotional, and social benefits. Whether you're taking your first dance class at 25 or 75, continuing a practice from youth, or returning to dance after a long break, we're here to support your journey.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles inform our approach to teaching, our community engagement, and our artistic decisions.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-lg p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Inclusivity</h3>
                <p className="text-gray-600">
                  We welcome dancers of all backgrounds, ages, body types, and abilities. We believe that dance is for everyone, and we are committed to creating a space where all feel valued and respected. Our classes are designed to be adaptable to different skill levels and physical capabilities.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-lg p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Community</h3>
                <p className="text-gray-600">
                  We foster a sense of belonging and connection among our members. Dance is a communal art form, and we believe in the power of shared experiences to build relationships and support networks. Our community extends beyond the studio, creating lasting friendships and collaborative opportunities.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-lg p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.5 20.25l-.259-1.035a3.375 3.375 0 0 0-2.456-2.456L12.75 16.5l1.035-.259a3.375 3.375 0 0 0 2.456-2.456L16.5 12.75l.259 1.035a3.375 3.375 0 0 0 2.456 2.456l1.035.259-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Creativity</h3>
                <p className="text-gray-600">
                  We encourage personal artistic expression and creative exploration. Beyond teaching technique, we provide opportunities for dancers to develop their own voice through improvisation, choreography, and performance. We believe in the transformative power of creative expression.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <div className="bg-white rounded-lg p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.625 48.625 0 0 1 12 20.904a48.625 48.625 0 0 1 8.232-4.41 60.438 60.438 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Quality Instruction</h3>
                <p className="text-gray-600">
                  We are committed to providing high-quality dance education with experienced, knowledgeable instructors. Our teachers are not only skilled dancers but effective educators who understand adult learning styles and can communicate concepts clearly and supportively.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Our History & Legacy</h2>
                <p className="mb-4">
                  Since our inception in 1982, Woking Dance Space has been a cornerstone of adult dance education in Surrey. What began as a small group of enthusiasts has grown into a thriving community with hundreds of dancers participating in our classes and performances each year.
                </p>
                <p className="mb-4">
                  Throughout our history, we have maintained our commitment to adult dance education while expanding our offerings to include a wider range of styles and opportunities. Many of our students have been with us for decades, a testament to the lasting impact of our approach.
                </p>
                <p>
                  As we look to the future, we remain dedicated to our founding principles while continuing to evolve to meet the changing needs of our community. We aim to inspire more adults to discover the joy of dance, regardless of their age or background.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/59379905_2202552093197733_1968728878667005952_n.jpg" 
                  alt="Woking Dance Space community" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Making Dance Accessible</h2>
              <p className="text-xl max-w-3xl mx-auto">
                We are committed to removing barriers to dance participation and making our programs accessible to as many adults as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 font-display">Financial Accessibility</h3>
                <p>
                  We strive to keep our class prices affordable and offer payment plans for those who need them. We also have a limited number of subsidized places available for those who would otherwise be unable to participate.
                </p>
              </div>
              
              <div className="bg-purple-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 font-display">Physical Accessibility</h3>
                <p>
                  Our studio is wheelchair accessible, and our instructors are trained to adapt exercises for different physical abilities and needs. We believe that dance can be modified to suit anyone's capabilities.
                </p>
              </div>
              
              <div className="bg-purple-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 font-display">Beginner-Friendly Approach</h3>
                <p>
                  Many of our classes are specifically designed for beginners, creating a supportive environment where adults can start their dance journey without fear or intimidation. We emphasize progress over perfection.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Get Involved</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                There are many ways to become part of our community and support our mission.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.2} direction="up">
              <Link href="/classes" className="block group">
                <div className="bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display">Join a Class</h3>
                  <p className="text-gray-600 text-sm">
                    Experience our values firsthand by participating in one of our many classes.
                  </p>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <Link href="/shows" className="block group">
                <div className="bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display">Attend Performances</h3>
                  <p className="text-gray-600 text-sm">
                    Support our dancers by coming to our shows and celebrating their accomplishments.
                  </p>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <Link href="/contact" className="block group">
                <div className="bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display">Donate</h3>
                  <p className="text-gray-600 text-sm">
                    Help us maintain our accessible pricing and provide subsidized places for those in need.
                  </p>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <Link href="/contact" className="block group">
                <div className="bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display">Get in Touch</h3>
                  <p className="text-gray-600 text-sm">
                    Contact us with questions, feedback, or ideas for collaboration - we'd love to hear from you.
                  </p>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 