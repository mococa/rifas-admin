// External
import React from 'react';

// Styles
import { StyledRoundButton } from './styles';

// Interfaces
interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const RoundButton: React.FC<Props> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <StyledRoundButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledRoundButton>
  );
};
