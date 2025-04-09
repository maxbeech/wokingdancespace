'use client';
import React from 'react';
import Image, { ImageProps } from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  quality?: number;
};

/**
 * OptimizedImage component handles both local and remote images consistently
 * It automatically detects if an image is local (starts with /) or remote (starts with http)
 */
export default function OptimizedImage({ 
  src, 
  alt, 
  quality = 85, // Default quality for optimized images
  ...props 
}: OptimizedImageProps) {
  // Check if this is a local image (starts with /)
  const isLocalImage = src.startsWith('/');
  
  return (
    <Image
      src={src}
      alt={alt || 'Grafton Tennis and Squash Club image'}
      quality={quality}
      {...props}
      loading={props.loading || "lazy"} // Default to lazy loading
      // Use proper image sizes based on typical device widths
      sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
    />
  );
} 