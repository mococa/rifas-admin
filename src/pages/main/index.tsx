// External
import React from 'react';

// Components
import { Card } from 'components/Card';
import { PageTemplate } from 'components/PageTemplate';
import { Welcome } from 'components/Welcome';

// Helpers
import { getSections } from 'helpers/sections';

// Hooks
import { useAuth } from 'contexts/Auth';

// Styles
import { CardsContainer, MainContainer } from './styles';

export const MainPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <PageTemplate>
      <MainContainer>
        <Welcome name={user?.name || ''} />
        <CardsContainer>
          {getSections.map((section) => (
            <Card key={section.id} {...section} />
          ))}
        </CardsContainer>
      </MainContainer>
    </PageTemplate>
  );
};
