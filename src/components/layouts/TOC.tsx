'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';

export default function TOC() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.toc-content',
      headingSelector: 'h2, h3',
      headingsOffset: 70,
      scrollSmoothOffset: -70,
      scrollSmoothDuration: 0, // Disable smooth scroll
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <div className='prose prose-stone dark:prose-invert max-h-[calc(100vh-9rem-113px)] overflow-auto -mr-4'>
      <p className='text-gray-900 dark:text-gray-100 text-lg font-medium'>
        On this page
      </p>
      <div className='toc'></div>
    </div>
  );
}
