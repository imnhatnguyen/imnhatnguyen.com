'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';

export default function TOC() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.toc-content',
      headingSelector: 'h2, h3, h4',
      headingsOffset: 64,
      scrollSmoothOffset: -64,
      scrollSmoothDuration: 0, // Disable smooth scroll
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <div className='max-h-[calc(100vh-9rem-113px)] overflow-auto -mr-4'>
      <h2 className='text-lg font-medium'>On this page</h2>
      <div className='mt-4 toc prose prose-stone dark:prose-invert'></div>
    </div>
  );
}
