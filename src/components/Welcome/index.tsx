import React from "react";
import { WelcomeBox } from "./styles";

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
