import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;

  height: 48px;

  background-color: var(--${(props) => props.color || "green"});

  color: white;
  font-weight: 500;

  padding: 8px;

  :not(:disabled) {
    :hover {
      filter: brightness(95%);
    }

    :active {
      filter: brightness(90%);
    }
  }
  
  :disabled {
    cursor: auto;

    filter: brightness(80%);
  }
`;
