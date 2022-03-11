// External
import React from 'react';

// Components
import { LoadingSpin } from 'components/LoadingSpin';

// Styles
import { StyledLoadingContainer } from './styles';

export const LoadingContainer: React.FC = () => {
  return (
    <StyledLoadingContainer>
      <LoadingSpin size={48} />
    </StyledLoadingContainer>
  );
};
