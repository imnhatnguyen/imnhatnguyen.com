'use client';

import Image from 'next/image';
import PhotoSwipe, { PhotoSwipeOptions } from 'photoswipe';

import 'photoswipe/style.css';

import clsxMerge from '@/lib/clsxMerge';

type CloudImageType = {
  id: string;
  height: number;
  width: number;
  alt: string;
  className?: string;
  hasCaption?: boolean;
  priority?: boolean;
};

export default function CloudImage({
  id,
  height,
  width,
  alt,
  className,
  hasCaption = true,
  priority = false,
}: CloudImageType) {
  const baseUrl = 'https://lh3.googleusercontent.com/pw/';
  const breakpoints = [1920, 1360, 768, 360];

  function createSrcset(id: string): string {
    return breakpoints
      .map((breakpoint) => `${baseUrl}${id}=w${breakpoint} ${breakpoint}w`)
      .join(', ');
  }

  const options: PhotoSwipeOptions = {
    dataSource: [
      {
        srcset: createSrcset(id),
        src: `${baseUrl}${id}=w${width}`,
        width: 1920,
        height: (height * 1920) / width,
        alt: alt,
      },
    ],
    bgOpacity: 0.9,
  };

  return (
    <figure className={clsxMerge(className, hasCaption && 'text-center')}>
      <Image
        priority={priority}
        width={width}
        placeholder='blur'
        blurDataURL={`${baseUrl}${id}=w10`}
        height={height}
        src={`${baseUrl}${id}=w${width}`}
        alt={alt}
        className='cursor-pointer mx-auto rounded-2xl'
        onClick={() => {
          const pswp = new PhotoSwipe(options);
          pswp.init();
        }}
      />
      {hasCaption ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
}
