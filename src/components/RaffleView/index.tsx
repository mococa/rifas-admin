// External
import React from "react";

// Components
import { LoadingSpin } from "components/LoadingSpin";

// Styles
import { RaffleViewContainer } from "./styles";

// Interfaces
interface Props {}

export const RaffleView: React.FC<Props> = ({ children }) => {
  return (
    <RaffleViewContainer>
      <LoadingSpin size={72} />
    </RaffleViewContainer>
  );
};
