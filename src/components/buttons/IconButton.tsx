import { forwardRef } from 'react';
import { IconType } from 'react-icons';

import clsxMerge from '@/lib/clsxMerge';

type IconButtonProps = {
  isLoading?: boolean;
  label: string;
  icon?: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, label, icon: Icon, iconClassName, ...rest }, ref) => {
    return (
      <button
        aria-label={label}
        ref={ref}
        type='button'
        className={clsxMerge(
          'inline-flex items-center justify-center rounded-full text-2xl font-medium',
          'min-h-[28px] min-w-[28px] p-2.5 md:min-h-[34px] md:min-w-[34px]',
          'hover:bg-primary-50 dark:hover:bg-primary-400/10',
          'hover:text-primary-700 dark:hover:text-primary-400',
          className,
        )}
        {...rest}
      >
        {Icon && <Icon className={clsxMerge(iconClassName)} />}
      </button>
    );
  },
);

export default IconButton;
