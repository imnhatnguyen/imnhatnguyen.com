import { Metadata } from 'next';
import * as React from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import { EmailButton } from '@/components/buttons/EmailButton';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <>
      <header className='max-w-3xl'>
        <h1 className='mb-7'>Sorry 😔</h1>
      </header>
      <main className='max-w-3xl mx-auto mt-3 items-center flex flex-col md:mt-5'>
        <div>
          The content you're looking for might have been deleted or moved to
          another location. Alternatively, the link you've clicked on may be
          invalid. If you need help, please contact me through{' '}
          <EmailButton type='underlined' /> or{' '}
          <UnderlineLink
            href='https://twitter.com/masonjnguyen'
            className='font-normal'
          >
            Twitter DM
          </UnderlineLink>
          .
        </div>
        <ButtonLink
          href='/'
          type='text'
          className='mt-5'
          leftIcon={HiOutlineArrowLeft}
        >
          Return to the Home page
        </ButtonLink>
      </main>
    </>
  );
}
