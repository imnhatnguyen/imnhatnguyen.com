import { Project } from 'contentlayer/generated';
import { format } from 'date-fns';
import Link from 'next/link';
import * as React from 'react';
import Balancer from 'react-wrap-balancer';

import CloudImage from '@/components/images/CloudImage';

type ProjectCardProp = {
  post: Project;
  key?: string;
};

export default function ProjectCard({ post }: ProjectCardProp) {
  return (
    <Link href={`/projects/${post.slug}`} className='group'>
      <CloudImage
        className='pointer-events-none rounded-2xl group-hover:ring group-hover:ring-primary-500 dark:group-hover:ring-primary-400'
        id={post.image}
        alt={post.title}
        width={550}
        height={(550 * 1) / 2}
        hasCaption={false}
        priority
      />
      <div className='space-y-0.5 px-2 pt-4'>
        <h2>
          <Balancer className='text-base font-semibold'>{post.title}</Balancer>
        </h2>
        <p className='text-gray-500 dark:text-gray-400'>
          {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
        </p>
      </div>
    </Link>
  );
}
