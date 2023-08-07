import clsx from 'clsx';
import { forwardRef } from 'react';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

export const UnderlineLinkClassName =
  'focus-visible-only inline-flex items-center underline';

const UnderlineLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsx(UnderlineLinkClassName, className)}
      >
        {children}
      </UnstyledLink>
    );
  },
);

export default UnderlineLink;
