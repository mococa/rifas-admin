import styled from 'styled-components/macro';
import { Devices } from 'common/breakpoints/index';

export const RafflesContainer = styled.div`
  display: flex;
  gap: 48px;

  height: calc(100vh - 142px);

  padding: 24px 0;

  @media (${Devices.mobile}) {
    height: calc(100vh - 178px);
  }
`;
