'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const footerAnimationDelayed = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  });

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Bookham Kitchens</h3>
            <p className="text-gray-300 mb-4">
              Family-run kitchen design and installation specialists in Surrey, providing bespoke solutions tailored to your needs.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <FaPinterestP className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Column 2: Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.2)}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/kitchens/fitted" className="text-gray-300 hover:text-accent transition-colors">
                  Fitted Kitchens
                </Link>
              </li>
              <li>
                <Link href="/kitchens/replacement-doors" className="text-gray-300 hover:text-accent transition-colors">
                  Replacement Doors
                </Link>
              </li>
              <li>
                <Link href="/kitchens/cabinet-spray-painting" className="text-gray-300 hover:text-accent transition-colors">
                  Cabinet Spray Painting
                </Link>
              </li>
              <li>
                <Link href="/home-living/bedroom-cabinets" className="text-gray-300 hover:text-accent transition-colors">
                  Bedroom Cabinets
                </Link>
              </li>
              <li>
                <Link href="/home-living/home-office" className="text-gray-300 hover:text-accent transition-colors">
                  Home Office
                </Link>
              </li>
              <li>
                <Link href="/building-services/kitchen-installation" className="text-gray-300 hover:text-accent transition-colors">
                  Kitchen Installation
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Column 3: Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.3)}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Column 4: Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimationDelayed(0.4)}
          >
            <h3 className="text-xl font-serif font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-accent mr-3 mt-1" />
                <span className="text-gray-300">
                  25 Church Road, Great Bookham<br />
                  Leatherhead, Surrey<br />
                  KT23 3PG
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="h-4 w-4 text-accent mr-3" />
                <a href="tel:+441932391183" className="text-gray-300 hover:text-accent transition-colors">
                  01932 391183
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-accent mr-3" />
                <a href="mailto:sales@bookhamkitchens.co.uk" className="text-gray-300 hover:text-accent transition-colors">
                  sales@bookhamkitchens.co.uk
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Opening Hours</h4>
              <p className="text-gray-300 text-sm">
                Monday - Friday: 9:00am - 5:30pm<br />
                Saturday: 9:00am - 4:00pm<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Bookham Kitchens. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed with <span className="text-accent">♥</span> in Surrey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 