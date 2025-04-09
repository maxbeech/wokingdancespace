'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import { 
  CalendarIcon, 
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

// Class card component
interface ClassCardProps {
  image: string;
  title: string;
  description: string;
  schedule: string;
  link: string;
  delay?: number;
}

const ClassCard: React.FC<ClassCardProps> = ({ image, title, description, schedule, link, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <motion.div 
        className="class-card h-full"
        whileHover={{ y: -5 }}
      >
        <div className="relative h-48 overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="class-card-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-3 left-3">
            <span className="badge badge-purple">{schedule}</span>
          </div>
        </div>
        <div className="class-card-content">
          <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link 
            href={link} 
            className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
          >
            Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </FadeIn>
  );
};

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      quote: "I started as a complete beginner in my 40s and never thought I'd be able to dance. The supportive community and excellent teachers have helped me grow in confidence and fall in love with ballet.",
      author: "Jane Morris",
      role: "Ballet & Contemporary"
    },
    {
      quote: "After years of wanting to try tap dancing, I finally joined WDS. The classes are challenging but fun, and performing in the shows has been an incredible experience I never thought I'd have.",
      author: "Mark Thompson",
      role: "Tap & Jazz"
    },
    {
      quote: "What makes Woking Dance Space special is how inclusive it is. No matter your age, background or ability, you're welcomed and encouraged. It's more than just dance classes - it's a community.",
      author: "Sarah Jenkins",
      role: "Contemporary & Creative"
    }
  ];
  
  // Classes data
  const classes = [
    {
      title: "Ballet",
      description: "Classical technique focusing on alignment, strength, and grace for all levels.",
      image: "/media/32582015_1697582060361408_6135726739319422976_n.jpg",
      schedule: "Monday & Wednesday",
      link: "/classes/ballet"
    },
    {
      title: "Contemporary",
      description: "Expressive modern dance combining elements of ballet, jazz and lyrical styles.",
      image: "/media/32554999_1697576077028673_1437418227033440256_n.jpg",
      schedule: "Tuesday & Thursday",
      link: "/classes/contemporary"
    },
    {
      title: "Jazz",
      description: "Dynamic rhythmic dance with influences from African and Caribbean traditions.",
      image: "/media/32675369_1697583180361296_1165318579814400000_n.jpg",
      schedule: "Wednesday & Friday",
      link: "/classes/jazz"
    },
    {
      title: "Tap",
      description: "Percussive footwork that creates rhythm and sound through metal taps on shoes.",
      image: "/media/32585724_1697582697028011_7151455258936344576_n.jpg",
      schedule: "Thursday & Saturday",
      link: "/classes/tap"
    }
  ];

  // Upcoming shows data
  const upcomingShows = [
    {
      title: "Summer Showcase",
      date: "July 15-16, 2023",
      location: "Rhoda McGaw Theatre, Woking",
      image: "/media/316180614_5610031842449724_1004370439022595399_n.jpg",
      link: "/shows/summer-showcase",
      badgeType: "purple"
    },
    {
      title: "Contemporary Workshop",
      date: "May 28, 2023",
      location: "With guest teacher Sarah Johnson",
      image: "/media/316171610_5610032145783027_4215840854848055820_n.jpg",
      link: "/shows/workshops/contemporary-may",
      badgeType: "pink"
    },
    {
      title: "Winter Spectacular",
      date: "December 9-10, 2023",
      location: "Rhoda McGaw Theatre, Woking",
      image: "/media/316240983_5610032369116338_374439241220607926_n.jpg",
      link: "/shows/winter-spectacular",
      badgeType: "purple"
    }
  ];

  // Gallery images
  const galleryImages = [
    "/media/32582015_1697582060361408_6135726739319422976_n.jpg",
    "/media/32675369_1697583180361296_1165318579814400000_n.jpg",
    "/media/32585724_1697582697028011_7151455258936344576_n.jpg",
    "/media/32554999_1697576077028673_1437418227033440256_n.jpg",
    "/media/59379905_2202552093197733_1968728878667005952_n.jpg",
    "/media/59488127_2202552029864406_2430191185835327488_n.jpg",
    "/media/59519541_2202552013197741_429893713427169280_n.jpg",
    "/media/58986724_2202551979864411_7664688461940523008_n.jpg",
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Classes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Dance Classes for Every Adult
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're a complete beginner or an experienced dancer, we offer a wide range of classes to help you explore movement, build skills, and express yourself.
              </p>
              <Link href="/classes" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors">
                View All Classes <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {classes.map((classItem, index) => (
              <ClassCard
                key={classItem.title}
                title={classItem.title}
                description={classItem.description}
                image={classItem.image}
                schedule={classItem.schedule}
                link={classItem.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-purple-100 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-pink-100 rounded-lg -z-10"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/media/32675369_1697583180361296_1165318579814400000_n.jpg" 
                    alt="Woking Dance Space studio" 
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                About Woking Dance Space
              </h2>
              <p className="text-gray-600 mb-4">
                Established in 1982, Woking Dance Space has been providing a supportive and inclusive environment for adults to explore dance for over 40 years. Our community-oriented approach means everyone is welcome, regardless of experience level.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that dance is for everyone and that it's never too late to start. Our classes cater to complete beginners through to advanced dancers, with experienced teachers who are passionate about sharing their love of dance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <UserGroupIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Inclusive Community</h3>
                    <p className="mt-1 text-sm text-gray-500">Welcoming environment for dancers of all abilities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <AcademicCapIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Expert Teachers</h3>
                    <p className="mt-1 text-sm text-gray-500">Experienced instructors with professional backgrounds</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CalendarIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Regular Performances</h3>
                    <p className="mt-1 text-sm text-gray-500">Opportunities to perform in shows throughout the year</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <SparklesIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Creative Expression</h3>
                    <p className="mt-1 text-sm text-gray-500">Focus on personal development and artistic growth</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Discover Our Story
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Shows & Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Upcoming Shows & Events
              </h2>
              <p className="text-lg text-gray-600">
                Be part of our performances or join us as an audience member for our exciting shows and events throughout the year.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingShows.map((show, index) => (
              <FadeIn key={show.title} delay={index * 0.1}>
                <div className="show-card">
                  <Image 
                    src={show.image} 
                    alt={show.title} 
                    width={400}
                    height={300}
                    className="show-card-image"
                  />
                  <div className="show-card-overlay">
                    <div className="mb-2">
                      <span className={`badge badge-${show.badgeType}`}>{show.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 font-display">{show.title}</h3>
                    <p className="text-sm text-white/80 mb-3">{show.location}</p>
                    <Link 
                      href={show.link} 
                      className="text-sm text-white font-medium hover:text-purple-200 transition-colors inline-flex items-center"
                    >
                      View Details <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link 
                href="/shows" 
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors"
              >
                View All Shows & Events <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                What Our Dancers Say
              </h2>
              <p className="text-lg text-purple-100">
                Hear from our members about their experiences at Woking Dance Space.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{testimonial.author}</h3>
                      <p className="text-purple-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-purple-100">
                    "{testimonial.quote}"
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Gallery
              </h2>
              <p className="text-lg text-gray-600">
                Glimpses of our classes, performances, and community in action.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`Dance gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link 
                href="/gallery" 
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors"
              >
                View Full Gallery <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Ready to Start Your Dance Journey?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Join our supportive community today and discover the joy of dance, no matter your experience level.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/classes/schedule" 
                  className="px-6 py-3 bg-white text-purple-600 font-medium rounded-md hover:bg-purple-50 transition-colors duration-300"
                >
                  View Class Schedule
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 