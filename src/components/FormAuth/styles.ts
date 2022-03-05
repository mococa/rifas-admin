import { Devices } from "./../../common/breakpoints/index";
import styled from "styled-components/macro";

export const FormAuthContainer = styled.div`
  display: flex;
  flex-flow: column;

  width: 400px;

  button,
  & > :not(first-child) {
    margin-top: 12px;
  }

  @media (${Devices.mobile}) {
    width: 100%;
  }
`;
