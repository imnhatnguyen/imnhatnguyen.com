type VideoType = {
  src: string;
  width: number;
  alt: string;
};

export default function Video({ src, width, alt }: VideoType) {
  return (
    <figure>
      <video controls src={src} width={width} className='mx-auto rounded-2xl' />
      <figcaption className='-mt-5 text-center'>{alt}</figcaption>
    </figure>
  );
}
