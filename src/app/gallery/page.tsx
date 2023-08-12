import type { Metadata } from 'next';

import Gallery from '@/components/images/Gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A gallery where Mason showcases his photos, illustrations or maybe some random sketches',
};

export default function GalleryPage() {
  return (
    <section>
      <h1 className='mb-7'>Gallery</h1>
      <Gallery />
    </section>
  );
}
