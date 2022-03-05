// External
import React from "react";

// Icons
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

// Components
import { RoundButton } from "components/RoundButton";

// Styles
import {
  RaffleActionsHeader,
  RaffleListContainer,
  RaffleListItem,
  RafflesBody,
} from "./styles";
import { Raffle } from "_types/Raffle";

// Interfaces
interface Props {
  raffles: Raffle[];
  pagesCount: number;
  page: number;
  paginate: (pagesToAdvance: number) => void;
  onSelect: (raffle: Raffle) => void;
  selectedRaffle: string;
  onCreateRaffle: () => void;
}

export const RafflesList: React.FC<Props> = ({
  raffles,
  pagesCount,
  page,
  paginate,
  onSelect,
  selectedRaffle,
  onCreateRaffle,
}) => {
  return (
    <RaffleListContainer>
      <RaffleActionsHeader>
        <RoundButton onClick={onCreateRaffle}>
          <IoAddOutline />
        </RoundButton>
        <span>
          {page + 1}/{pagesCount}
        </span>
        <RoundButton disabled={page + 1 <= 1} onClick={() => paginate(-1)}>
          <MdOutlineNavigateBefore />
        </RoundButton>
        <RoundButton
          disabled={page + 1 >= pagesCount}
          onClick={() => paginate(1)}
        >
          <MdOutlineNavigateNext />
        </RoundButton>
      </RaffleActionsHeader>
      <RafflesBody>
        {raffles.map((raffle) => (
          <RaffleListItem
            key={raffle._id}
            aria-selected={raffle._id === selectedRaffle}
            onClick={() => onSelect(raffle)}
          >
            {raffle.title}
          </RaffleListItem>
        ))}
      </RafflesBody>
    </RaffleListContainer>
  );
};
