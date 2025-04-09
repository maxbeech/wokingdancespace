'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import OptimizedImage from '../OptimizedImage';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  yOffset?: number;
}

export default function ParallaxImage({ 
  src, 
  alt, 
  className = '', 
  yOffset = 50 
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative overflow-hidden ${className}`}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
} 