// External
import React from 'react';

// Styles
import { WelcomeBox } from './styles';

// Interfaces
interface Props {
  name: string;
}

export const Welcome: React.FC<Props> = ({ name }) => {
  return (
    <WelcomeBox>
      <h3>Olá,</h3>
      <h2>
        {name} <span className="wave">👋</span>
      </h2>
    </WelcomeBox>
  );
};
