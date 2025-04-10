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
          src="/media/32737330_1697585587027722_2471519405561872384_n.jpg" 
          alt="Woking Dance Space Terms and Conditions" 
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="relative z-20 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Terms & Conditions
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              The terms and conditions that apply to our classes, events, and website usage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TermsPage() {
  return (
    <>
      <PageHeader />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              <h2>1. Introduction</h2>
              <p>
                These Terms and Conditions govern your use of the Woking Dance Space website, registration for and participation in our classes, workshops, and events, and any other services we provide.
              </p>
              <p>
                By using our website, registering for a class, or participating in our activities, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use our services.
              </p>
              
              <h2>2. Class Registration and Payment</h2>
              <h3>2.1 Registration</h3>
              <p>
                Registration for classes is on a first-come, first-served basis. A place in a class is only secured upon receipt of full payment. We reserve the right to refuse registration at our discretion.
              </p>
              
              <h3>2.2 Payment</h3>
              <p>
                Payment for classes can be made via the methods specified on our website or at our studio. All payments must be made in advance of attending classes. Term fees must be paid in full by the specified deadline.
              </p>
              
              <h3>2.3 Pricing and Fee Changes</h3>
              <p>
                All prices shown on our website are in Pounds Sterling (£) and include VAT where applicable. We reserve the right to change our pricing at any time, but any changes will not affect classes that have already been paid for.
              </p>
              
              <h2>3. Cancellations, Refunds, and Changes</h2>
              <h3>3.1 Cancellations by You</h3>
              <p>
                Class fees are non-refundable except in exceptional circumstances, which will be considered on a case-by-case basis. If you're unable to attend a class, you must notify us at least 24 hours in advance.
              </p>
              
              <h3>3.2 Cancellations by Us</h3>
              <p>
                We reserve the right to cancel or reschedule classes if necessary. In the event of cancellation by us, we will offer a credit for a future class or a refund, at our discretion.
              </p>
              
              <h3>3.3 Changes to Schedule</h3>
              <p>
                We reserve the right to change the class schedule, instructors, or venue if necessary. We will endeavor to give as much notice as possible of any changes.
              </p>
              
              <h2>4. Health and Safety</h2>
              <h3>4.1 Health Conditions</h3>
              <p>
                Participants must inform us of any health conditions, injuries, or medications that may affect their participation in classes. By attending our classes, you confirm that you are physically fit to participate.
              </p>
              
              <h3>4.2 Safety Guidelines</h3>
              <p>
                You must follow all safety guidelines provided by instructors. Woking Dance Space is not responsible for any injury sustained during classes if safety guidelines were not followed.
              </p>
              
              <h3>4.3 Personal Property</h3>
              <p>
                Woking Dance Space is not responsible for any loss or damage to personal property while attending our classes or events.
              </p>
              
              <h2>5. Conduct and Behavior</h2>
              <p>
                We expect all participants to conduct themselves in a respectful manner towards instructors and other participants. We reserve the right to ask any participant who behaves inappropriately to leave the class without refund.
              </p>
              
              <h2>6. Photography and Filming</h2>
              <p>
                By attending our classes or events, you grant us permission to use photographs or videos that may include your image for promotional purposes. If you do not consent to this, please inform us in writing.
              </p>
              <p>
                Participants are not permitted to take photographs or videos during classes without prior permission from us and all participants involved.
              </p>
              
              <h2>7. Website Usage</h2>
              <h3>7.1 Content</h3>
              <p>
                All content on our website is owned by or licensed to Woking Dance Space and is protected by copyright and other intellectual property rights. You may not reproduce, distribute, or create derivative works from this content without our permission.
              </p>
              
              <h3>7.2 User Accounts</h3>
              <p>
                If you create an account on our website, you are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.
              </p>
              
              <h3>7.3 Links to Third-Party Websites</h3>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites.
              </p>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Woking Dance Space shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or participation in our activities.
              </p>
              
              <h2>9. Changes to Terms and Conditions</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the updated Terms and Conditions.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
              
              <h2>11. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
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
                Contact Us With Questions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 