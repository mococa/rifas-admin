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
`;

export const TicketsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 8px;
`;
