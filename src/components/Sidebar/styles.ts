import { Devices } from "./../../common/breakpoints/index";
import { CardColor } from "enums/colors";
import styled, { css } from "styled-components/macro";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-flow: column;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.045);

  padding-top: 12px;

  width: 64px;

  a {
    overflow: hidden;
    transition: 150ms;

    width: fit-content;

    :hover {
      background-color: rgba(0, 0, 0, 0.06);

      border-radius: 50%;
    }

    :active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  @media (${Devices.mobile}) {
    flex-flow: row;
    justify-content: center;

    width: auto;

    padding-top: 0px;
  }
`;

export const SidebarItem = styled.button`
  ${({ color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${CardColor[(color || "green") as keyof typeof CardColor]};

    padding: 16px;

    height: 56px;
    width: 56px;

    background-color: transparent;

    border: none;

    svg {
      transition: 150ms;

      font-size: 1.5rem;
    }
  `}
`;
