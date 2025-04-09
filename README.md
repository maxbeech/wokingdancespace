# Grafton Tennis and Squash Club Website

A modern, responsive website for Grafton Tennis and Squash Club, established in 1888.

## Features

- Modern, responsive design optimized for all devices
- SEO-friendly structure
- Information about tennis and squash facilities
- Coaching program details
- Membership information
- Club news and events
- Contact information

## Technologies Used

- Next.js - React framework
- TypeScript - Type safety
- Tailwind CSS - Styling
- Vercel - Hosting and deployment

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Image Handling

The website uses Next.js Image Optimization for efficient image loading and delivery:

### Local Images

Images are stored in the `/public/images` directory. These images are:
- Automatically optimized by Next.js
- Served with proper formats and sizes based on the client device
- Lazy-loaded for better performance

### Adding New Images

To add new images to the website:

1. Place image files in the `/public/images` directory
2. Reference them in components using the path `/images/your-image.jpg`
3. Use the Next.js Image component for optimal delivery:

```jsx
import Image from 'next/image';

<Image 
  src="/images/example.jpg" 
  alt="Description" 
  width={800} 
  height={600} 
  className="object-cover" 
/>
```

### Admin Interface

For content managers, we've created a simple admin interface at `/admin` that demonstrates how images can be uploaded and managed. In a production environment, this would be expanded with authentication and more robust image management capabilities.

## Deployment

The website is deployed to Vercel for optimal performance:

1. Push changes to the GitHub repository
2. Vercel automatically builds and deploys the site
3. Visit the live site at [https://grafton-tennis-squash.vercel.app](https://grafton-tennis-squash.vercel.app)

## License

All rights reserved. This site was created for Grafton Tennis and Squash Club. 