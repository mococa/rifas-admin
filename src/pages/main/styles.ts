import { Devices } from "./../../common/breakpoints/index";
import styled from "styled-components/macro";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  place-self: center;
  gap: 12px;

  padding-bottom: 36px;

  width: fit-content;

  border-bottom: 1px solid var(--white500);

  @media (${Devices.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-self: center;
    
    width: fit-content;

`