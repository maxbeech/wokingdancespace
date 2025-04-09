import Link from 'next/link';
import { siteStructure } from '@/lib/sitemap';

const SitemapPage = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-display">Sitemap</h1>
          <p className="text-lg text-gray-600">
            Use this page to navigate to any section of our website. If you can't find what you're looking for, please <Link href="/contact" className="text-purple-600 hover:text-purple-800">contact us</Link>.
          </p>
        </div>

        <div className="space-y-12">
          {siteStructure.map((section, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-display">{section.title}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-purple-600 hover:text-purple-800 hover:underline flex items-center"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 mr-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" 
                        />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SitemapPage; 