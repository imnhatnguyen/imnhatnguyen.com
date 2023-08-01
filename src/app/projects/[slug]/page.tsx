import { allProjects } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

import { Mdx } from '@/components/mdx/mdx';

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const post = allProjects.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `https://leerob.io${image}`
    : `https://leerob.io/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://leerob.io/projects/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// write a function that takes in a slug and returns the post

export default async function Project({ params }: { params: Params }) {
  const post = allProjects.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script type='application/ld+json' suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <h1 className='font-bold text-2xl tracking-tighter max-w-[650px]'>
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className='flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
        </p>
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}
