import { RoundButton } from "components/RoundButton";
import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import {
  RaffleActionsHeader,
  RaffleListContainer,
  RaffleListItem,
  RafflesBody,
} from "./styles";

interface Props {}

export const RafflesList: React.FC<Props> = () => {
  return (
    <RaffleListContainer>
      <RaffleActionsHeader>
        <RoundButton>
          <IoAddOutline />
        </RoundButton>
        <span>1/3</span>
        <RoundButton>
          <MdOutlineNavigateBefore />
        </RoundButton>
        <RoundButton>
          <MdOutlineNavigateNext />
        </RoundButton>
      </RaffleActionsHeader>
      <RafflesBody>
        <RaffleListItem aria-selected={false} />
        <RaffleListItem aria-selected={false} />
        <RaffleListItem aria-selected={false} />
        <RaffleListItem aria-selected />
        <RaffleListItem aria-selected={false} />
        <RaffleListItem aria-selected={false} />
        <RaffleListItem aria-selected={false} />
        <RaffleListItem aria-selected={false} />
        <RaffleListItem aria-selected={false} />
      </RafflesBody>
    </RaffleListContainer>
  );
};
