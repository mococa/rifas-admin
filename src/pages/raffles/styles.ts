import styled from 'styled-components/macro';
import { Devices } from 'common/breakpoints/index';

export const RafflesContainer = styled.div`
  display: flex;
  gap: 48px;

  @media (${Devices.mobile}) {
    height: calc(100vh - 178px);
  }
`;
