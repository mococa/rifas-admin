import React from "react";
import { PageTemplate } from "components/PageTemplate";
import { RafflesList } from "components/RafflesList";
import { RafflesContainer } from "./styles";
import { RaffleView } from "components/RaffleView";

export const RafflesPage: React.FC = () => {
  return (
    <PageTemplate title="Rifas">
      <RafflesContainer>
        <RafflesList />
        <RaffleView />
      </RafflesContainer>
    </PageTemplate>
  );
};
