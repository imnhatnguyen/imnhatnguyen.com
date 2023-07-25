import clsx from 'clsx';
import { forwardRef } from 'react';
import { IconType } from 'react-icons';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

enum ButtonLinkType {
  'filled',
  'outlined',
  'text',
}

enum ButtonLinkSize {
  'base',
}

export type ButtonLinkProps = {
  type?: keyof typeof ButtonLinkType;
  size?: keyof typeof ButtonLinkSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & UnstyledLinkProps;

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      type = 'filled',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref,
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsx(
          'inline-flex items-center rounded-full font-medium',
          'focus-visible-only',
          'px-3 py-2 md:px-4 md:py-2',
          //#region  //*=========== Types ===========
          [
            type === 'filled' && [
              'bg-primary-600 hover:bg-primary-700 text-white ',
              'dark:bg-primary-400 dark:text-dark dark:hover:bg-primary-500',
              'disabled:bg-primary-700',
            ],
            type === 'outlined' && [
              'text-primary-600 dark:text-primary-400',
              'outline outline-1 outline-gray-200  dark:outline-gray-700  md:outline-2',
              'hover:bg-primary-50 dark:hover:bg-primary-400/10',
            ],
            type === 'text' && [
              'text-primary-600 dark:text-primary-400',
              'hover:bg-primary-50 dark:hover:bg-primary-400/10',
            ],
          ],
          //#endregion  //*======== Types ===========
          'disabled:cursor-not-allowed',
          className,
        )}
      >
        {LeftIcon && (
          <div className={clsx([size === 'base' && 'mr-2'])}>
            <LeftIcon
              className={clsx(
                [size === 'base' && 'h-5 w-5'],
                leftIconClassName,
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div className={clsx([size === 'base' && 'ml-2'])}>
            <RightIcon
              className={clsx(
                [size === 'base' && 'h-5 w-5'],
                rightIconClassName,
              )}
            />
          </div>
        )}
      </UnstyledLink>
    );
  },
);

export default ButtonLink;
