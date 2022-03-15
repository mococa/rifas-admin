import styled from 'styled-components/macro';

export const TicketModalContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  width: fit-content;
`;

export const RaffleRow = styled(Row)`
  color: var(--orange);
`;

export const UserRow = styled(Row)`
  color: var(--dark_blue);
`;
