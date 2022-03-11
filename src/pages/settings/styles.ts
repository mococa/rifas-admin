import styled from 'styled-components/macro';
import { Devices } from 'common/breakpoints/index';

export const OrganizationFormContainer = styled.div`
  width: 330px;

  @media (${Devices.mobile}) {
    width: 100%;
  }
`;
