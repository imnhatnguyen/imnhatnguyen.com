'use client';

import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';

import clsxMerge from '@/lib/clsxMerge';

export default function NextImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div
      style={{
        ...wrapperStyle,
        position: 'relative',
      }}
    >
      <Image
        priority
        fill
        src={photo}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        className={clsxMerge('rounded-2xl', className)}
        {...{ alt, title, sizes, onClick }}
      />
    </div>
  );
}
