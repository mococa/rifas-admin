import { Devices } from "./../../common/breakpoints/index";
import styled from "styled-components/macro";

export const RaffleViewContainer = styled.div`
  flex: 1;

  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.07);

  background: rgba(0, 0, 0, 0.05);

  @media (${Devices.tablet}) {
    position: fixed;
    right: 0;
  }
`;
