import type { Metadata } from 'next';

import ButtonLink from '@/components/links/ButtonLink';
export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

export default function HomePage() {
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
    </>
  );
}
