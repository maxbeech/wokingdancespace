'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, HelpCircle, ChevronRight } from 'lucide-react';
import './styles.css';

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

// Price card component
interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

const PriceCard: React.FC<PriceCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  delay = 0
}) => {
  return (
    <FadeIn delay={delay}>
      <div className={`border rounded-lg overflow-hidden h-full flex flex-col ${
        isPopular ? 'border-purple-400 shadow-lg' : 'border-gray-200'
      }`}>
        {isPopular && (
          <div className="bg-purple-500 text-white py-2 px-4 text-sm font-bold text-center">
            Most Popular
          </div>
        )}
        <div className={`px-6 py-8 ${isPopular ? 'bg-purple-50' : 'bg-white'}`}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-extrabold">{price}</span>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Link
              href="/classes/register"
              className={`w-full inline-block text-center py-3 px-6 rounded-md font-medium ${
                isPopular 
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-white border border-purple-600 text-purple-600 hover:text-purple-700 hover:border-purple-700'
              } transition-colors`}
            >
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

// FAQ Item component
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <svg
          className={`h-6 w-6 text-purple-500 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const PricingPage: React.FC = () => {
  const classPricing = [
    {
      title: "Single Class",
      price: "£13",
      description: "Perfect for trying out classes or occasional attendance.",
      features: [
        "Access to any one class",
        "No long-term commitment",
        "Booking up to 7 days in advance",
        "Valid for one class only"
      ],
      isPopular: false
    },
    {
      title: "5 Class Card",
      price: "£60",
      description: "Great value for regular dancers who attend 1-2 classes per week.",
      features: [
        "£12 per class (save £5)",
        "Valid for 3 months from purchase",
        "Access to any class type",
        "Priority booking",
        "Flexible attendance"
      ],
      isPopular: true
    },
    {
      title: "10 Class Card",
      price: "£110",
      description: "Best value for frequent dancers taking multiple classes per week.",
      features: [
        "£11 per class (save £20)",
        "Valid for 6 months from purchase",
        "Access to any class type",
        "Priority booking",
        "Flexible attendance",
        "Free dance workshop"
      ],
      isPopular: false
    },
    {
      title: "Monthly Unlimited",
      price: "£95",
      description: "For dedicated dancers looking to take multiple classes each week.",
      features: [
        "Unlimited classes for 30 days",
        "Best value for 8+ classes per month",
        "Access to all class types",
        "Priority booking for workshops",
        "10% discount on special events"
      ],
      isPopular: false
    }
  ];

  const faqItems = [
    {
      question: "How do I purchase a class package?",
      answer: "You can purchase any class package online through our booking system, in person at the studio before or after any class, or by phone. We accept all major credit cards, cash, and bank transfers."
    },
    {
      question: "Can I share my class card with a friend?",
      answer: "Class cards and packages are non-transferable and can only be used by the person who purchased them. Each student needs their own class card or package."
    },
    {
      question: "Do class cards expire?",
      answer: "Yes, 5-class cards are valid for 3 months from the purchase date, and 10-class cards are valid for 6 months. Monthly unlimited passes are valid for 30 consecutive days from activation."
    },
    {
      question: "What happens if I miss a class I've booked?",
      answer: "We require at least 24 hours notice for cancellations to avoid being charged for the class. With proper notice, the class will be returned to your card. Exceptions may be made for illness or emergencies at the studio's discretion."
    },
    {
      question: "Are there any discounts available?",
      answer: "We offer student and senior discounts (10% off) with valid ID. We also have special rates for dancers working in the industry. Please contact us for details."
    },
    {
      question: "Can I upgrade my package partway through?",
      answer: "Yes, you can upgrade from a smaller to a larger package. The value of your remaining classes will be applied to the new package. Please contact us directly to arrange an upgrade."
    }
  ];

  const specialOffers = [
    {
      title: "New Student Special",
      description: "Try 3 classes for £30 (£10 per class)",
      validityPeriod: "Valid for 3 weeks from first class",
      terms: "For new students only. One-time offer."
    },
    {
      title: "Student & Senior Discount",
      description: "10% off all class packages",
      validityPeriod: "Valid with current ID",
      terms: "Must present valid student or senior ID (60+)."
    },
    {
      title: "Refer a Friend",
      description: "Receive a free class when your friend purchases a 5 or 10 class card",
      validityPeriod: "Valid anytime",
      terms: "Friend must be a new student to the studio."
    },
    {
      title: "Loyalty Reward",
      description: "Every 10th class free for regular single-class purchases",
      validityPeriod: "Tracked automatically in our system",
      terms: "Applies to single class purchases only."
    }
  ];

  return (
    <div className="pricing-container min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your dance journey. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="price-cards-container grid md:grid-cols-3 gap-8 mb-20">
          {/* Basic Plan */}
          <div className="price-card bg-slate-900/50 border border-slate-700 rounded-2xl p-8 flex flex-col fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <p className="text-gray-400 mb-6">Perfect for beginners</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">£35</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>1 class per week</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Access to beginner classes</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Online community access</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Email support</span>
              </li>
            </ul>
            <button className="outline-btn text-[#8884ff] py-3 px-6 rounded-lg font-medium">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="price-card popular bg-slate-900/50 border-2 rounded-2xl p-8 flex flex-col relative fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8884ff] py-1 px-4 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <p className="text-gray-400 mb-6">For dedicated dancers</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">£65</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>3 classes per week</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Access to all class levels</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>1 private lesson per month</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Class recordings access</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Priority email support</span>
              </li>
            </ul>
            <button className="gradient-btn py-3 px-6 rounded-lg font-medium glow-effect">
              Get Started
            </button>
          </div>

          {/* Elite Plan */}
          <div className="price-card bg-slate-900/50 border border-slate-700 rounded-2xl p-8 flex flex-col fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-2">Elite</h3>
            <p className="text-gray-400 mb-6">For serious performers</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">£120</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Unlimited classes</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Access to exclusive master classes</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>3 private lessons per month</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Performance opportunities</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Personalized progress tracking</span>
              </li>
              <li className="flex items-start mb-3">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>24/7 VIP support</span>
              </li>
            </ul>
            <button className="outline-btn text-[#8884ff] py-3 px-6 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>

        {/* Special Offer */}
        <div className="special-offer rounded-2xl p-8 mb-20 fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Pay Yearly and Save 15%</h3>
              <p className="text-gray-300">
                Commit to your dance journey and enjoy significant savings with annual billing.
              </p>
            </div>
            <button className="gradient-btn py-3 px-6 rounded-lg font-medium">
              View Yearly Plans
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-20 fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center">Payment Methods</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="method-of-payment bg-slate-800/50 rounded-xl p-6 text-center">
              <img 
                src="/media/visa.svg" 
                alt="Visa" 
                className="h-10 mx-auto mb-3" 
              />
              <p>Visa</p>
            </div>
            <div className="method-of-payment bg-slate-800/50 rounded-xl p-6 text-center">
              <img 
                src="/media/mastercard.svg" 
                alt="Mastercard" 
                className="h-10 mx-auto mb-3" 
              />
              <p>Mastercard</p>
            </div>
            <div className="method-of-payment bg-slate-800/50 rounded-xl p-6 text-center">
              <img 
                src="/media/paypal.svg" 
                alt="PayPal" 
                className="h-10 mx-auto mb-3" 
              />
              <p>PayPal</p>
            </div>
            <div className="method-of-payment bg-slate-800/50 rounded-xl p-6 text-center">
              <img 
                src="/media/apple-pay.svg" 
                alt="Apple Pay" 
                className="h-10 mx-auto mb-3" 
              />
              <p>Apple Pay</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="faq-item mb-6 border-b border-slate-700 pb-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-[#8884ff] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Can I switch between plans?</h3>
                    <p className="text-gray-300">
                      Yes, you can upgrade or downgrade your plan at any time. The changes will take effect at the start of your next billing cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-item mb-6 border-b border-slate-700 pb-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-[#8884ff] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What happens if I miss a class?</h3>
                    <p className="text-gray-300">
                      Life happens! If you miss a class, you can catch up with our recorded sessions or schedule a makeup class (available for Professional and Elite plans).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-item mb-6 border-b border-slate-700 pb-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-[#8884ff] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Is there a cancellation fee?</h3>
                    <p className="text-gray-300">
                      No, there are no cancellation fees. You can cancel your subscription at any time, and you'll continue to have access until the end of your current billing period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-item mb-6 border-b border-slate-700 pb-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-[#8884ff] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Do you offer discounts for students or seniors?</h3>
                    <p className="text-gray-300">
                      Yes, we offer a 10% discount for students and seniors. Please contact our support team with proof of eligibility to receive your discount code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-[#8884ff] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">How do private lessons work?</h3>
                    <p className="text-gray-300">
                      Private lessons are conducted one-on-one with our professional instructors. You can schedule them at your convenience through our booking system, subject to instructor availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Dance Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community of passionate dancers and discover the joy of dance with Woking Dance Space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="gradient-btn py-3 px-8 rounded-lg font-medium glow-effect">
              Sign Up Now
            </button>
            <button className="outline-btn text-[#8884ff] py-3 px-8 rounded-lg font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 