import Link from 'next/link';
import { IconType } from 'react-icons';

import clsxMerge from '@/lib/clsxMerge';

enum ButtonLinkType {
  'filled',
  'outlined',
  'text',
}

type ButtonLinkProps = {
  className?: string;
  href: string;
  type?: keyof typeof ButtonLinkType;
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
        'inline-flex items-center rounded-full font-medium text-white dark:text-dark',
        'px-3 py-2 md:px-4',
        [
          type === 'filled' && [
            'bg-primary-600 hover:bg-primary-700',
            'dark:bg-primary-400 dark:hover:bg-primary-500',
          ],
          type === 'outlined' && [
            'text-primary-600 dark:text-primary-400',
            'outline outline-1 outline-gray-200  md:outline-2  dark:outline-gray-700',
            'hover:bg-primary-50 dark:hover:bg-primary-400/10',
          ],
          type === 'text' && [
            'text-primary-600 dark:text-primary-400',
            'hover:bg-primary-50 dark:hover:bg-primary-400/10',
          ],
        ],
        className,
      )}
    >
      {LeftIcon && (
        <LeftIcon className={clsxMerge('mr-2 h-5 w-5', leftIconClassName)} />
      )}
      {children}
      {RightIcon && (
        <RightIcon className={clsxMerge('ml-2 h-5 w-5', rightIconClassName)} />
      )}
    </Link>
  );
};

export default ButtonLink;
