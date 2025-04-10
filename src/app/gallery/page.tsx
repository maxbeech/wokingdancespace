'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

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
          src="/media/59635965_2202552183197724_1663965764643717120_n.jpg" 
          alt="Dance gallery at Woking Dance Space" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Gallery
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              Capturing moments of creativity, expression, and joy from our classes, shows, and events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: "/media/32542328_1697574203695527_3784862633073573888_n.jpg",
    alt: "Ballet class at Woking Dance Space",
    category: "Classes",
    width: 1200,
    height: 800
  },
  {
    id: 2,
    src: "/media/32684130_1697574137028867_4529699301814697984_n.jpg",
    alt: "Contemporary dance performance",
    category: "Performances",
    width: 1200,
    height: 800
  },
  {
    id: 3,
    src: "/media/32880565_1697574030362211_2024745422689402880_n.jpg",
    alt: "Jazz dance class",
    category: "Classes",
    width: 1200,
    height: 800
  },
  {
    id: 4,
    src: "/media/32554999_1697576077028673_1437418227033440256_n.jpg",
    alt: "Tap dance performers",
    category: "Performances",
    width: 1200,
    height: 800
  },
  {
    id: 5,
    src: "/media/32557096_1697581503694797_6223945900155207680_n.jpg",
    alt: "Ballet dancers in performance",
    category: "Performances",
    width: 1200,
    height: 800
  },
  {
    id: 6,
    src: "/media/32592842_1697581697028111_591481812010663936_n.jpg",
    alt: "Creative dance workshop",
    category: "Workshops",
    width: 1200,
    height: 800
  },
  {
    id: 7,
    src: "/media/32582015_1697582060361408_6135726739319422976_n.jpg",
    alt: "Contemporary dance class",
    category: "Classes",
    width: 1200,
    height: 800
  },
  {
    id: 8,
    src: "/media/32699955_1697582600361354_4858828830460084224_n.jpg",
    alt: "Dancers in rehearsal",
    category: "Rehearsals",
    width: 1200,
    height: 800
  },
  {
    id: 9,
    src: "/media/32585724_1697582697028011_7151455258936344576_n.jpg",
    alt: "Group photo after performance",
    category: "Performances",
    width: 1200,
    height: 800
  },
  {
    id: 10,
    src: "/media/32675369_1697583180361296_1165318579814400000_n.jpg",
    alt: "Dance show performance",
    category: "Performances",
    width: 1200,
    height: 800
  },
  {
    id: 11,
    src: "/media/32746459_1697584127027868_4542205550795948032_n.jpg",
    alt: "Contemporary dance pose",
    category: "Classes",
    width: 1200,
    height: 800
  },
  {
    id: 12,
    src: "/media/32675361_1697584277027853_7922527031030448128_n.jpg",
    alt: "Ballet dancers at the barre",
    category: "Classes",
    width: 1200,
    height: 800
  },
  {
    id: 13,
    src: "/media/32690302_1697584233694524_684998595962732544_n.jpg",
    alt: "Jazz dance performance",
    category: "Performances",
    width: 1200,
    height: 800
  },
  {
    id: 14,
    src: "/media/32599586_1697584553694492_8655924415155929088_n.jpg",
    alt: "Dance workshop participants",
    category: "Workshops",
    width: 1200,
    height: 800
  },
  {
    id: 15,
    src: "/media/32636786_1697585540361060_8324880606701813760_n.jpg",
    alt: "Tap dance class",
    category: "Classes",
    width: 1200,
    height: 800
  },
  {
    id: 16,
    src: "/media/59379905_2202552093197733_1968728878667005952_n.jpg",
    alt: "Summer showcase performance",
    category: "Performances",
    width: 1200,
    height: 800
  },
  {
    id: 17,
    src: "/media/59488127_2202552029864406_2430191185835327488_n.jpg",
    alt: "Dance rehearsal session",
    category: "Rehearsals",
    width: 1200,
    height: 800
  },
  {
    id: 18,
    src: "/media/316171610_5610032145783027_4215840854848055820_n.jpg",
    alt: "Contemporary dance workshop",
    category: "Workshops",
    width: 1200,
    height: 800
  },
];

// Categories for filtering
const categories = ["All", "Classes", "Performances", "Workshops", "Rehearsals"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Filter images based on selected category
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);
  
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Our Dance Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse through images from our classes, performances, and special events to get a sense of the vibrant dance community at Woking Dance Space.
              </p>
            </div>
            
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <FadeIn key={image.id} delay={0.05 * (index % 8)}>
                <div 
                  className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">{image.alt}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          {/* Image modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-5xl w-full">
                <button 
                  className="absolute right-0 top-0 -mt-12 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
                
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  {galleryImages.find(img => img.id === selectedImage) && (
                    <Image 
                      src={galleryImages.find(img => img.id === selectedImage)!.src} 
                      alt={galleryImages.find(img => img.id === selectedImage)!.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  )}
                </div>
                
                <div className="text-center mt-4 text-white">
                  <p className="text-lg font-medium">
                    {galleryImages.find(img => img.id === selectedImage)?.alt}
                  </p>
                  <p className="text-sm text-gray-300">
                    {galleryImages.find(img => img.id === selectedImage)?.category}
                  </p>
                </div>
                
                {/* Navigation buttons */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-r-md hover:bg-purple-600/70 transition-colors"
                    onClick={() => {
                      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                      setSelectedImage(galleryImages[prevIndex].id);
                    }}
                  >
                    ←
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-l-md hover:bg-purple-600/70 transition-colors"
                    onClick={() => {
                      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                      const nextIndex = (currentIndex + 1) % galleryImages.length;
                      setSelectedImage(galleryImages[nextIndex].id);
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Share Your Photos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Are you a Woking Dance Space member with photos from our classes or performances? We'd love to feature them in our gallery!
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
              >
                Submit Your Photos
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 