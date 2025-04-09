'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface HeroHeadingProps {
  title: string;
  className?: string;
}

export default function HeroHeading({ title, className = '' }: HeroHeadingProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Split the title by spaces to animate each word
  const words = title.split(' ');

  // Animation configuration
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04
      }
    }
  };

  const child = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.h1
      ref={ref}
      className={`${className} overflow-hidden`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block mr-[0.25em] overflow-hidden">
          <motion.span 
            className="inline-block"
            variants={child}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
} 