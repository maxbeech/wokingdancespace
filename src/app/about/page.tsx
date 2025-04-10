'use client';

import React, { useRef } from 'react';
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
          src="/media/32557096_1697581503694797_6223945900155207680_n.jpg"
          alt="Woking Dance Space class in action"
          fill
          className="object-cover"
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
              About Woking Dance Space
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Supporting adult dancers of all abilities since 1982
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

export default function About() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/32582015_1697582060361408_6135726739319422976_n.jpg" 
                  alt="Dancers at Woking Dance Space" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Our Story</h2>
                <p className="mb-4">
                  Woking Dance Space was established in 1982 by a small group of dance enthusiasts who wanted to create a welcoming environment for adult dancers in Surrey. What began as a few weekly classes has grown into a vibrant dance community offering a diverse range of styles and skill levels.
                </p>
                <p className="mb-4">
                  For over 40 years, we have been committed to making dance accessible to adults of all ages and abilities. Whether you're a complete beginner or an experienced dancer, our classes provide a supportive and creative space to develop your skills and express yourself through movement.
                </p>
                <p>
                  Our mission remains the same as when we first opened our doors: to empower adults to explore dance regardless of prior experience, promoting personal development, community, and creative expression.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-display">Our Values</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Inclusivity</h3>
                <p className="text-gray-600 text-center">
                  We welcome dancers of all abilities, backgrounds, and ages. Our classes are designed to be accessible while still providing appropriate challenges for each individual.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.5 20.25l-.259-1.035a3.375 3.375 0 0 0-2.456-2.456L12.75 16.5l1.035-.259a3.375 3.375 0 0 0 2.456-2.456L16.5 12.75l.259 1.035a3.375 3.375 0 0 0 2.456 2.456l1.035.259-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Creativity</h3>
                <p className="text-gray-600 text-center">
                  We believe in nurturing creative expression through dance. Our classes and performances provide opportunities for dancers to explore their artistic potential.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 font-display">Community</h3>
                <p className="text-gray-600 text-center">
                  Dance is a communal art form. We foster a sense of belonging and connection among our members, creating a supportive network of fellow dance enthusiasts.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced instructors are passionate about dance and dedicated to helping each student develop their skills in a supportive environment.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FadeIn delay={0.2} direction="up">
              <Link href="/about/team" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="relative h-80">
                    <Image 
                      src="/media/32675369_1697583180361296_1165318579814400000_n.jpg" 
                      alt="Sarah Williams" 
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-display">Sarah Williams</h3>
                    <p className="text-purple-600 mb-3">Artistic Director</p>
                    <p className="text-gray-600">
                      With over 25 years of experience in ballet and contemporary dance, Sarah leads our artistic vision and teaches several classes each week.
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <Link href="/about/team" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="relative h-80">
                    <Image 
                      src="/media/32592842_1697581697028111_591481812010663936_n.jpg" 
                      alt="Michael Johnson" 
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-display">Michael Johnson</h3>
                    <p className="text-purple-600 mb-3">Jazz & Tap Instructor</p>
                    <p className="text-gray-600">
                      Michael brings energy and passion to our jazz and tap classes, with a background in West End productions and commercial dance.
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <Link href="/about/team" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="relative h-80">
                    <Image 
                      src="/media/32554999_1697576077028673_1437418227033440256_n.jpg" 
                      alt="Emma Chen" 
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-display">Emma Chen</h3>
                    <p className="text-purple-600 mb-3">Contemporary & Creative Dance</p>
                    <p className="text-gray-600">
                      Emma specializes in contemporary techniques and creative movement, helping students discover their unique dance expression.
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/about/team" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
            >
              Meet Our Full Team
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="up">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg"></div>
                <div className="relative bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 font-display">Our Mission</h3>
                  <p className="text-gray-700 mb-6 italic">
                    "To empower adults to explore dance regardless of prior experience, promoting personal development, community, and creative expression."
                  </p>
                  <p className="text-gray-600">
                    At Woking Dance Space, we believe that dance is for everyone. Our mission guides everything we do, from the classes we offer to the performances we produce. We are committed to creating an inclusive, supportive environment where every dancer can thrive.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold mb-2 font-display">Inclusive Community</h4>
                  <p className="text-gray-600">
                    We foster a welcoming environment where dancers of all backgrounds, ages, and abilities can connect and share their love of dance.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold mb-2 font-display">Quality Instruction</h4>
                  <p className="text-gray-600">
                    Our professional instructors provide high-quality dance education, adapting their teaching to suit different learning styles and ability levels.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold mb-2 font-display">Creative Expression</h4>
                  <p className="text-gray-600">
                    We encourage personal artistic expression through regular performance opportunities and creative workshops.
                  </p>
                </div>
                
                <Link 
                  href="/about/mission" 
                  className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800 transition-colors mt-4"
                >
                  Learn more about our values and mission
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Get Involved</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're looking to join a class, attend a show, or rent our studio space, there are many ways to become part of the Woking Dance Space community.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.2} direction="up">
              <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">Join a Class</h3>
                <p className="text-gray-600 mb-6">
                  Explore our range of dance and exercise classes for adults of all abilities, from complete beginners to advanced dancers.
                </p>
                <Link 
                  href="/classes/schedule" 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  View Class Schedule
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">See a Show</h3>
                <p className="text-gray-600 mb-6">
                  Attend one of our performances showcasing the talent of our community, from intimate studio showings to full theatre productions.
                </p>
                <Link 
                  href="/shows" 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  View Upcoming Shows
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">Contact Us</h3>
                <p className="text-gray-600 mb-6">
                  Get in touch with questions about classes, studio hire, or to discuss how you can become part of our community.
                </p>
                <Link 
                  href="/contact" 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  Contact Information
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 