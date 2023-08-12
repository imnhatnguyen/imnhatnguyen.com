import { allProjects } from 'contentlayer/generated';
import { compareDesc, format } from 'date-fns';
import type { Metadata } from 'next';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import CloudImage from '@/components/images/CloudImage';

export const metadata: Metadata = {
  title: 'Project',
  description: 'Showcase of projects that I built',
};

export default async function ProjectPage() {
  const posts = allProjects.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <>
      <h1 className='mb-7'>Projects</h1>
      <div className='grid gap-6 sm:grid-cols-2 sm:gap-y-14 xl:grid-cols-3'>
        {posts.map((post) => (
          <Link key={post.slug} href={`/projects/${post.slug}`}>
            <CloudImage
              className='pointer-events-none'
              id={post.image}
              alt={post.title}
              width={550}
              height={(550 * 1) / 2}
              hasCaption={false}
              priority
            />
            <div className='px-2 py-3 space-y-1'>
              <Balancer className='text-base font-semibold'>
                {post.title}
              </Balancer>
              <p className='text-gray-500 dark:text-gray-400'>
                {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
