import styled from "styled-components/macro";

export const StyledRoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

  background-color: transparent;

  transition: 150ms;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.2);
  }

  padding: 8px;

  svg {
    font-size: 1.25rem;
  }
`;
