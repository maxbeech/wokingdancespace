'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Navigation structure with dropdown menus
  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      children: [
        { name: 'Our Story', href: '/about' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Facilities', href: '/about/facilities' },
        { name: 'Values & Mission', href: '/about/values' },
        { name: 'Ofsted', href: '/about/ofsted' },
      ],
    },
    {
      name: 'Programs & Services', 
      href: '/programs',
      children: [
        { name: 'Holiday Club', href: '/programs/holiday-club' },
        { name: 'After School Club', href: '/programs/after-school' },
        { name: 'Breakfast Club', href: '/programs/breakfast' },
        { name: 'Preschool', href: '/programs/preschool' },
        { name: 'Wraparound Care', href: '/programs/wraparound' },
      ],
    },
    {
      name: 'Parents',
      href: '/parents',
      children: [
        { name: 'Admissions', href: '/parents/admissions' },
        { name: 'Fees', href: '/parents/fees' },
        { name: 'FAQs', href: '/parents/faqs' },
        { name: 'Policies', href: '/parents/policies' },
        { name: 'Term Dates', href: '/parents/term-dates' },
      ],
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/media/logo-icon_only.png"
                alt="Bisley Base Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-emerald-700' : 'text-white'
                }`}>
                  Bisley Base
                </span>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-emerald-600' : 'text-emerald-100'
                }`}>
                  Childcare & Preschool
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigation.map((item) => (
              !item.children ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-3 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                    pathname === item.href
                      ? isScrolled
                        ? 'text-emerald-700 bg-emerald-50'
                        : 'text-white bg-white/10 backdrop-blur-sm'
                      : isScrolled
                        ? 'text-gray-700 hover:text-emerald-700'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <Popover key={item.name} className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`group inline-flex items-center px-3 py-3 text-sm font-medium rounded-md outline-none transition-all duration-300 hover:scale-105 ${
                          pathname?.startsWith(item.href)
                            ? isScrolled
                              ? 'text-emerald-700 bg-emerald-50'
                              : 'text-white bg-white/10 backdrop-blur-sm'
                            : isScrolled
                              ? 'text-gray-700 hover:text-emerald-700'
                              : 'text-white hover:bg-white/10'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                            open ? 'rotate-180' : ''
                          } ${
                            isScrolled ? 'text-emerald-700' : 'text-white'
                          }`}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 mt-2 w-56 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-1 bg-white p-2">
                              {item.children.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              )
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-200'
              }`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mobile-menu-container bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 divide-y divide-gray-100">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  {!item.children ? (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === item.href
                          ? 'text-emerald-700 bg-emerald-50'
                          : 'text-gray-900 hover:text-emerald-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="space-y-1">
                      <p className="px-3 py-2 text-base font-medium text-gray-900">
                        {item.name}
                      </p>
                      <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="w-full block text-center px-4 py-2 rounded-md text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Tour
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 