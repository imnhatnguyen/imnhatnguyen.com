import { useMDXComponent } from 'next-contentlayer/hooks';

import CloudImage from '@/components/images/CloudImage';
import Video from '@/components/images/Video';

const components = {
  CloudImage,
  Video,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className='prose prose-stone dark:prose-invert'>
      <Component components={{ ...components }} />
    </article>
  );
}
