'use client';

import clsx from 'clsx';
import Image from 'next/image';
import PhotoSwipe, { PhotoSwipeOptions } from 'photoswipe';

import 'photoswipe/style.css';

type CloudImageType = {
  publicId: string;
  height: number;
  width: number;
  alt: string;
  className?: string;
  hasCaption?: boolean;
  rounded?: boolean;
  circle?: boolean;
  priority?: boolean;
} & React.ComponentPropsWithoutRef<'figure'>;

export default function CloudImage({
  publicId,
  height,
  width,
  alt,
  className,
  hasCaption = true,
  priority = false,
  ...rest
}: CloudImageType) {
  const urlBlurred = `https://lh3.googleusercontent.com/pw/${publicId}=w5`;
  const url = `https://lh3.googleusercontent.com/pw/${publicId}=w${width}`;

  const createSrcSet = (publicId: string) => {
    const breakpoints = [1360, 1080, 768, 360];
    let srcset = '';
    for (let i = 0; i < breakpoints.length; i++) {
      srcset = ''.concat(
        srcset,
        `https://lh3.googleusercontent.com/pw/${publicId}=w${breakpoints[i]}`,
        ` ${breakpoints[i]}w`,
        ', ',
      );
    }
    return srcset.slice(0, -2);
  };
  const lightboxSrcSet = createSrcSet(publicId);
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
    <figure className={clsx(className, hasCaption && 'text-center')} {...rest}>
      <Image
        priority={priority}
        width={width}
        placeholder='blur'
        blurDataURL={urlBlurred}
        height={height}
        src={url}
        alt={alt}
        className='cursor-pointer rounded-3xl'
        onClick={() => {
          const pswp = new PhotoSwipe(options);
          pswp.init();
        }}
      />
      {hasCaption ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
}
