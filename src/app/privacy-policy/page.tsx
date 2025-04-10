'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
          src="/media/59285352_2202551896531086_595400389847678976_n.jpg" 
          alt="Woking Dance Space Privacy Policy" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Privacy Policy
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              How we collect, use, and protect your personal information at Woking Dance Space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                This Privacy Policy explains how Woking Dance Space ("we", "our", "us") collects, uses, and protects your personal information when you use our website, register for classes, attend our events, or otherwise interact with us.
              </p>
              <p>
                We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
              
              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Including your name, email address, postal address, phone number, date of birth, and emergency contact details when you register for classes or events.
                </li>
                <li>
                  <strong>Payment Information:</strong> When you make payments for classes, workshops, or events. Note that we do not store complete credit card details on our systems.
                </li>
                <li>
                  <strong>Health Information:</strong> Information about your health or medical conditions that you provide to us to ensure we can accommodate any specific needs or requirements.
                </li>
                <li>
                  <strong>Photography and Video:</strong> Images and footage from classes, performances, and events that may include you.
                </li>
                <li>
                  <strong>Website Usage Data:</strong> Information about how you use our website, including cookies and similar technologies.
                </li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul>
                <li>To administer your registration and manage your account</li>
                <li>To process payments and maintain financial records</li>
                <li>To communicate with you about classes, events, and other services</li>
                <li>To tailor our classes and services to accommodate specific needs</li>
                <li>To promote and market our activities (with your consent where required)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
              
              <h2>Legal Basis for Processing</h2>
              <p>We process your personal information on the following legal bases:</p>
              <ul>
                <li>Performance of a contract when we provide you with classes or services</li>
                <li>Your consent, where you have explicitly provided it</li>
                <li>Our legitimate interests in operating and promoting our dance services</li>
                <li>Compliance with legal obligations</li>
              </ul>
              
              <h2>Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information to third parties. We may share your information with:
              </p>
              <ul>
                <li>Service providers who help us operate our business (e.g., payment processors, IT services)</li>
                <li>Professional advisers (e.g., lawyers, accountants)</li>
                <li>Regulatory authorities, when required by law</li>
              </ul>
              <p>
                All third parties with whom we share your data are required to protect your personal information and comply with data protection laws.
              </p>
              
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. While we strive to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
              
              <h2>Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. For inactive accounts, we typically retain basic information for up to [X] years after your last interaction with us.
              </p>
              
              <h2>Your Rights</h2>
              <p>Under data protection laws, you have rights including:</p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the details provided below.
              </p>
              
              <h2>Cookies and Similar Technologies</h2>
              <p>
                Our website uses cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookies through your browser settings.
              </p>
              
              <h2>Children's Privacy</h2>
              <p>
                Our services are intended for adults. We do not knowingly collect personal information from individuals under 18 years of age without parental consent. If you are a parent or guardian and believe we have collected information from your child, please contact us.
              </p>
              
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The current version will always be available on our website. We encourage you to review this policy periodically to stay informed about how we protect your personal information.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <address>
                Woking Dance Space<br />
                Woking Leisure Centre<br />
                Kingfield Road<br />
                Woking<br />
                GU22 9BA<br /><br />
                Email: info@wokingdancespace.org.uk<br />
                Phone: 07908 465665
              </address>
              
              <p className="text-gray-500 mt-12 text-sm">
                Last Updated: March 1, 2025
              </p>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-8">
              <Link 
                href="/contact" 
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                Contact Us With Privacy Questions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 