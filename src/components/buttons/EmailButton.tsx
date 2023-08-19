'use client';

import { useState } from 'react';
import { FiMail } from 'react-icons/fi';

import clsxMerge from '@/lib/clsxMerge';

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
    <>
      {type === 'icon' ? (
        <IconButton
          icon={FiMail}
          label='Email'
          onClick={() => {
            copyEmailToClipboard();
          }}
        />
      ) : type === 'underlined' ? (
        <button
          className={UnderlineLinkClassName}
          onClick={() => {
            copyEmailToClipboard();
          }}
        >
          Email
        </button>
      ) : (
        // type === 'text'
        <button
          className={clsxMerge(
            'inline-flex items-center rounded-full font-medium',
            'px-3 py-2 md:px-4 md:py-2',
            'hover:text-primary-600 dark:hover:text-primary-400',
            'hover:bg-primary-50 dark:hover:bg-primary-400/10',
          )}
          onClick={() => {
            copyEmailToClipboard();
          }}
        >
          <p className='hidden'>{copyStatus}</p>
          Email
        </button>
      )}
    </>
  );
}
