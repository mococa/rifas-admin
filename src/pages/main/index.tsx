import { Card } from "components/Card";
import React from "react";
import { PageTemplate } from "components/PageTemplate";
import { Welcome } from "components/Welcome";

import { getSections } from "helpers/sections";

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
