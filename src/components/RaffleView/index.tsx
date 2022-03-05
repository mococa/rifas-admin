// External
import React from "react";

// Styles
import {
  Capacity,
  CreatedAt,
  CreatedBy,
  DescriptionLabel,
  RaffleActive,
  RaffleId,
  RaffleTitle,
  RaffleViewContainer,
  TicketPrice,
} from "./styles";
import { Raffle } from "_types/Raffle";
import { MdPeople, MdPerson } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { BsClockFill } from "react-icons/bs";
import { RoundButton } from "components/RoundButton";
import { RafflesAPI } from "api/Raffles";
import { useToastr } from "mococa-toastr";
import { toastrError } from "helpers/errors";

// Interfaces
interface Props {
  raffle?: Raffle;
  changeRaffleStatus: (raffleId: string) => void;
}

export const RaffleView: React.FC<Props> = ({ raffle, changeRaffleStatus }) => {
  const toastr = useToastr();

  const handleRaffleTick = () => {
    if (raffle)
      RafflesAPI.tick(raffle)
        .then(() => {
          toastr.success(
            "Pronto!",
            `Rifa ${raffle.active ? "des" : ""}ativada com sucesso`
          );
          changeRaffleStatus(raffle._id);
        })
        .catch((err) => toastrError(err, toastr.error));
  };
  if (!raffle) return <RaffleViewContainer />;
  return (
    <RaffleViewContainer>
      <RaffleTitle>
        <p title="Título">{raffle.title}</p>
        <RaffleId title="ID da rifa">#{raffle._id}</RaffleId>
        <RoundButton onClick={handleRaffleTick}>
          <RaffleActive
            aria-current={raffle.active}
            title={raffle.active ? "Rifa ativa" : "Rifa desativada"}
          />
        </RoundButton>
      </RaffleTitle>
      <CreatedBy>
        <MdPerson />
        Rifa criada por: <span>{raffle.createdBy?.name}</span>
      </CreatedBy>
      <TicketPrice>
        <IoTicketOutline />
        Preço:{" "}
        {raffle.ticketPrice?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </TicketPrice>
      <Capacity>
        <MdPeople />
        Capacidade máxima: {raffle.maxUsers}
      </Capacity>
      <CreatedAt>
        <BsClockFill />
        Criada em:{" "}
        {new Date(raffle.createdAt || 0)
          .toLocaleString("pt-BR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
          .split(" ")
          .join(", ")}
      </CreatedAt>
      <DescriptionLabel>Ver descrição</DescriptionLabel>
    </RaffleViewContainer>
  );
};
