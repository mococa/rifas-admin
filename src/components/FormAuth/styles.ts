import styled from 'styled-components/macro';
import { Devices } from 'common/breakpoints/index';

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
