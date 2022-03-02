import { Devices } from "./../../common/breakpoints/index";
import styled from "styled-components/macro";

export const PageContainer = styled.main`
  display: flex;
  flex-flow: column;
  flex: 1;
`;
export const PageWrapper = styled.div`
  display: flex;
  flex: 1;

  @media (${Devices.mobile}) {
    flex-flow: column-reverse;
  }
`;
export const ChildrenContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;

  padding: 36px 24px 0;

  @media (${Devices.mobile}) {
    padding: 16px 8px 0;
  }
`;
