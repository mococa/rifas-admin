import styled from "styled-components/macro";

export const StyledRoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

  background-color: transparent;

  transition: 150ms;

  :not(:disabled):hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  :not(:disabled):active {
    background-color: rgba(0, 0, 0, 0.2);
  }

  :disabled {
    cursor: default;
    background-color: rgba(0, 0, 0, 0.075);

    color: rgba(0, 0, 0, 0.5);
  }

  padding: 8px;

  svg {
    font-size: 1.25rem;
  }
`;
