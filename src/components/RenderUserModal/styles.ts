import styled from 'styled-components/macro';

export const UserModalContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;

  h5 {
    font-size: 1.25rem;
    opacity: 0.5;

    margin-bottom: 10px;
  }

  span,
  b {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  b {
    cursor: pointer;
    width: fit-content;
  }
`;
