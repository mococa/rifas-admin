// External
import React from 'react';
import { Link } from 'react-router-dom';

// Enums
import { CardColor } from 'enums/colors';

// Styles
import { InnerCardContainer, StyledCard } from './styles';

interface Props {
  icon: JSX.Element;
  color: keyof typeof CardColor;
  label: string;
  id: string;
}
export const Card: React.FC<Props> = ({ icon, label, color, id }) => {
  return (
    <Link to={`/${id}`}>
      <StyledCard aria-label={color || 'purple'} id={id}>
        <InnerCardContainer>
          {icon}
          <span>{label}</span>
        </InnerCardContainer>
      </StyledCard>
    </Link>
  );
};
