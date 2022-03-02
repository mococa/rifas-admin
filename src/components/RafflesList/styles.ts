import { Devices } from "../../common/breakpoints/index";
import styled from "styled-components/macro";
import { StyledRoundButton } from "components/RoundButton/styles";

export const RaffleListContainer = styled.aside`
  display: flex;
  flex-flow: column;
  gap: 12px;

  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.07);

  width: 300px;

  background: rgba(0, 0, 0, 0.05);

  @media (${Devices.tablet}) {
    width: 100%;
  }
`;

export const RaffleActionsHeader = styled.header`
  display: flex;

  align-items: center;

  padding: 0 12px;

  height: 80px;

  background: rgba(0, 0, 0, 0.1);

  span {
    margin-left: auto;
    margin-right: 4px;
  }
  button {
    padding: 6px;
  }
`;

export const RafflesBody = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;

  padding: 16px 8px;

  overflow-y: auto;
`;

export const RaffleListItem = styled.div`
  display: flex;

  min-height: 72px;

  border-radius: 4px;

  background-color: rgba(0, 0, 0, 0.1);

  cursor: pointer;

  transition: 90ms;

  :hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  &[aria-selected="true"] {
    background-color: rgba(0, 0, 120, 0.1);

    :hover {
      background-color: rgba(0, 0, 120, 0.25);
    }
  }

  &[aria-selected]:active {
    background-color: rgba(0, 0, 120, 0.4);
  }
`;
