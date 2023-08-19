'use client';

import PhotoSwipe from 'photoswipe';
import PhotoAlbum from 'react-photo-album';

import 'photoswipe/style.css';

import galleryImages from '@/components/images/galleryImages';
import PhotoAlbumImage from '@/components/images/PhotoAlbumImage';

const baseUrl = 'https://lh3.googleusercontent.com/pw/';
const breakpoints = [1920, 1360, 768, 360];

function createSrcset(id) {
  return breakpoints
    .map((breakpoint) => `${baseUrl}${id}=w${breakpoint} ${breakpoint}w`)
    .join(', ');
}

function createCaption(title, date, description) {
  return `<div>
            <div class="lightbox-caption-header">
              <div class="lightbox-caption-title">${title}</div>
              <div class="lightbox-caption-date">${date}</div>
            </div>
            <div class="lightbox-caption-description">${description}</div>
          </div>`;
}

const gallery = galleryImages.map((image) => ({
  src: `${baseUrl}${image.id}`,
  width: 1920,
  height: Math.round((image.height * 1920) / image.width),
  srcset: createSrcset(image.id),
  alt: image.caption.title,
  caption: createCaption(
    image.caption.title,
    image.caption.date,
    image.caption.description,
  ),
}));

const options = {
  dataSource: gallery,
  padding: { bottom: 120 },
};

export default function Gallery() {
  return (
    <PhotoAlbum
      photos={gallery}
      layout='rows'
      targetRowHeight={230}
      padding={0}
      spacing={10}
      onClick={({ index }) => {
        options.index = index;
        const lightbox = new PhotoSwipe(options);
        lightbox.on('uiRegister', function () {
          lightbox.ui.registerElement({
            name: 'lightbox-caption',
            order: 9,
            isButton: false,
            appendTo: 'root',
            onInit: (el) => {
              lightbox.on('change', () => {
                el.innerHTML = lightbox.currSlide.data.caption || '';
              });
            },
          });
        });
        lightbox.init();
      }}
      renderPhoto={PhotoAlbumImage}
    />
  );
}
