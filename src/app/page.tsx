import { allProjects, Project } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import type { Metadata } from 'next';
import { HiOutlineArrowRight } from 'react-icons/hi';

import ProjectCard from '@/components/layouts/ProjectCard';
import ButtonLink from '@/components/links/ButtonLink';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function HomePage() {
  const projects = allProjects
    .slice(0, 3)
    .sort((a: Project, b: Project) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    );
  return (
    <>
      <section className='mt-32 flex flex-col'>
        <h2 className='text-2xl font-semibold md:text-3xl 2xl:text-4xl'>
          Xin chào
        </h2>
        <h1 className='-ml-0.5 mt-5 text-4xl md:text-5xl'>My name is Mason</h1>
        <div className='mt-6 max-w-4xl text-lg'>
          I'm a UX Designer with some experience in Machine Learning and
          Front-End Development
        </div>
        <div className='mt-6 space-x-4'>
          <ButtonLink href='/projects/heni-beauty-hair-and-nails-salon'>
            Pet project
          </ButtonLink>
          <ButtonLink href='/about' type='outlined'>
            About me
          </ButtonLink>
        </div>
      </section>
      <section className='mt-36'>
        <h2 className='text-2xl md:text-3xl'>Featured projects</h2>
        <div className='mt-5 grid gap-6 sm:grid-cols-2 sm:gap-y-14 xl:grid-cols-3'>
          {projects.map((post: Project) => (
            <ProjectCard key={post.slug} post={post} />
          ))}
        </div>
        <ButtonLink
          href='/projects'
          type='text'
          rightIcon={HiOutlineArrowRight}
          className='mt-2'
        >
          See more projects
        </ButtonLink>
      </section>
    </>
  );
}
