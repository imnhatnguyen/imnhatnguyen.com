'use client';

import clsx from 'clsx';
import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';

const NextImage: React.FC<RenderPhotoProps> = ({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}) => {
  return (
    <div style={wrapperStyle}>
      <div className='relative block h-full w-full cursor-pointer'>
        <Image
          priority
          layout='fill'
          src={src}
          placeholder='blur'
          blurDataURL={`${src}=w10`}
          alt={alt}
          title={title}
          sizes={sizes}
          className={clsx('rounded-xl', className)}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default NextImage;
