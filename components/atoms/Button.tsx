import clsx from 'clsx';
import React from 'react';

const sizeClassNames = {
  medium: 'py-2 px-5 text-base',
  small: 'py-1 px-3 text-sm',
  squareBig: 'p-4',
  squareMedium: 'p-2',
  squareSmall: 'p-1',
};

const variantClassNames = {
  primary: 'bg-gradient-to-tr from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8] font-bold text-white',
  info: 'bg-gradient-to-tr from-[#2193b0] to-[#6dd5ed] font-bold text-white',
  danger: 'bg-gradient-to-tr from-[#cb2d3e] to-[#ef473a] font-bold text-white',
  outline: 'border border-white text-white',
};

const iconVariantClassNames = {
  primary: 'bg-white',
  info: 'bg-white',
  danger: 'bg-white',
  outline: 'bg-white',
};

const iconSizeClassNames = {
  medium: 'h-4 w-4',
  small: 'h-3 w-3',
  squareBig: '',
  squareMedium: 'h-4 w-4',
  squareSmall: 'h-3 w-3',
};

export const Button: React.FC<{
  size?: keyof typeof sizeClassNames;
  variant?: keyof typeof variantClassNames;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children?: JSX.Element | string;
  prefixIcon?: string;
  prefixIconClassName?: string;
  suffixIcon?: string;
  suffixIconClassName?: string;
  onClick?: React.MouseEventHandler<any>;
  onClickPrefix?: React.MouseEventHandler<any>;
  onClickSuffix?: React.MouseEventHandler<any>;
}> = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  prefixIconClassName = '',
  suffixIconClassName = '',
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  prefixIcon,
  onClickPrefix,
  suffixIcon,
  onClickSuffix,
  ...props
}) => (
  <button
    className={clsx(
      'flex items-center justify-center gap-2',
      'rounded-md',
      variantClassNames[variant],
      sizeClassNames[size],
      'hover:opacity-80',
      disabled ? '!opacity-30' : '',
      className,
    )}
    disabled={disabled || isLoading}
    type={type}
    {...props}
  >
    {isLoading && (
      <div>
        <i
          className={clsx('icon icon-refresh animate block', iconSizeClassNames[size], iconVariantClassNames[variant])}
        ></i>
      </div>
    )}
    {prefixIcon && (
      <div onClick={onClickPrefix}>
        <i
          className={clsx(
            'block',
            `${prefixIcon}`,
            iconVariantClassNames[variant],
            iconSizeClassNames[size],
            prefixIconClassName,
          )}
        ></i>
      </div>
    )}

    {children && <p>{children}</p>}

    {suffixIcon && (
      <div onClick={onClickSuffix}>
        <i
          className={clsx(
            'block',
            `${suffixIcon}`,
            iconVariantClassNames[variant],
            iconSizeClassNames[size],
            suffixIconClassName,
          )}
        ></i>
      </div>
    )}
  </button>
);
