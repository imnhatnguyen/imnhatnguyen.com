'use client';

import PhotoSwipe from 'photoswipe';
import PhotoAlbum from 'react-photo-album';

import 'photoswipe/style.css';

import imageList from '@/components/images/imageList';
import NextImage from '@/components/images/NextImage';

function imageLink(transformations, id) {
  return `https://lh3.googleusercontent.com/pw/${id}${transformations}`;
}

const breakpoints = [1280, 1024, 768, 640];

function createLightboxSrcSet(id) {
  let srcset = '';
  for (let i = 0; i < breakpoints.length; i++) {
    srcset = ''.concat(
      srcset,
      imageLink(`=w${breakpoints[i]}`, id),
      ` ${breakpoints[i]}w`,
      ', ',
    );
  }
  return srcset.slice(0, -2);
}

function createAlbumSrcSet(id, width, height) {
  return breakpoints.map((breakpoint) => ({
    src: imageLink(`=w${breakpoint}`, id),
    width: breakpoint,
    height: Math.round((Number(height) * breakpoint) / Number(width)),
  }));
}

const lightboxImgWidth = 1280;
const galleryImages = imageList.map((image) => ({
  src: imageLink(``, image.id),
  width: lightboxImgWidth,
  height: Math.round(
    (Number(image.height) * lightboxImgWidth) / Number(image.width),
  ),
  srcset: createLightboxSrcSet(image.id),
  alt: image.caption,
  images: createAlbumSrcSet(image.id, image.width, image.height),
}));

const options = {
  dataSource: galleryImages,
  initialZoomLevel: 'fit',
  showHideAnimationType: 'zoom',
  bgOpacity: 0.88,
  secondaryZoomLevel: 1,
  maxZoomLevel: 1,
  padding: { bottom: 120 },
};

export default function Gallery() {
  return (
    <PhotoAlbum
      photos={galleryImages}
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
                el.innerHTML = lightbox.currSlide.data.alt || '';
              });
            },
          });
        });
        lightbox.init();
      }}
      renderPhoto={NextImage}
    />
  );
}
