import styled from 'styled-components/macro';
import { Devices } from 'common/breakpoints/index';

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

    padding: 12px 2px 16px;

    h2,
    h3 {
      font-size: inherit;
    }
  }
`;
