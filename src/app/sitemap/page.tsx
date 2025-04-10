'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteStructure } from '@/lib/sitemap';

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
          src="/media/58986724_2202551979864411_7664688461940523008_n.jpg" 
          alt="Woking Dance Space Sitemap" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Sitemap
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              An overview of all the pages on the Woking Dance Space website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function SitemapPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {siteStructure.map((section, sectionIndex) => (
                <div key={section.title} className="space-y-4">
                  <h2 className="text-xl font-bold font-display text-purple-700 border-b border-purple-200 pb-2">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-gray-700 hover:text-purple-600 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <h2 className="text-xl font-bold font-display text-purple-700 mb-6">All Pages A-Z</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {siteStructure.flatMap(section => section.links)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((link, index) => (
                    <div key={`${link.href}-${index}`}>
                      <Link 
                        href={link.href} 
                        className="text-gray-700 hover:text-purple-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                Can't find what you're looking for? Please <Link href="/contact" className="text-purple-600 hover:text-purple-800">contact us</Link> for assistance.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 