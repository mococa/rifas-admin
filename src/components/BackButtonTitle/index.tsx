// External
import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { IoArrowBack } from 'react-icons/io5';

// Components
import { RoundButton } from 'components/RoundButton';

import { useRoute } from 'contexts/Route';

// Styles
import { BackButtonContainer } from './styles';

// Interfaces
interface Props {
  text: string;
}

export const BackButtonTitle: React.FC<Props> = ({ text }) => {
  const route = useRoute();

  return (
    <BackButtonContainer>
      <Link to={route.from} onClick={route.pop}>
        <RoundButton>
          <IoArrowBack />
        </RoundButton>
      </Link>
      <h3>{text}</h3>
    </BackButtonContainer>
  );
};
