// External
import { CSSColors } from 'enums/colors';
import React from 'react';

// Styles
import { StyledButton } from './styles';

// Interfaces
interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: keyof typeof CSSColors;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  color,
  disabled,
}) => {
  return (
    <StyledButton color={color} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
