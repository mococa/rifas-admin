import { LoadingSpin } from "components/LoadingSpin";
import React from "react";
import { RaffleViewContainer } from "./styles";

interface Props {}

export const RaffleView: React.FC<Props> = ({ children }) => {
  return (
    <RaffleViewContainer>
      <LoadingSpin size={72} />
    </RaffleViewContainer>
  );
};
