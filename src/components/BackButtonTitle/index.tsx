import React from "react";

import { Link } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";

import { RoundButton } from "components/RoundButton";
import { BackButtonContainer } from "./styles";

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
