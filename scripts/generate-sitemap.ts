
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://nss-bits-pilani.org';

const routes = [
    '/',
    '/departments',
    '/office-bearers',
    '/gallery',
    '/school',
    '/umang',
    '/parisodh',
    '/health-public-awareness',
    '/department-of-sponsorship-and-collaboration',
    '/department-of-design-and-development',
    '/computer-literacy-programme',
    '/events',
    '/junoon',
    '/shop-for-smile',
    '/blood-donation-camp',
    '/conferencia-de-youth',
    '/sponsors',
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
            .map((route) => {
                return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('\n')}
</urlset>`;

    const publicDir = path.resolve(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Generated public/sitemap.xml');
};

const generateRobotsTxt = () => {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

    const publicDir = path.resolve(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
    console.log('✅ Generated public/robots.txt');
};

generateSitemap();
generateRobotsTxt();
