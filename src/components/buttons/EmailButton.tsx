'use client';

import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { FiMail } from 'react-icons/fi';

import IconButton from '@/components/buttons/IconButton';
import { UnderlineLinkClassName } from '@/components/links/UnderlineLink';

enum EmailButtonType {
  'underlined',
  'icon',
  'text',
}

type EmailButtonProps = {
  type?: keyof typeof EmailButtonType;
};

export function EmailButton({ type = 'icon' }: EmailButtonProps) {
  const [copyStatus, setCopyStatus] = useState('Click to copy');

  function copyEmailToClipboard() {
    navigator.clipboard.writeText('masonjnguyen@hotmail.com');
    setCopyStatus('Copied to clipboard ');
    setTimeout(() => {
      setCopyStatus('Click to copy');
    }, 4000);
  }

  return (
    <Tippy
      interactive={true}
      hideOnClick={false}
      content={
        <div className='z-10 flex flex-col items-center rounded-3xl bg-white px-5 py-3.5 outline outline-1 outline-gray-200 dark:bg-dark dark:outline-gray-700 md:outline-2'>
          <p>{copyStatus}</p>
          <p className='font-medium text-primary-600 dark:text-primary-400'>
            masonjnguyen@hotmail.com
          </p>
        </div>
      }
    >
      {type === 'icon' ? (
        <IconButton
          icon={FiMail}
          label='Email'
          onClick={() => {
            copyEmailToClipboard();
          }}
        />
      ) : (
        <button
          className={UnderlineLinkClassName}
          onClick={() => {
            copyEmailToClipboard();
          }}
        >
          Email
        </button>
      )}
    </Tippy>
  );
}
