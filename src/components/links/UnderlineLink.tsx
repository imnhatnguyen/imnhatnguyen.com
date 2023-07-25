import clsx from 'clsx';
import { forwardRef } from 'react';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

export const UnderlineLinkClassName =
  'focus-visible-only inline-flex items-center border-b border-dotted border-gray-800 hover:border-solid hover:border-primary-500 dark:border-gray-200 dark:hover:border-primary-400 md:border-b-2';

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
