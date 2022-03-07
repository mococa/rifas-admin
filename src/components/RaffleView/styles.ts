import styled from 'styled-components/macro';
import { Devices } from 'common/breakpoints';

export const RaffleViewContainer = styled.div`
  display: flex;
  flex-flow: column;

  flex: 1;

  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.07);

  background: rgba(0, 0, 0, 0.05);

  padding: 16px;

  @media (${Devices.tablet}) {
    position: fixed;
    right: -100%;

    background: var(--theme-color);
    width: fill-available;
    margin: 0 12px;
    min-height: 400px;

    &[aria-current='true'] {
      right: 0;
    }
  }

  @media (${Devices.mobile}) {
    &[aria-current='true'] {
      filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
    }
  }
`;

export const RaffleTitle = styled.header`
  display: flex;
  align-items: baseline;
  gap: 4px;

  position: relative;

  padding: 24px 0;

  font-size: 2rem;
  font-weight: 600;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const RaffleId = styled.span`
  font-size: 1rem;
  opacity: 0.4;

  @media (${Devices.mobile}) {
    display: none;
  }
`;

export const RaffleActionButtons = styled.div`
  display: flex;
  gap: 8px;

  margin-left: auto;
`;

export const RaffleActive = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  border-radius: 50%;

  background-color: var(--red);

  &[aria-current='true'] {
    background-color: var(--green);
  }
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

export const DescriptionLabel = styled.b`
  margin-top: 8px;

  cursor: pointer;

  color: var(--blue);
`;

export const Prizes = styled(Row)``;
