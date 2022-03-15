import styled from 'styled-components/macro';

export const UserPageContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  width: fit-content;

  b {
    cursor: pointer;
  }

  button {
    padding: 4px;
  }
`;

export const TicketsRow = styled(Row)`
  color: var(--red);
`;
