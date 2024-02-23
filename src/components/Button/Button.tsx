import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
} from 'react';

import { create, props as styleProps } from '@stylexjs/stylex';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'ghost' | 'success' | 'warning' | 'danger';
  size?: 'regular' | 'small' | 'large';
  className?: string;
};

const styles = create({
  base: {
    padding: '10px 20px',
  },
  primary: {
    backgroundColor: 'red',
    color: 'white',
  },
  ghost: {
    backgroundColor: {
      default: 'transparent',
      ':hover': 'lightgray',
    },
    color: 'black',
    cursor: 'pointer',
  },
  success: {},
  warning: {},
  danger: {},
});

const Button = (
  { variant = 'primary', size = 'regular', className, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <button {...styleProps(styles.base, styles[variant])} {...props} ref={ref}>
      {props.children}
    </button>
  );
};

export default forwardRef(Button);
