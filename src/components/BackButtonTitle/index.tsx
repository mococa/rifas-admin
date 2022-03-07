// External
import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { IoArrowBack } from 'react-icons/io5';

// Components
import { RoundButton } from 'components/RoundButton';

// Styles
import { BackButtonContainer } from './styles';

// Interfaces
interface Props {
  text: string;
}

export const BackButtonTitle: React.FC<Props> = ({ text }) => {
  return (
    <BackButtonContainer>
      <Link to="/">
        <RoundButton>
          <IoArrowBack />
        </RoundButton>
      </Link>
      <h3>{text}</h3>
    </BackButtonContainer>
  );
};
