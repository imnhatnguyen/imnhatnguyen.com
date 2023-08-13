type VideoType = {
  src: string;
  width: number;
  alt: string;
};

export default function Video({ src, width, alt }: VideoType) {
  return (
    <figure>
      <video controls width={width} className='mx-auto rounded-2xl'>
        <source src={src} type='video/webm' />
        <track
          src='https://drive.google.com/uc?id=14fkK6oZRveeueyAS55XkEhTMgOCmDgiD'
          kind='captions'
          lang='en'
          label='English'
        />
      </video>
      <figcaption className='-mt-5 text-center'>{alt}</figcaption>
    </figure>
  );
}
