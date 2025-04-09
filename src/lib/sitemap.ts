// Define the website structure types
export interface SitemapLink {
  name: string;
  href: string;
}

export interface SitemapSection {
  title: string;
  links: SitemapLink[];
}

// Define the website structure
export const siteStructure: SitemapSection[] = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Our Studio', href: '/studio' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'News & Blog', href: '/news' },
      { name: 'Contact', href: '/contact' },
    ]
  },
  {
    title: 'About Us',
    links: [
      { name: 'Our Story', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Values & Mission', href: '/about/mission' },
    ]
  },
  {
    title: 'Dance Classes',
    links: [
      { name: 'Classes Overview', href: '/classes' },
      { name: 'Ballet', href: '/classes/ballet' },
      { name: 'Contemporary', href: '/classes/contemporary' },
      { name: 'Jazz', href: '/classes/jazz' },
      { name: 'Tap', href: '/classes/tap' },
      { name: 'Creative Dance', href: '/classes/creative' },
      { name: 'Pilates & Fitness', href: '/classes/fitness' },
      { name: 'Class Schedule', href: '/classes/schedule' },
      { name: 'Class Pricing', href: '/classes/pricing' },
      { name: 'Register for a Class', href: '/classes/register' },
    ]
  },
  {
    title: 'Shows & Events',
    links: [
      { name: 'Shows & Events Overview', href: '/shows' },
      { name: 'Upcoming Shows', href: '/shows' },
      { name: 'Past Productions', href: '/shows/archive' },
      { name: 'Workshops', href: '/shows/workshops' },
      { name: 'Summer Showcase', href: '/shows/summer-showcase' },
      { name: 'Winter Spectacular', href: '/shows/winter-spectacular' },
    ]
  },
  {
    title: 'Legal & Info',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Sitemap', href: '/sitemap' },
    ]
  },
];

// Function to get all site URLs for sitemap.xml generation
export function getAllSiteUrls(): string[] {
  const urls: string[] = [];
  
  siteStructure.forEach(section => {
    section.links.forEach(link => {
      if (!urls.includes(link.href)) {
        urls.push(link.href);
      }
    });
  });
  
  return urls;
}

// Function to get a flat list of all pages
export function getAllPages(): SitemapLink[] {
  const allPages: SitemapLink[] = [];
  
  siteStructure.forEach(section => {
    section.links.forEach(link => {
      // Check if the page is already in the list to avoid duplicates
      if (!allPages.some(page => page.href === link.href)) {
        allPages.push(link);
      }
    });
  });
  
  // Sort by URL path
  return allPages.sort((a, b) => a.href.localeCompare(b.href));
}

// Function to find a page by its URL
export function findPageByUrl(url: string): SitemapLink | undefined {
  for (const section of siteStructure) {
    for (const link of section.links) {
      if (link.href === url) {
        return link;
      }
    }
  }
  return undefined;
}

// Function to get all child pages of a given URL
export function getChildPages(parentUrl: string): SitemapLink[] {
  return getAllPages().filter(page => 
    page.href.startsWith(parentUrl) && 
    page.href !== parentUrl && 
    !page.href.substring(parentUrl.length + 1).includes('/')
  );
} 