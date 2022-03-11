import styled from 'styled-components/macro';

export const PaginationHeaderContainer = styled.header`
  display: flex;
  align-items: center;

  margin-top: 8px;
  padding: 0 12px;

  height: 50px;

  border-radius: 4px 4px 0 0;

  background-color: rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    flex: 1;
    gap: 4px;
  }
`;
