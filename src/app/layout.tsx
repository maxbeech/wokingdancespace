import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'], 
  variable: '--font-playfair' 
})

export const metadata: Metadata = {
  title: 'Woking Dance Space | Adult Dance Classes in Surrey',
  description: 'Woking Dance Space offers a variety of adult dance classes in Surrey for all abilities, from ballet to tap, contemporary to jazz, in a supportive and creative environment.',
  keywords: 'Woking Dance Space, adult dance classes Surrey, ballet classes, contemporary dance, tap dance, jazz dance, dance studio Surrey, dance shows Woking',
  icons: {
    icon: '/media/favicon.png',
    apple: '/media/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear();
  
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-12">
              <Image
                src="/media/logo-icon_only.png"
                alt="Woking Dance Space Logo"
                width={70}
                height={70}
                className="w-auto h-16 mb-4"
              />
              <h2 className="text-2xl font-bold text-purple-400 mb-2 font-display">Woking Dance Space</h2>
              <p className="text-gray-400 text-center max-w-2xl">
                Empowering adults to explore dance regardless of prior experience, promoting personal development, community, and creative expression since 1982.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400 font-display">Location</h3>
                <p className="text-gray-400">Woking Dance Space</p>
                <p className="text-gray-400">Woking Leisure Centre</p>
                <p className="text-gray-400">Kingfield Road</p>
                <p className="text-gray-400">Woking</p>
                <p className="text-gray-400">GU22 9BA</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400 font-display">Classes</h3>
                <ul className="space-y-2">
                  <li><Link href="/classes/ballet" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Ballet</Link></li>
                  <li><Link href="/classes/contemporary" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Contemporary</Link></li>
                  <li><Link href="/classes/jazz" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Jazz</Link></li>
                  <li><Link href="/classes/tap" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Tap</Link></li>
                  <li><Link href="/classes/schedule" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Class Schedule</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400 font-display">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">About Us</Link></li>
                  <li><Link href="/studio" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Our Studio</Link></li>
                  <li><Link href="/shows" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Shows & Events</Link></li>
                  <li><Link href="/gallery" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Gallery</Link></li>
                  <li><Link href="/news" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">News & Blog</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400 font-display">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    <span className="font-medium text-white">Phone:</span> 07908 465665
                  </li>
                  <li className="text-gray-400">
                    <span className="font-medium text-white">Email:</span> info@wokingdancespace.org.uk
                  </li>
                  <li className="flex space-x-4 mt-6">
                    <a href="https://www.facebook.com/wokingdancespace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110" aria-label="Facebook">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/wokingdancespace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110" aria-label="Instagram">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
              <p>&copy; {currentYear} Woking Dance Space. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors duration-300">Terms & Conditions</Link>
                <Link href="/sitemap" className="hover:text-purple-400 transition-colors duration-300">Sitemap</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 