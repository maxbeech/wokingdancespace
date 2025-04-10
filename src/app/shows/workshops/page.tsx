'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaArrowLeft } from 'react-icons/fa';

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
          src="/media/32623052_1697585717027709_7702631049141944320_n.jpg" 
          alt="Dance workshops at Woking Dance Space" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Workshops & Special Events
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              Expand your dance horizons with our specialized workshops and enriching dance events throughout the year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Upcoming workshops data
const upcomingWorkshops = [
  {
    id: 1,
    title: "Contemporary Technique Masterclass",
    date: "September 5, 2025",
    time: "10:00 AM - 12:30 PM",
    location: "Woking Dance Space Studio",
    instructor: "Sarah Johnson",
    description: "An intensive workshop focusing on contemporary dance techniques, floor work, and movement quality. Suitable for intermediate to advanced dancers.",
    image: "/media/32637213_1697586033694344_4324686631442317312_n.jpg",
    price: "£30",
    registrationLink: "#",
  },
  {
    id: 2,
    title: "Ballet Workshop: Exploring Musicality",
    date: "October 12, 2025",
    time: "2:00 PM - 4:30 PM",
    location: "Woking Dance Space Studio",
    instructor: "Michael Chen",
    description: "Enhance your ballet practice by developing a deeper connection to music. This workshop explores phrasing, dynamics, and musical interpretation in ballet.",
    image: "/media/32690302_1697584233694524_684998595962732544_n.jpg",
    price: "£28",
    registrationLink: "#",
  },
  {
    id: 3,
    title: "Jazz Dance Intensive",
    date: "November 8, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Woking Dance Space Studio",
    instructor: "Emma Williams",
    description: "A high-energy jazz dance workshop covering classic and contemporary jazz styles, techniques, and choreography. Open to all levels.",
    image: "/media/32582015_1697582060361408_6135726739319422976_n.jpg",
    price: "£32",
    registrationLink: "#",
  },
  {
    id: 4,
    title: "Movement for Wellness",
    date: "December 5, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Woking Dance Space Studio",
    instructor: "David Thompson",
    description: "A gentle workshop focused on movement as a path to wellness. Incorporates elements of dance, yoga, and somatic practices. Perfect for beginners and those returning to movement.",
    image: "/media/463619943_8464281287024751_1873633221861478238_n.jpg",
    price: "£25",
    registrationLink: "#",
  },
];

export default function WorkshopsPage() {
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Upcoming Workshops</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us for specialized dance workshops and events designed to enrich your dance practice and expand your skills.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {upcomingWorkshops.map((workshop, index) => (
              <FadeIn key={workshop.id} delay={0.1 * (index % 2)}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-60 md:h-full">
                      <Image 
                        src={workshop.image} 
                        alt={workshop.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:col-span-2">
                      <h3 className="text-xl font-bold mb-2 font-display">{workshop.title}</h3>
                      <p className="text-sm text-purple-600 mb-3">with {workshop.instructor}</p>
                      <div className="flex items-center text-gray-600 mb-2 text-sm">
                        <FaCalendarAlt className="mr-2 text-purple-600" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2 text-sm">
                        <FaClock className="mr-2 text-purple-600" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4 text-sm">
                        <FaMapMarkerAlt className="mr-2 text-purple-600" />
                        <span>{workshop.location}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{workshop.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-purple-600">{workshop.price}</span>
                        <a 
                          href={workshop.registrationLink} 
                          className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors font-medium"
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">About Our Workshops</h2>
                <p className="mb-4">
                  At Woking Dance Space, we offer workshops throughout the year to complement our regular class schedule. These special events provide opportunities to explore specific techniques, styles, or aspects of dance in greater depth.
                </p>
                <p className="mb-4">
                  Our workshops are led by our regular teaching staff as well as guest instructors who bring fresh perspectives and specialized expertise. We aim to provide a diverse range of workshops to meet the interests and needs of our adult dance community.
                </p>
                <p>
                  Workshops are open to all adults, including those who don't regularly attend our classes. They provide a perfect opportunity to try something new or deepen your practice in a supportive environment.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
                  >
                    Contact Us for Workshop Info
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/464172219_8498896196896593_3918902627713962926_n.jpg" 
                  alt="Workshop at Woking Dance Space" 
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
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Workshop FAQs</h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 font-display">Do I need prior dance experience?</h3>
                <p className="text-gray-700">
                  It depends on the workshop. Each workshop description specifies the experience level required. Some are open to complete beginners, while others may require some prior dance experience. If you're unsure, feel free to contact us.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 font-display">What should I wear?</h3>
                <p className="text-gray-700">
                  Comfortable clothing that allows for movement is essential. For specific workshops, there may be recommended attire which will be specified in the workshop details. Generally, dance or athletic wear is appropriate.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 font-display">How do I register?</h3>
                <p className="text-gray-700">
                  Registration for workshops can be completed online using the registration links provided with each workshop listing. Alternatively, you can contact us directly to register.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 font-display">What is the cancellation policy?</h3>
                <p className="text-gray-700">
                  Refunds are available up to 7 days before the workshop date. After that, we can offer credit toward a future workshop if you're unable to attend. In case of workshop cancellation, full refunds will be provided.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 