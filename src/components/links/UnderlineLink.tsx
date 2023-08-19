import { forwardRef } from 'react';

import clsxMerge from '@/lib/clsxMerge';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

export const UnderlineLinkClassName = 'inline-flex items-center underline';

const UnderlineLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxMerge(UnderlineLinkClassName, className)}
      >
        {children}
      </UnstyledLink>
    );
  },
);

export default UnderlineLink;
