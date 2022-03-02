// External
import React from "react";

// Components
import { PageTemplate } from "components/PageTemplate";
import { RafflesList } from "components/RafflesList";
import { RaffleView } from "components/RaffleView";

// Styles
import { RafflesContainer } from "./styles";

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
