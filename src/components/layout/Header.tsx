'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Kitchens', 
    path: '/kitchens',
    subItems: [
      { name: 'Fitted Kitchens', path: '/kitchens/fitted' },
      { name: 'Replacement Doors', path: '/kitchens/replacement-doors' },
      { name: 'Cabinet Spray Painting', path: '/kitchens/cabinet-spray-painting' },
      { name: 'Kitchen Design Process', path: '/kitchens/design-process' },
    ] 
  },
  { 
    name: 'Home Living', 
    path: '/home-living',
    subItems: [
      { name: 'Bedroom Cabinets', path: '/home-living/bedroom-cabinets' },
      { name: 'Home Office', path: '/home-living/home-office' },
      { name: 'Bespoke Furniture', path: '/home-living/bespoke-furniture' },
    ] 
  },
  { 
    name: 'Building Services', 
    path: '/building-services',
    subItems: [
      { name: 'Kitchen Installation', path: '/building-services/kitchen-installation' },
      { name: 'Home Renovations', path: '/building-services/renovations' },
      { name: 'Extensions', path: '/building-services/extensions' },
    ] 
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <p>Family-run bespoke kitchen design & installation services in Surrey</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+441932391183" className="flex items-center text-sm hover:text-accent transition-colors">
                <FaPhone className="mr-2 h-3 w-3" />
                <span>01932 391183</span>
              </a>
              <a href="mailto:sales@bookhamkitchens.co.uk" className="flex items-center text-sm hover:text-accent transition-colors">
                <FaEnvelope className="mr-2 h-3 w-3" />
                <span>sales@bookhamkitchens.co.uk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'} sticky top-0 left-0 w-full z-50 transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/media/logo.png"
                alt="Bookham Kitchens Logo"
                width={180}
                height={50}
                className="h-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-6">
                {navItems.slice(1).map((item) => (
                  <li key={item.name} className="relative group">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className={`px-3 py-2 rounded text-sm font-medium transition-colors hover:text-secondary relative
                            ${pathname.startsWith(item.path) ? 'text-secondary' : 'text-primary'}`}
                        >
                          {item.name}
                          <span className="ml-1 text-xs opacity-70">▼</span>
                          
                          {/* Animated underline */}
                          {pathname.startsWith(item.path) && (
                            <motion.div 
                              className="absolute bottom-0 left-0 h-0.5 bg-secondary"
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </button>
                        <AnimatePresence>
                          {(activeDropdown === item.name) && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 mt-1 w-64 rounded-md shadow-custom bg-white z-50 overflow-hidden"
                              onMouseEnter={() => setActiveDropdown(item.name)}
                              onMouseLeave={() => setActiveDropdown(null)}
                            >
                              <div className="py-2">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.path}
                                    className={`block px-4 py-3 text-sm hover:bg-accent/10 transition-colors
                                      ${pathname === subItem.path ? 'text-secondary font-medium bg-accent/5' : 'text-primary'}`}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`px-3 py-2 rounded text-sm font-medium transition-colors hover:text-secondary relative
                          ${pathname === item.path ? 'text-secondary' : 'text-primary'}`}
                      >
                        {item.name}
                        
                        {/* Animated underline */}
                        {pathname === item.path && (
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link 
                    href="/contact"
                    className="ml-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-700 transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-primary hover:text-secondary focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation - update to match desktop changes */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden bg-white shadow-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-3 space-y-1">
                {/* Start mobile navigation from index 1 to skip the redundant Home link */}
                {navItems.slice(1).map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className={`w-full text-left px-3 py-3 rounded text-base font-medium flex justify-between items-center
                            ${pathname.startsWith(item.path) ? 'text-secondary' : 'text-primary'}`}
                        >
                          {item.name}
                          <span className="ml-1 text-xs">{activeDropdown === item.name ? '▲' : '▼'}</span>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 space-y-1 border-l-2 border-accent ml-3 mt-1 mb-2"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className={`block px-3 py-2 rounded text-base 
                                    ${pathname === subItem.path ? 'text-secondary font-medium' : 'text-primary/80'}`}
                                  onClick={toggleMobileMenu}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                              
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`block px-3 py-3 rounded text-base font-medium 
                          ${pathname === item.path ? 'text-secondary' : 'text-primary'}`}
                        onClick={toggleMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-3 bg-primary text-white rounded hover:bg-primary-700 transition-colors text-base font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Get a Quote
                  </Link>
                  <div className="mt-4 flex flex-col space-y-2">
                    <a href="tel:+441932391183" className="flex items-center text-sm text-primary hover:text-secondary transition-colors">
                      <FaPhone className="mr-2 h-3 w-3" />
                      <span>01932 391183</span>
                    </a>
                    <a href="mailto:sales@bookhamkitchens.co.uk" className="flex items-center text-sm text-primary hover:text-secondary transition-colors">
                      <FaEnvelope className="mr-2 h-3 w-3" />
                      <span>sales@bookhamkitchens.co.uk</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
} 