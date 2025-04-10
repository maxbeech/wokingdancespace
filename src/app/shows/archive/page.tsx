'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';

// FadeIn component with proper TypeScript types
const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: string;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: direction === "up" ? 20 : direction === "down" ? -20 : 0, x: direction === "left" ? 20 : direction === "right" ? -20 : 0, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const PageHeader = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90 z-10"></div>
      <div className="absolute inset-0">
        <Image 
          src="/media/32746459_1697584127027868_4542205550795948032_n.jpg" 
          alt="Past productions at Woking Dance Space" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Past Productions
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              A look back at our previous showcases, performances, and dance events from across the years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Past productions data
const pastProductions = [
  {
    id: 1,
    title: "Winter Spectacular 2024",
    date: "December 10, 2024",
    location: "The Rhoda McGaw Theatre, Woking",
    description: "Our winter production featuring festive dance pieces and seasonal performances from our adult dance community.",
    image: "/media/32599586_1697584553694492_8655924415155929088_n.jpg",
    gallery: "#",
  },
  {
    id: 2,
    title: "Summer Showcase 2024",
    date: "June 15, 2024",
    location: "The Rhoda McGaw Theatre, Woking",
    description: "Our annual summer showcase featuring performances from all our dance classes, showcasing a year of hard work and creativity.",
    image: "/media/32675369_1697583180361296_1165318579814400000_n.jpg",
    gallery: "#",
  },
  {
    id: 3,
    title: "Dance & Movement Festival",
    date: "March 22-23, 2024",
    location: "Woking Dance Space Studio",
    description: "A weekend celebration of dance and movement, featuring workshops, performances, and collaborative pieces.",
    image: "/media/316171610_5610032145783027_4215840854848055820_n.jpg",
    gallery: "#",
  },
  {
    id: 4,
    title: "Winter Spectacular 2023",
    date: "December 8, 2023",
    location: "The Rhoda McGaw Theatre, Woking",
    description: "Our winter production featuring festive dance pieces and seasonal performances.",
    image: "/media/32579366_1697585960361018_1645710439943766016_n.jpg",
    gallery: "#",
  },
  {
    id: 5,
    title: "Summer Showcase 2023",
    date: "June 17, 2023",
    location: "The Rhoda McGaw Theatre, Woking",
    description: "Our annual summer showcase featuring performances from all our dance classes.",
    image: "/media/32675361_1697584277027853_7922527031030448128_n.jpg",
    gallery: "#",
  },
  {
    id: 6,
    title: "40th Anniversary Gala",
    date: "October 15, 2022",
    location: "The Rhoda McGaw Theatre, Woking",
    description: "A special celebration marking 40 years of Woking Dance Space, featuring current dancers and alumni.",
    image: "/media/316240983_5610032369116338_374439241220607926_n.jpg",
    gallery: "#",
  },
];

export default function ArchivePage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center mb-12">
              <Link 
                href="/shows" 
                className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-all mr-4"
              >
                <FaArrowLeft className="mr-2" />
                Back to Shows & Events
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Our Past Productions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the history of Woking Dance Space through our archive of past performances and events.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {pastProductions.map((production, index) => (
              <FadeIn key={production.id} delay={0.1 * (index % 3)}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-60">
                    <Image 
                      src={production.image} 
                      alt={production.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-display">{production.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaCalendarAlt className="mr-2 text-purple-600" />
                      <span>{production.date} | {production.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{production.description}</p>
                    <a 
                      href={production.gallery} 
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-all font-medium"
                    >
                      View Photos
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Our Performance History</h2>
                <p className="mb-4">
                  Since our founding in 1982, Woking Dance Space has been committed to providing performance opportunities for adult dancers of all abilities.
                </p>
                <p className="mb-4">
                  Our productions have evolved over the years, from small studio showcases to larger theatrical performances, but they have always maintained our core values of inclusivity, creativity, and community.
                </p>
                <p>
                  We are proud of our rich performance history and the hundreds of adult dancers who have had the opportunity to experience the joy of performing through our productions.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/shows" 
                    className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
                  >
                    View Upcoming Shows
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/51486406_2072524792867131_4792193387820220416_n.jpg" 
                  alt="Historical performance at Woking Dance Space" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 