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
  const urlBlurred = `https://lh3.googleusercontent.com/pw/${id}=w5`;
  const url = `https://lh3.googleusercontent.com/pw/${id}=w${width}`;

  const createSrcSet = (id: string) => {
    const breakpoints = [1360, 1080, 768, 360];
    let srcset = '';
    for (let i = 0; i < breakpoints.length; i++) {
      srcset = ''.concat(
        srcset,
        `https://lh3.googleusercontent.com/pw/${id}=w${breakpoints[i]}`,
        ` ${breakpoints[i]}w`,
        ', ',
      );
    }
    return srcset.slice(0, -2);
  };
  const lightboxSrcSet = createSrcSet(id);
  const lightboxImgWidth = 1360;
  const lightboxImageHeight: number =
    (Number(height) * lightboxImgWidth) / Number(width);
  const options: PhotoSwipeOptions = {
    dataSource: [
      {
        srcset: lightboxSrcSet,
        src: url,
        width: lightboxImgWidth,
        height: lightboxImageHeight,
        alt: alt,
      },
    ],
    initialZoomLevel: 'fit',
    secondaryZoomLevel: 0.9,
    maxZoomLevel: 0.9,
    showHideAnimationType: 'zoom',
  };

  return (
    <figure className={clsxMerge(className, hasCaption && 'text-center')}>
      <Image
        priority={priority}
        width={width}
        placeholder='blur'
        blurDataURL={urlBlurred}
        height={height}
        src={url}
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
