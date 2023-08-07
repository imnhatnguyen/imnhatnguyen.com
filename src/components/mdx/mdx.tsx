import { useMDXComponent } from 'next-contentlayer/hooks';

import CloudImage from '@/components/images/CloudImage';
import Video from '@/components/images/Video';

const components = {
  CloudImage,
  Video,
};

interface MDXProps {
  content: string;
}

export function MDX({ content }: MDXProps) {
  const Component = useMDXComponent(content);
  return (
    <div className='toc-content prose prose-stone dark:prose-invert max-w-4xl'>
      <Component components={{ ...components }} />
    </div>
  );
}
