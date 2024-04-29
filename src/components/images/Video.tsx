'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

type VideoType = {
  id: string;
  alt: string;
};

export default function Video({ id, alt }: VideoType) {
  return (
    <figure>
      <LiteYouTubeEmbed id={id} title={alt} />
      <figcaption className='text-center'>{alt}</figcaption>
    </figure>
  );
}
