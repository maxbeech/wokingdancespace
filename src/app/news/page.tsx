'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';

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
          src="/media/59519541_2202552013197741_429893713427169280_n.jpg" 
          alt="Woking Dance Space Blog and News" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              News & Blog
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              Stay updated with the latest news, events, and insights from the Woking Dance Space community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// News and blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Summer Showcase 2025 - Call for Participants",
    date: "March 15, 2025",
    excerpt: "We're excited to announce our annual Summer Showcase will be held on June 28, 2025. All classes are invited to participate in this celebration of dance!",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.",
    image: "/media/32599586_1697584553694492_8655924415155929088_n.jpg",
    author: "Sarah Johnson",
    category: "Events",
    slug: "summer-showcase-2025"
  },
  {
    id: 2,
    title: "New Contemporary Dance Class Starting in April",
    date: "February 28, 2025",
    excerpt: "We're thrilled to introduce a new Contemporary Dance class starting in April, perfect for beginners looking to explore this expressive dance style.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.",
    image: "/media/463627859_8464189693700577_8925436750596636106_n.jpg",
    author: "Michael Chen",
    category: "Classes",
    slug: "new-contemporary-class"
  },
  {
    id: 3,
    title: "The Benefits of Adult Dance Classes",
    date: "January 15, 2025",
    excerpt: "Discover the many physical, mental, and social benefits of taking up dance as an adult, from improved fitness to reduced stress and new friendships.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.",
    image: "/media/464172219_8498896196896593_3918902627713962926_n.jpg",
    author: "Emma Williams",
    category: "Wellness",
    slug: "benefits-of-adult-dance"
  },
  {
    id: 4,
    title: "Winter Spectacular 2024 - Recap",
    date: "December 20, 2024",
    excerpt: "Our Winter Spectacular was a huge success! Read about the performances, see photos, and join us in celebrating our amazing dancers.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.",
    image: "/media/316180614_5610031842449724_1004370439022595399_n.jpg",
    author: "David Thompson",
    category: "Events",
    slug: "winter-spectacular-2024-recap"
  },
  {
    id: 5,
    title: "Interview with Our Ballet Teacher",
    date: "November 10, 2024",
    excerpt: "Meet Jane Smith, our dedicated ballet teacher with over 20 years of experience. Learn about her dance journey and teaching philosophy.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.",
    image: "/media/32675361_1697584277027853_7922527031030448128_n.jpg",
    author: "Laura Davis",
    category: "Interviews",
    slug: "ballet-teacher-interview"
  },
  {
    id: 6,
    title: "5 Tips for New Adult Dancers",
    date: "October 5, 2024",
    excerpt: "Starting dance as an adult can be intimidating. Here are our top 5 tips to help you feel confident and get the most out of your dance classes.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.",
    image: "/media/32582015_1697582060361408_6135726739319422976_n.jpg",
    author: "Sarah Johnson",
    category: "Tips",
    slug: "tips-for-new-dancers"
  },
];

// Categories for filtering
const categories = ["All", "Events", "Classes", "Wellness", "Interviews", "Tips"];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts
    .filter(post => selectedCategory === "All" || post.category === selectedCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-2/3">
              <FadeIn>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Latest News & Articles</h2>
                </div>
              </FadeIn>
              
              {/* Blog posts grid */}
              <div className="space-y-10">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <FadeIn key={post.id} delay={0.1 * (index % 3)}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="relative h-60 md:h-auto">
                            <Image 
                              src={post.image} 
                              alt={post.title} 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 md:col-span-2">
                            <div className="flex items-center text-gray-500 text-sm mb-2">
                              <FaCalendarAlt className="mr-2 text-purple-600" />
                              <span>{post.date}</span>
                              <span className="mx-2">•</span>
                              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                                {post.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 font-display">
                              <a href={`/news/${post.slug}`} className="hover:text-purple-600 transition-colors">
                                {post.title}
                              </a>
                            </h3>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-500">By {post.author}</span>
                              <a 
                                href={`/news/${post.slug}`} 
                                className="text-purple-600 hover:text-purple-800 font-medium"
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No posts found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                {/* Search box */}
                <FadeIn delay={0.1}>
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-bold mb-4 font-display">Search</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>
                  </div>
                </FadeIn>
                
                {/* Categories */}
                <FadeIn delay={0.2}>
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-bold mb-4 font-display">Categories</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                            selectedCategory === category
                              ? 'bg-purple-600 text-white'
                              : 'text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </FadeIn>
                
                {/* Newsletter signup */}
                <FadeIn delay={0.3}>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4 font-display">Stay Updated</h3>
                    <p className="text-gray-700 mb-4">
                      Subscribe to our newsletter to receive the latest news and updates from Woking Dance Space.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 