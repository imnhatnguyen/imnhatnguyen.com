import Link from 'next/link';
import { IconType } from 'react-icons';

import clsxMerge from '@/lib/clsxMerge';

type IconLinkProps = {
  className?: string;
  href: string;
  icon?: IconType;
  label: string;
  iconClassName?: string;
};

const IconLink = ({
  className,
  icon: Icon,
  label,
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
        'hover:bg-primary-50 dark:hover:bg-primary-400/10',
        'hover:text-primary-600 dark:hover:text-primary-400',
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
