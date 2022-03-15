import styled from 'styled-components/macro';

export const RafflePageContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-top: 8px;
`;

export const CreatedBy = styled(Row)``;

export const TicketPrice = styled(Row)``;

export const Capacity = styled(Row)``;

export const CreatedAt = styled(Row)``;

export const Prizes = styled(Row)``;

export const Tickets = styled(Row)`
  color: var(--red);
`;

export const More = styled(Row)`
  color: var(--orange);
`;

export const Description = styled(Row)`
  flex-flow: column;
  align-items: flex-start;

  margin: 36px 0;
`;
