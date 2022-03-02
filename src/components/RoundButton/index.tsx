import React from "react";
import { StyledRoundButton } from "./styles";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const RoundButton: React.FC<Props> = ({ children, onClick }) => {
  return <StyledRoundButton onClick={onClick}>{children}</StyledRoundButton>;
};
