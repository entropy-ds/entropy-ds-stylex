import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
} from 'react';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'ghost' | 'success' | 'warning' | 'danger';
  size?: 'regular' | 'small' | 'large';
  className?: string;
};

const Button = (
  { variant = 'primary', size = 'regular', className, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <button
      {...props}
      ref={ref}
      className={`shadow hover:shadow-lg transition py-2.5 px-3 bg-emerald-500 text-white rounded ${className}`}
    >
      {props.children}
    </button>
  );
};

export default forwardRef(Button);
