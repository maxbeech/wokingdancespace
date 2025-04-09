'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FoxLogoProps {
  width?: number;
  height?: number;
  className?: string;
  animate?: boolean;
}

export default function FoxLogo({ 
  width = 60, 
  height = 60, 
  className = '',
  animate = true
}: FoxLogoProps) {
  
  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };
  
  return (
    <motion.div 
      className={`relative ${className}`}
      style={{ width, height }}
      initial="initial"
      whileHover={animate ? "hover" : "initial"}
      variants={logoVariants}
    >
      <Image
        src="/images/fox-logo.svg"
        alt="Grafton Fox Logo"
        width={width}
        height={height}
        className="h-auto w-auto"
        priority
      />
    </motion.div>
  );
} 