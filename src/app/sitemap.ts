import { allProjects } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = allProjects.map((project) => ({
    url: `https://imnhatnguyen.com/projects/${project.slug}`,
    lastModified: project.publishedAt,
  }));

  const routes = ['', '/projects', '/gallery', '/about'].map((route) => ({
    url: `https://imnhatnguyen.com${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projects];
}
