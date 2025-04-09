'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FoxLogo from './FoxLogo';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

interface HistoricTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export default function HistoricTimeline({ events, className = '' }: HistoricTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30"></div>
      
      {events.map((event, index) => (
        <TimelineItem 
          key={index} 
          event={event} 
          index={index} 
        />
      ))}
    </div>
  );
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const isEven = index % 2 === 0;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Date circle */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
        <FoxLogo width={24} height={24} animate={false} />
      </div>

      {/* Content */}
      <div className={`${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10'} pl-16 md:pl-0 md:w-1/2 pt-1`}>
        <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded mb-2">
          {event.year}
        </div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </motion.div>
  );
} 