import { getAllSiteUrls } from '@/lib/sitemap';

export async function GET() {
  const baseUrl = 'https://www.wokingdancespace.org.uk';
  const urls = getAllSiteUrls();
  
  // Generate sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '/' ? '1.0' : url.split('/').length === 2 ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  // Return the XML with proper content type header
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 