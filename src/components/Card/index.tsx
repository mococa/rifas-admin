import React from "react";
import { InnerCardContainer, StyledCard } from "./styles";
import { Section } from "enums/sections";
import { CardColor } from "enums/colors";
import { Link } from "react-router-dom";

interface Props {
  icon: JSX.Element;
  color: keyof typeof CardColor;
  label: string;
  id: string;
}
export const Card: React.FC<Props> = ({ icon, label, color, id }) => {
  return (
    <Link to={`/${id}`}>
      <StyledCard aria-label={color || "purple"} id={id}>
        <InnerCardContainer>
          {icon}
          <span>{label}</span>
        </InnerCardContainer>
      </StyledCard>
    </Link>
  );
};
