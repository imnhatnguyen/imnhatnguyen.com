import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://masonjnguyen.com',
    sitemap: 'https://masonjnguyen.com/sitemap.xml',
  };
}
