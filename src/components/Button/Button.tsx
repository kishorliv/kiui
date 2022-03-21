import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { ComponentSize } from '../../config/sizes';
import { StyledButton, StyledButtonFrontSpan, StyledIcon } from './StyledButton';

export type ButtonVariant = 'primary' | 'secondary' | 'text';

interface BaseButtonProps {
  variant?: ButtonVariant;
  icon?: ElementType;
  size?: ComponentSize;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type ButtonProps = HTMLButtonProps & BaseButtonProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    variant = 'primary',
    icon,
    size = 'default',
    className,
    children,
    disabled = false,
    loading,
    onClick,
  } = props;

  const styles = {
    variant,
    size,
    disabled,
    withText: children != null,
  };

  const childrenWithIcon = !icon ? (
    children
  ) : (
    <>
      {children}
      <StyledIcon />
    </>
  );

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      className={className}
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      {...styles}
    >
      <StyledButtonFrontSpan {...styles}>{childrenWithIcon}</StyledButtonFrontSpan>
    </StyledButton>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
