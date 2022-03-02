// External
import React from "react";

// Components
import { Card } from "components/Card";
import { PageTemplate } from "components/PageTemplate";
import { Welcome } from "components/Welcome";

// Helpers
import { getSections } from "helpers/sections";

// Styles
import { CardsContainer, MainContainer } from "./styles";

export const MainPage: React.FC = () => {
  return (
    <PageTemplate>
      <MainContainer>
        <Welcome name="Eliel" />
        <CardsContainer>
          {getSections.map((section) => (
            <Card key={section.id} {...section} />
          ))}
        </CardsContainer>
      </MainContainer>
    </PageTemplate>
  );
};
