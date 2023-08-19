import { forwardRef } from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxMerge from '@/lib/clsxMerge';

enum IconButtonType {
  'primary',
  'outline',
  'text',
}

type IconButtonProps = {
  isLoading?: boolean;
  label: string;
  type?: keyof typeof IconButtonType;
  icon?: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      disabled: buttonDisabled,
      isLoading,
      label,
      type = 'text',
      icon: Icon,
      iconClassName,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        aria-label={label}
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxMerge(
          'inline-flex items-center justify-center  rounded-full text-2xl font-medium',
          'focus-visible-only',
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
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxMerge(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(type),
                'text-black': ['light'].includes(type),
                'text-primary-500': ['outline', 'ghost'].includes(type),
              },
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {Icon && <Icon className={clsxMerge(iconClassName)} />}
      </button>
    );
  },
);

export default IconButton;
