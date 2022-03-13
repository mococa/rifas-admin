import { Devices } from 'common/breakpoints';
import styled from 'styled-components/macro';

export const TicketsContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;

  padding-top: 12px !important;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 4px;

  form {
    flex-flow: row;
    gap: 4px;

    width: 100%;

    div:not(:first-of-type) {
      margin-top: 0;
    }

    button {
      min-width: 100px;
    }
  }

  @media (${Devices.mobile}) {
    form {
      flex-flow: column;
      width: 100%;
      flex: 1;
    }
  }
`;

export const TicketsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;

  @media (${Devices.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: inherit;

    padding-bottom: 12px;
  }
`;
