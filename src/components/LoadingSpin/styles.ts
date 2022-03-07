import styled, { keyframes } from 'styled-components/macro';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props['aria-setsize'] || 16}px;

  animation: ${spin} 0.6s ease-out infinite;
`;
