import { TicketStatus } from 'enums/tickets';
import styled from 'styled-components/macro';

export const TicketContainer = styled.div`
  display: flex;
  flex-flow: column;

  padding: 8px;

  cursor: pointer;
  user-select: none;

  transition: 90ms;

  color: white;
  font-weight: 500;

  &[aria-label='${TicketStatus.PAID}'] {
    background-color: var(--green);
  }

  &[aria-label='${TicketStatus.WAITING_CONFIRMATION}'] {
    background-color: var(--blue);
  }

  &[aria-current='false'] {
    background-color: var(--red);
  }

  border-radius: 8px;

  :hover {
    filter: brightness(90%);
  }
  :active {
    filter: brightness(82%);
  }
`;

export const TicketHeader = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const TicketBody = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  gap: 8px;

  color: inherit;
`;

export const TicketNumber = styled.h1`
  color: inherit;
`;

export const TicketInfo = styled.div`
  display: flex;
  flex-flow: column;

  padding-top: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  span {
    color: inherit;
  }
`;
