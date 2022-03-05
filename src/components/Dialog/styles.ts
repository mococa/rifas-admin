import styled, { keyframes } from "styled-components";

/* ---------- Animations ---------- */
const getInAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
`;

/* ---------- Styled Components ---------- */
export const DialogParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;

  background: rgba(0, 0, 0, 0.1);

  width: 100vw;
  height: 100vh;

  z-index: 10;
`;

export const DialogContainer = styled.div`
  display: flex;
  flex-flow: column;

  border-radius: 8px;

  background: var(--theme-color);

  min-width: 356px;

  animation: ${getInAnimation} 150ms ease forwards;

  filter: drop-shadow(0, 2px, 3px, var(--border-color));
`;

export const DialogHeaderContainer = styled.header`
  display: flex;
  align-items: center;

  position: relative;

  padding: 12px;

  font-size: 1rem;
  font-weight: 600;

  border-bottom: 1px solid var(--border-color);

  > button {
    position: absolute;
    right: 6px;
  }
`;

export const DialogBodyContainer = styled.div`
  padding: 12px;

  min-height: 40px;

  font-size: 1rem;

  flex: 1;
`;

export const DialogFooter = styled.footer`
  display: flex;
  justify-content: flex-end;

  padding: 8px 12px;

  button {
    min-width: 90px;
    padding-left: 12px;
    padding-right: 12px;

    :not(:first-of-type) {
      margin-left: 8px;
    }
  }
`;
