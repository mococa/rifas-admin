// External
import styled from 'styled-components/macro';
import { transparentize } from 'polished';

// Common
import { Devices } from 'common/breakpoints/index';

// Enums
import { CardColor } from 'enums/colors';

export const StyledCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;
  width: 200px;

  padding: 12px;

  border: none;
  border-radius: 16px;

  background: ${(props) =>
    transparentize(
      0.9,
      CardColor[(props['aria-label'] as keyof typeof CardColor) || 'green']
    )};

  color: ${(props) =>
    CardColor[(props['aria-label'] as keyof typeof CardColor) || 'green']};

  cursor: pointer;
  user-select: none;

  transition: 100ms ease;

  :hover {
    background: ${(props) =>
      transparentize(
        0.7,
        CardColor[(props['aria-label'] as keyof typeof CardColor) || 'green']
      )};
  }
  :active {
    filter: brightness(75%);
  }

  @media (${Devices.mobile}) {
    height: 160px;
    width: 160px;
  }
`;

export const InnerCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  color: inherit;

  font-weight: 600;

  svg {
    width: 1.75rem;
    height: 1.75rem;

    margin-bottom: 4px;
  }

  span {
    color: inherit;
  }

  @media (${Devices.mobile}) {
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
