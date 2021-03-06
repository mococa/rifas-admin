import styled from 'styled-components/macro';

export const InputContainer = styled.div`
  display: flex;

  position: relative;

  height: 48px;
  width: 100%;

  border: 1px solid var(--border-color);
  border-radius: 12px;

  padding: 4px;

  :not(:first-of-type) {
    margin-top: 12px;
  }

  input {
    background: 0;
  }

  &[aria-current='true'],
  :focus-within {
    label {
      transform: scale(0.7);

      color: var(--black500);
      font-weight: 600;

      top: 3px;
    }

    input:not([type='button']) {
      padding-top: 18px;
      padding-bottom: 6px;
      padding-left: 10px;

      width: inherit;

      ::placeholder {
        opacity: 1;
      }
    }
  }
`;

export const EndContainer = styled.div`
  display: flex;
  align-self: center;

  margin-right: 16px;
  margin-left: 4px;

  color: var(--black100);

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const Label = styled.label`
  position: absolute;

  transition: 150ms;

  pointer-events: none;

  transform-origin: left;

  color: var(--black200);

  left: 14px;
  top: 14px;
`;

export const Input = styled.input`
  flex: 1;

  transition: 150ms;

  padding: 10px 8px;

  border: none;

  &[type='button'] {
    cursor: pointer;
    background-color: var(--theme-color);
    padding: 0;

    :hover {
      filter: brightness(95%);
    }
    :active {
      filter: brightness(90%);
    }
  }

  border-radius: 4px;

  ::placeholder {
    transition: 150ms;

    opacity: 0;
  }
`;
