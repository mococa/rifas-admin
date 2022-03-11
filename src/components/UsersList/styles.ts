import styled from 'styled-components/macro';

export const UserListContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;

  height: 71% !important;

  background-color: rgba(0, 0, 0, 0.05);
`;

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0 8px;
  padding: 8px;

  border-radius: 4px;

  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.1);
`;
