import styled from 'styled-components/macro';
import { Devices } from 'common/breakpoints/index';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  place-self: center;
  gap: 12px;

  padding-bottom: 36px;

  width: fit-content;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (${Devices.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-self: center;

  width: fit-content;
`;
