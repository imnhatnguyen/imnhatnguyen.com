type VideoType = {
  src: string;
  width: number;
  alt: string;
  isVertical: boolean;
};

export default function Video({ src, alt, isVertical = false }: VideoType) {
  let width = 0;
  let height = 0;

  if (isVertical) {
    width = 313;
    height = 552;
  } else {
    height = 313;
    width = 552;
  }

  return (
    <figure>
      <iframe
        width={width}
        height={height}
        src={src}
        title={alt}
        className='mx-auto rounded-2xl'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <figcaption className='text-center'>{alt}</figcaption>
    </figure>
  );
}
