import styled from 'styled-components/macro';
import { Devices } from 'common/breakpoints';

export const AuthContainer = styled.div`
  display: flex;
  flex-flow: column;

  padding: 12px;

  @media (${Devices.desktopXl}) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 36px;
  }
  @media (${Devices.mobile}) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 16px;
  }
`;
