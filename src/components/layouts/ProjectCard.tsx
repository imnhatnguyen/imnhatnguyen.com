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
        className='rounded-2xl pointer-events-none group-hover:ring dark:group-hover:ring-primary-400 group-hover:ring-primary-500'
        id={post.image}
        alt={post.title}
        width={550}
        height={(550 * 1) / 2}
        hasCaption={false}
        priority
      />
      <div className='px-2 py-3 space-y-1'>
        <Balancer className='text-base font-semibold'>{post.title}</Balancer>
        <p className='text-gray-500 dark:text-gray-400'>
          {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
        </p>
      </div>
    </Link>
  );
}
