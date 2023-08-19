import Link from 'next/link';
import { IconType } from 'react-icons';

import clsxMerge from '@/lib/clsxMerge';

enum ButtonLinkType {
  'filled',
  'outlined',
  'text',
}

enum ButtonLinkSize {
  'base',
}

type ButtonLinkProps = {
  className?: string;
  href: string;
  type?: keyof typeof ButtonLinkType;
  size?: keyof typeof ButtonLinkSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
  children: React.ReactNode;
  leftIconClassName?: string;
  rightIconClassName?: string;
};

const ButtonLink = ({
  children,
  className,
  type = 'filled',
  size = 'base',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassName,
  rightIconClassName,
  ...rest
}: ButtonLinkProps) => {
  return (
    <Link
      {...rest}
      className={clsxMerge(
        'inline-flex items-center rounded-full font-medium',
        'px-3 md:px-4 py-2',
        //#region  //*=========== Types ===========
        [
          type === 'filled' && [
            'bg-primary-700 hover:bg-primary-800 text-white ',
            'dark:bg-primary-400 dark:text-dark dark:hover:bg-primary-500',
            'disabled:bg-primary-700',
          ],
          type === 'outlined' && [
            'text-primary-700 dark:text-primary-400',
            'outline outline-1 outline-gray-200  dark:outline-gray-700  md:outline-2',
            'hover:bg-primary-50 dark:hover:bg-primary-400/10',
          ],
          type === 'text' && [
            'text-primary-700 dark:text-primary-400',
            'hover:bg-primary-50 dark:hover:bg-primary-400/10',
          ],
        ],
        //#endregion  //*======== Types ===========
        'disabled:cursor-not-allowed',
        className,
      )}
    >
      {LeftIcon && (
        <div className={clsxMerge([size === 'base' && 'mr-2'])}>
          <LeftIcon
            className={clsxMerge(
              [size === 'base' && 'h-5 w-5'],
              leftIconClassName,
            )}
          />
        </div>
      )}
      {children}
      {RightIcon && (
        <div className={clsxMerge([size === 'base' && 'ml-2'])}>
          <RightIcon
            className={clsxMerge(
              [size === 'base' && 'h-5 w-5'],
              rightIconClassName,
            )}
          />
        </div>
      )}
    </Link>
  );
};

export default ButtonLink;
