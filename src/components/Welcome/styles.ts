import { Devices } from "./../../common/breakpoints/index";
import styled from "styled-components/macro";

export const WelcomeBox = styled.div`
  display: flex;
  flex-flow: row;
  gap: 6px;
  align-items: baseline;

  font-size: 3rem;

  padding: 0 2px 16px;

  h3 {
    font-weight: 500;
  }

  @media (${Devices.mobile}) {
    gap: 4px;
    
    h2,
    h3 {
      font-size: inherit;
    }
  }
`;
