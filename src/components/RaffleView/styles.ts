import { Devices } from "./../../common/breakpoints/index";
import styled from "styled-components/macro";

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
    right: 0;
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

  button {
    position: absolute;
    right: 12px;
  }
`;

export const RaffleId = styled.span`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const RaffleActive = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 50%;

  background-color: var(--red);

  &[aria-current="true"] {
    background-color: var(--green);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-top: 8px;
`;
export const CreatedBy = styled(Row)`
  span {
    font-weight: 600;
  }
`;

export const TicketPrice = styled(Row)``;

export const Capacity = styled(Row)``;

export const CreatedAt = styled(Row)``;

export const DescriptionLabel = styled.b`
  margin-top: 8px;

  cursor: pointer;

  color: var(--blue);
`;
