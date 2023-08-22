import { useMDXComponent } from 'next-contentlayer/hooks';

import clsxMerge from '@/lib/clsxMerge';

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
    <article
      className={clsxMerge(
        'toc-content prose prose-stone max-w-4xl dark:prose-invert',
        'prose-h2:text-xl prose-h2:font-semibold prose-h2:md:text-2xl',
        'prose-h3:text-lg prose-h3:md:text-xl',
      )}
    >
      <Component components={{ ...components }} />
    </article>
  );
}
