import { allProjects, type Project } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Balancer from 'react-wrap-balancer';

import CloudImage from '@/components/images/CloudImage';
import TOC from '@/components/layouts/TOC';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import { MDX } from '@/components/mdx/mdx';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
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
    ? `https://lh3.googleusercontent.com/pw/${image}=w1200`
    : '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://imnhatnguyen.com/projects/${slug}`,
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

export default function Project({ params }: Props) {
  const post = allProjects.find((post: Project) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      ></script>
      <header>
        <CloudImage
          id={post.image}
          alt={post.title}
          width={1300}
          height={(1300 * 1) / 2}
          hasCaption={false}
          priority
        />
        <h1 className='mt-5 text-xl md:text-3xl'>
          <Balancer>{post.title}</Balancer>
        </h1>
        <section className='mt-3 flex flex-wrap gap-4 md:gap-8'>
          <p>{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</p>
          <p>{post.category}</p>
          <UnderlineLink href={post.link}>
            {post.link?.substring(8, post.link.length)}
          </UnderlineLink>
        </section>
      </header>
      <main>
        <div className='mt-10 lg:grid lg:grid-cols-[auto,250px] lg:gap-12'>
          <MDX content={post.body.code} />
          <aside className='sticky top-32 hidden max-h-[calc(100vh-9rem-113px)] overflow-auto lg:block'>
            <TOC />
          </aside>
        </div>
        <ButtonLink
          href='/projects'
          type='text'
          leftIcon={HiOutlineArrowLeft}
          className='mt-5'
        >
          Return to all projects
        </ButtonLink>
      </main>
    </>
  );
}
