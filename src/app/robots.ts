import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://imnhatnguyen.com',
    sitemap: 'https://imnhatnguyen.com/sitemap.xml',
  };
}
