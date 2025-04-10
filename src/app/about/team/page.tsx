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
    <section className="relative h-[40vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[50vh]">
        <Image
          src="/media/32599586_1697584553694492_8655924415155929088_n.jpg"
          alt="Woking Dance Space team"
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
              Our Team
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Meet the dedicated instructors and staff who make Woking Dance Space special
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

// Team member card
interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative h-80">
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 font-display">{name}</h3>
          <p className="text-purple-600 mb-3">{role}</p>
          <p className="text-gray-600">
            {bio}
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default function TeamPage() {
  // Team members data
  const facultyMembers = [
    {
      name: "Sarah Williams",
      role: "Artistic Director & Ballet Instructor",
      bio: "With over 25 years of experience in ballet and contemporary dance, Sarah leads our artistic vision and teaches several classes each week. She trained at the Royal Ballet School and has performed with companies throughout Europe.",
      image: "/media/32675369_1697583180361296_1165318579814400000_n.jpg"
    },
    {
      name: "Michael Johnson",
      role: "Jazz & Tap Instructor",
      bio: "Michael brings energy and passion to our jazz and tap classes, with a background in West End productions and commercial dance. He specializes in making complex routines accessible to dancers of all levels.",
      image: "/media/32592842_1697581697028111_591481812010663936_n.jpg"
    },
    {
      name: "Emma Chen",
      role: "Contemporary & Creative Dance",
      bio: "Emma specializes in contemporary techniques and creative movement, helping students discover their unique dance expression. She holds a degree in choreography and has created works for various dance festivals.",
      image: "/media/32554999_1697576077028673_1437418227033440256_n.jpg"
    },
    {
      name: "David Roberts",
      role: "Ballet & Technique",
      bio: "David focuses on building strong technical foundations for dancers at all levels. His approach emphasizes proper alignment and body mechanics to prevent injury and develop graceful movement.",
      image: "/media/32582015_1697582060361408_6135726739319422976_n.jpg"
    },
    {
      name: "Maria Sanchez",
      role: "Pilates & Fitness",
      bio: "Maria's classes blend dance conditioning with Pilates principles to build core strength and flexibility. Her sessions are perfect for dancers looking to complement their training with targeted conditioning.",
      image: "/media/32585724_1697582697028011_7151455258936344576_n.jpg"
    },
    {
      name: "James Wilson",
      role: "Adult Beginner Specialist",
      bio: "James creates a welcoming environment for adult beginners, with classes specifically designed to introduce dance fundamentals in an accessible, confidence-building approach.",
      image: "/media/32699955_1697582600361354_4858828830460084224_n.jpg"
    }
  ];
  
  const staffMembers = [
    {
      name: "Caroline Taylor",
      role: "Administrator",
      bio: "Caroline manages our day-to-day operations, class registrations, and studio bookings. She's often the first person you'll speak to when contacting Woking Dance Space.",
      image: "/media/32636786_1697585540361060_8324880606701813760_n.jpg"
    },
    {
      name: "Robert Patel",
      role: "Technical Director",
      bio: "Robert oversees all technical aspects of our performances, from lighting and sound to stage management. He also maintains our studio equipment and manages our online presence.",
      image: "/media/32542328_1697574203695527_3784862633073573888_n.jpg"
    }
  ];

  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Our Faculty</h2>
              <p className="text-xl text-gray-600">
                Our instructors bring decades of professional experience and a passion for teaching to Woking Dance Space. Each brings their unique perspective and expertise to our community.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {facultyMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Administrative Staff</h2>
              <p className="text-xl text-gray-600">
                The team that keeps Woking Dance Space running smoothly behind the scenes.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {staffMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Guest Teachers & Workshops</h2>
              <p className="text-xl text-gray-700 mb-8">
                Throughout the year, we invite guest teachers and choreographers to lead special workshops and masterclasses. These events provide our community with opportunities to experience different styles and approaches to dance.
              </p>
              <Link 
                href="/shows/workshops" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                Upcoming Workshops
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/media/32690302_1697584233694524_684998595962732544_n.jpg" 
                  alt="Dance class at Woking Dance Space" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="left">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Join Our Team</h2>
                <p className="mb-4">
                  We occasionally have opportunities for new faculty members and administrative staff to join our team. We look for individuals who are:
                </p>
                <ul className="mb-6">
                  <li>Experienced dancers and teachers with a passion for adult dance education</li>
                  <li>Committed to creating an inclusive and supportive learning environment</li>
                  <li>Able to adapt their teaching to accommodate various skill levels</li>
                  <li>Enthusiastic about being part of a close-knit dance community</li>
                </ul>
                <p>
                  If you're interested in teaching opportunities or other positions at Woking Dance Space, please get in touch with us.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 mt-4 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 