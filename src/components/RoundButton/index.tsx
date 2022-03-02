// External
import React from "react";

// Styles
import { StyledRoundButton } from "./styles";

// Interfaces
interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const RoundButton: React.FC<Props> = ({ children, onClick }) => {
  return <StyledRoundButton onClick={onClick}>{children}</StyledRoundButton>;
};
