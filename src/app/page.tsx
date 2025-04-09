'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import { 
  CalendarDaysIcon, 
  HeartIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

// Animation components
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
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
        duration: duration,
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
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Parallax image component
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

// Services card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <motion.div 
        className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300 group"
        whileHover={{ y: -5 }}
      >
        <div className="p-3 bg-emerald-50 rounded-xl w-fit mb-4 text-emerald-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center font-medium text-emerald-600 group-hover:text-emerald-700"
        >
          Learn more 
          <motion.span 
            className="ml-1 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </motion.span>
        </Link>
      </motion.div>
    </FadeIn>
  );
};

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      quote: "Bisley Base has been a second home for our children. The staff are incredible - so caring and attentive. Our kids absolutely love going there!",
      author: "Sarah P.",
      role: "Parent of Jack & Emily"
    },
    {
      quote: "The preschool program is exceptional. Our daughter has thrived in the stimulating environment and caring atmosphere that Bisley Base provides.",
      author: "Mark T.",
      role: "Parent of Sophia"
    },
    {
      quote: "As working parents, we rely on the wraparound care at Bisley Base. The flexibility, quality of care, and communication with parents is outstanding.",
      author: "Emma & John H.",
      role: "Parents of Oliver"
    }
  ];
  
  // Latest News data
  const latestNews = [
    {
      title: "Summer Holiday Club Booking Now Open",
      date: "May 15, 2024",
      image: "/media/484871687_1066676745504882_7776977396599937926_n.jpg",
      excerpt: "Secure your child's place in our action-packed summer holiday club with exciting activities, outdoor adventures, and creative fun.",
      link: "/news/summer-holiday-club"
    },
    {
      title: "Preschool Open Day Announced",
      date: "April 30, 2024",
      image: "/media/484902036_1066676725504884_4700747617186550414_n.jpg",
      excerpt: "Join us for our upcoming Open Day to tour our facilities, meet our qualified staff, and learn about our preschool curriculum.",
      link: "/news/preschool-open-day"
    },
    {
      title: "New Forest School Activities Launch",
      date: "April 12, 2024",
      image: "/media/484918616_1066676722171551_1681522475451576546_n.jpg",
      excerpt: "We're excited to introduce new forest school activities to our curriculum, fostering outdoor learning and exploration.",
      link: "/news/forest-school-activities"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Welcome to Bisley Base
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Established in 2001, Bisley Base offers exceptional childcare and early education in the heart of Surrey. We provide a nurturing, stimulating environment where children can thrive, learn, and develop their unique potential.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our qualified team is dedicated to providing high-quality care and education for children aged 2-11 years, with a range of services including preschool, breakfast club, after-school club, and holiday club programs.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link 
                    href="/about" 
                    className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors duration-300 text-center"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/parents/admissions" 
                    className="px-6 py-3 border border-emerald-600 text-emerald-600 font-medium rounded-md hover:bg-emerald-50 transition-colors duration-300 text-center"
                  >
                    Enroll Now
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="relative">
              <FadeIn delay={0.4} direction="left">
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/media/484869461_1066673028838587_705034766726118684_n.jpg" 
                    alt="Children playing at Bisley Base"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.6} direction="up">
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3 text-emerald-600">
                    <SparklesIcon className="h-6 w-6" />
                    <span className="font-semibold">Ofsted Outstanding</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.7} direction="up">
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3 text-emerald-600">
                    <HeartIcon className="h-6 w-6" />
                    <span className="font-semibold">20+ Years Experience</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Programs & Services
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-gray-600">
                We offer a range of flexible childcare options to support families and nurture children's development
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<AcademicCapIcon className="h-8 w-8" />}
              title="Preschool"
              description="Our preschool program offers a stimulating environment for children aged 2-4 years, focusing on play-based learning and development."
              link="/programs/preschool"
              delay={0.2}
            />
            
            <ServiceCard 
              icon={<CalendarDaysIcon className="h-8 w-8" />}
              title="After School Club"
              description="Providing fun, supervised care for school-aged children with activities, healthy snacks, and homework support."
              link="/programs/after-school"
              delay={0.3}
            />
            
            <ServiceCard 
              icon={<UserGroupIcon className="h-8 w-8" />}
              title="Breakfast Club"
              description="Start the day right with our breakfast club, offering nutritious meals and engaging activities before school begins."
              link="/programs/breakfast"
              delay={0.4}
            />
            
            <ServiceCard 
              icon={<HeartIcon className="h-8 w-8" />}
              title="Holiday Club"
              description="Action-packed holiday programs full of fun activities, trips, and themed events during school breaks."
              link="/programs/holiday-club"
              delay={0.5}
            />
            
            <ServiceCard 
              icon={<SparklesIcon className="h-8 w-8" />}
              title="Wraparound Care"
              description="Flexible childcare solutions that wrap around school hours, designed to support working parents."
              link="/programs/wraparound"
              delay={0.6}
            />
            
            <ServiceCard 
              icon={<CalendarDaysIcon className="h-8 w-8" />}
              title="Special Events"
              description="Themed days, guest workshops, and seasonal celebrations that enrich our regular childcare programs."
              link="/programs/special-events"
              delay={0.7}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="20" cy="20" r="3" fill="#fff"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Parents Say
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl mx-auto text-emerald-50">
                Hear from the families who trust us with their children's care and education
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="mb-4 text-emerald-500">
                    <svg
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Latest News & Updates
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-600">
                  Stay updated with the latest happenings at Bisley Base
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Link 
                href="/news" 
                className="mt-4 md:mt-0 inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700"
              >
                View all news
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((item, index) => (
              <FadeIn key={item.title} delay={0.3 + index * 0.1} direction="up">
                <motion.div 
                  className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden h-full flex flex-col transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-emerald-600 mb-2">{item.date}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {item.excerpt}
                    </p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700 mt-auto"
                    >
                      Read more
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <ParallaxImage
          src="/media/484917025_1068052962033927_2729368767143192861_n.jpg"
          alt="Children playing at Bisley Base"
          className="absolute inset-0"
          imgClassName="brightness-[0.25]"
        />
        
        {/* Additional dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Bisley Base Family?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-white/90 mb-8">
                Take the first step in providing exceptional care and education for your child
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors duration-300 text-center"
                >
                  Book a Tour
                </Link>
                <Link 
                  href="/parents/admissions" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/20 transition-colors duration-300 text-center"
                >
                  Enrollment Information
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 