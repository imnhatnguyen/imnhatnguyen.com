import Link from 'next/link';

import clsxMerge from '@/lib/clsxMerge';

export const UnderlineLinkClassName = 'inline-flex items-center underline';

type UnderlineLinkProps = {
  className?: string;
  href: string;
  children: React.ReactNode;
};

const UnderlineLink = ({
  children,
  className,
  ...rest
}: UnderlineLinkProps) => {
  return (
    <Link {...rest} className={clsxMerge(UnderlineLinkClassName, className)}>
      {children}
    </Link>
  );
};

export default UnderlineLink;
