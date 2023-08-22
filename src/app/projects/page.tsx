import { allProjects, Project } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import type { Metadata } from 'next';

import ProjectCard from '@/components/layouts/ProjectCard';

export const metadata: Metadata = {
  title: 'Project',
  description: 'Showcase of projects that I built',
};

export default async function ProjectPage() {
  const posts = allProjects.sort((a: Project, b: Project) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <>
      <header>
        <h1 className='mb-7'>Projects</h1>
      </header>
      <main className='grid gap-6 sm:grid-cols-2 sm:gap-y-14 xl:grid-cols-3'>
        {posts.map((post: Project) => (
          <ProjectCard key={post.slug} post={post} />
        ))}
      </main>
    </>
  );
}
