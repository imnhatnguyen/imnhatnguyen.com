import Link from 'next/link';
import { IconType } from 'react-icons';

import clsxMerge from '@/lib/clsxMerge';

enum IconLinkType {
  'primary',
  'outline',
  'text',
}

type IconLinkProps = {
  className?: string;
  href: string;
  type?: keyof typeof IconLinkType;
  icon?: IconType;
  label: string;
  iconClassName?: string;
};

const IconLink = ({
  className,
  icon: Icon,
  label,
  type = 'text',
  iconClassName,
  ...rest
}: IconLinkProps) => {
  return (
    <Link
      aria-label={label}
      type='button'
      className={clsxMerge(
        'inline-flex items-center justify-center rounded-full text-2xl font-medium',
        'min-h-[28px] min-w-[28px] p-2.5 md:min-h-[34px] md:min-w-[34px]',
        [
          type === 'primary' && [
            'bg-primary-500 text-white',
            'border-primary-600 border',
            'hover:bg-primary-600 hover:text-white',
            'active:bg-primary-700',
            'disabled:bg-primary-700',
          ],
          type === 'outline' && [
            'text-primary-500',
            'border-primary-500 border',
            'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
          ],
          type === 'text' && [
            'hover:bg-primary-50 dark:hover:bg-primary-400/10',
            'hover:text-primary-600 dark:hover:text-primary-400',
          ],
        ],
        'disabled:cursor-not-allowed',
        className,
      )}
      {...rest}
    >
      {Icon && <Icon className={clsxMerge(iconClassName)} />}
    </Link>
  );
};

export default IconLink;
