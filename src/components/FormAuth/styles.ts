import styled from "styled-components";

export const FormAuthContainer = styled.div`
  display: flex;
  flex-flow: column;

  width: 400px;

  button, & > :not(first-child) {
    margin-top: 12px;
  }
`;
