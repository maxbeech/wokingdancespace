'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTicketAlt, FaTheaterMasks } from 'react-icons/fa';

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
          src="/media/32675361_1697584277027853_7922527031030448128_n.jpg" 
          alt="Dancers performing at Woking Dance Space show" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Shows & Events
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              Experience the joy of dance through our regular performances, showcases, and special events throughout the year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const upcomingShows = [
  {
    id: 1,
    title: "Summer Showcase 2025",
    date: "June 28, 2025",
    time: "7:00 PM",
    location: "The Rhoda McGaw Theatre, Woking",
    description: "Our annual summer showcase featuring performances from all our adult dance classes, showcasing the skills and creativity developed throughout the year.",
    image: "/media/32675369_1697583180361296_1165318579814400000_n.jpg",
    ticketLink: "#",
  },
  {
    id: 2,
    title: "Winter Spectacular",
    date: "December 12, 2025",
    time: "7:30 PM",
    location: "The Rhoda McGaw Theatre, Woking",
    description: "A festive celebration of dance featuring seasonal pieces and collaborative performances from our adult dance community.",
    image: "/media/32599586_1697584553694492_8655924415155929088_n.jpg",
    ticketLink: "#",
  },
  {
    id: 3,
    title: "Contemporary Dance Workshop",
    date: "September 5, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Woking Dance Space Studio",
    description: "A special one-day intensive workshop with guest teacher exploring contemporary dance techniques and creative movement.",
    image: "/media/32690302_1697584233694524_684998595962732544_n.jpg",
    ticketLink: "#",
  }
];

export default function ShowsPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Upcoming Shows & Events</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us for our upcoming performances and special events. We regularly present showcases, workshops, and collaborative performances throughout the year.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {upcomingShows.map((show, index) => (
              <FadeIn key={show.id} delay={0.1 * (index + 1)}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-60">
                    <Image 
                      src={show.image} 
                      alt={show.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-display">{show.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <FaCalendarAlt className="mr-2 text-purple-600" />
                      <span>{show.date} | {show.time}</span>
                    </div>
                    <div className="text-gray-600 mb-4">
                      <FaTheaterMasks className="inline-block mr-2 text-purple-600" />
                      <span>{show.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{show.description}</p>
                    <a 
                      href={show.ticketLink} 
                      className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors font-medium"
                    >
                      <FaTicketAlt className="mr-2" />
                      Get Tickets
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Our Productions</h2>
                <p className="mb-4">
                  At Woking Dance Space, we believe that performing is an important part of the dance experience. We provide opportunities for our adult dancers to showcase their skills through regular performances and events.
                </p>
                <p className="mb-4">
                  Our shows range from informal studio showcases to larger productions at local theaters. These events allow our community to share their passion for dance with friends, family, and the wider community.
                </p>
                <p>
                  Participation in performances is always voluntary, but many of our dancers find that preparing for and performing in shows enhances their dance experience, builds confidence, and creates lasting memories.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/shows/archive" 
                    className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
                  >
                    View Past Productions
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/464264608_8500408790078667_1203335430434318754_n.jpg" 
                  alt="Woking Dance Space performance" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right" className="order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/32690362_1697586083694339_1807726635097522176_n.jpg" 
                  alt="Dance workshop at Woking Dance Space" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left" className="order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Workshops & Special Events</h2>
                <p className="mb-4">
                  Throughout the year, we offer special workshops and events to enrich our dancers' experience and provide opportunities to explore different styles and techniques.
                </p>
                <p className="mb-4">
                  These workshops are often led by guest teachers who bring fresh perspectives and specialized expertise to our community. Past workshops have covered a wide range of topics, from specific dance techniques to choreography development and performance skills.
                </p>
                <p>
                  Workshops are open to all adults, including those who don't regularly attend our classes, providing an accessible entry point to our dance community.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/shows/workshops" 
                    className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
                  >
                    Upcoming Workshops
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 