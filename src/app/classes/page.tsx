'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

// Class card component
interface ClassCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

const ClassCard: React.FC<ClassCardProps> = ({ 
  title, 
  description, 
  image, 
  link,
  delay = 0
}) => {
  return (
    <FadeIn delay={delay} direction="up">
      <Link href={link} className="block group">
        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg mb-5">
          <Image
            src={image}
            alt={`${title} class at Woking Dance Space`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 p-5">
            <h3 className="text-xl md:text-2xl font-bold text-white font-display">{title}</h3>
          </div>
        </div>
        <div>
          <p className="text-gray-600">{description}</p>
          <span className="inline-flex items-center mt-2 text-purple-600 font-medium group-hover:text-purple-800 transition-colors">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </Link>
    </FadeIn>
  );
};

export default function ClassesPage() {
  // Classes data
  const classes = [
    {
      title: "Ballet",
      description: "Classical technique focusing on alignment, strength, and grace for all levels.",
      image: "/media/32582015_1697582060361408_6135726739319422976_n.jpg",
      link: "/classes/ballet"
    },
    {
      title: "Contemporary",
      description: "Expressive modern dance combining elements of ballet, jazz and lyrical styles.",
      image: "/media/32554999_1697576077028673_1437418227033440256_n.jpg",
      link: "/classes/contemporary"
    },
    {
      title: "Jazz",
      description: "Dynamic rhythmic dance with influences from African and Caribbean traditions.",
      image: "/media/32675369_1697583180361296_1165318579814400000_n.jpg",
      link: "/classes/jazz"
    },
    {
      title: "Tap",
      description: "Percussive footwork that creates rhythm and sound through metal taps on shoes.",
      image: "/media/32585724_1697582697028011_7151455258936344576_n.jpg",
      link: "/classes/tap"
    },
    {
      title: "Creative Dance",
      description: "Freedom of expression and movement exploration without rigid technique requirements.",
      image: "/media/32690302_1697584233694524_684998595962732544_n.jpg",
      link: "/classes/creative"
    },
    {
      title: "Pilates & Fitness",
      description: "Core strength, flexibility, and conditioning to support dance or general wellness.",
      image: "/media/32599586_1697584553694492_8655924415155929088_n.jpg",
      link: "/classes/fitness"
    }
  ];

  // Filter by level and day options for the filter component
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-purple-700">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/media/pattern.svg"
            alt="Background pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
            >
              Dance Classes for Every Adult
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-purple-100 mb-8"
            >
              Whether you're a complete beginner or an experienced dancer, we offer a supportive environment where adults of all ages and abilities can discover the joy of dance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/classes/schedule" 
                className="px-6 py-3 bg-white text-purple-700 font-medium rounded-md hover:bg-purple-100 transition-colors duration-300"
              >
                View Schedule
              </Link>
              <Link 
                href="/classes/register" 
                className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md border border-purple-400 hover:bg-purple-800 transition-colors duration-300"
              >
                Register Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Our Classes
              </h2>
              <p className="text-xl text-gray-600">
                We offer a wide range of dance and movement classes designed specifically for adults. Explore our class offerings below to find your perfect fit.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <ClassCard
                key={classItem.title}
                title={classItem.title}
                description={classItem.description}
                image={classItem.image}
                link={classItem.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1} direction="right">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Our Approach to Teaching Adults</h2>
                <p className="mb-4">
                  At Woking Dance Space, we understand that learning to dance as an adult is different from childhood dance education. Our teaching approach is specifically tailored to adult learners:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Clear instruction</strong>: We break down movements in detail with anatomical explanations that make sense to adult minds.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Supportive environment</strong>: Our classes foster a non-competitive atmosphere where everyone is encouraged to progress at their own pace.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Appropriate modifications</strong>: We offer alternatives to accommodate different body types, physical limitations, and fitness levels.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Focus on well-being</strong>: We emphasize the physical, mental, and social benefits of dance beyond technical mastery.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Our experienced instructors are passionate about sharing the joy of dance with adults and creating a vibrant, inclusive community where everyone feels welcome.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/59379905_2202552093197733_1968728878667005952_n.jpg" 
                  alt="Dance instructor teaching adult students" 
                  width={600} 
                  height={450} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Have questions about our classes? Find answers to common inquiries below.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 font-display">Do I need previous experience?</h3>
                <p className="text-gray-600">
                  Not at all! We offer beginner classes for every dance style, designed specifically for adults with no prior experience. Our instructors break down movements carefully to ensure everyone can follow.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 font-display">What should I wear?</h3>
                <p className="text-gray-600">
                  Comfortable, form-fitting clothes that allow you to move freely are best. Each dance style has specific footwear recommendations, which you can find on the individual class pages. Beginners can usually start with basic options before investing in specialized dancewear.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 font-display">How do I know which level is right for me?</h3>
                <p className="text-gray-600">
                  If you're new to dance, always start with a beginner class. If you have some previous experience, try our intermediate classes. You're welcome to try a class to see if it's the right fit, and our instructors can help guide you to the appropriate level.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 font-display">Do I have to perform in shows?</h3>
                <p className="text-gray-600">
                  Performance opportunities are entirely optional. Many of our students enjoy taking classes solely for exercise, artistic expression, and social connection, while others participate in our biannual showcases. There's no pressure either way.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Ready to start your dance journey?</h2>
              <p className="text-xl mt-4 text-purple-100">
                Explore our class schedule and find the perfect session to begin or continue your dance practice.
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
                  href="/classes/pricing" 
                  className="px-6 py-3 bg-purple-800 text-white font-medium rounded-md hover:bg-purple-900 transition-colors duration-300 text-center"
                >
                  Pricing Options
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 