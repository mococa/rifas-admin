// External
import React from 'react';

// Types
import { Raffle } from '_types/Raffle';

// API
import { RafflesAPI } from 'api/Raffles';

// Icons
import {
  MdArrowBack,
  MdDelete,
  MdModeEdit,
  MdPeople,
  MdPerson,
} from 'react-icons/md';
import { IoTicketOutline, IoTrophy } from 'react-icons/io5';
import { BsBoxSeam, BsClockFill } from 'react-icons/bs';

// Components
import { Link } from 'react-router-dom';
import { RoundButton } from 'components/RoundButton';
import { LoadingContainer } from 'components/LoadingContainer';

// Hooks
import { useToastr } from 'mococa-toastr';

// Helpers
import { toastrError } from 'helpers/errors';
import { moneyfy } from 'helpers/number';

// Styles
import {
  Capacity,
  CreatedAt,
  CreatedBy,
  DescriptionLabel,
  More,
  Prizes,
  RaffleActionButtons,
  RaffleActive,
  RaffleId,
  RaffleTitle,
  RaffleViewContainer,
  TicketPrice,
  Tickets,
} from './styles';

// Interfaces
interface Props {
  raffle?: Raffle;
  changeRaffleStatus: (raffleId: string) => void;
  onEdit: (raffleId: string) => void;
  onDelete: (raffleId: string) => void;
  onClearSelection: () => void;
  loading: boolean;
}

export const RaffleView: React.FC<Props> = ({
  raffle,
  changeRaffleStatus,
  onEdit,
  onClearSelection,
  onDelete,
  loading,
}) => {
  const toastr = useToastr();

  const handleRaffleTick = () => {
    if (raffle)
      RafflesAPI.tick(raffle)
        .then(() => {
          toastr.success(
            'Pronto!',
            `Rifa ${raffle.active ? 'des' : ''}ativada com sucesso`
          );
          changeRaffleStatus(raffle._id);
        })
        .catch((err) => toastrError(err, toastr.error));
  };

  const handleRaffleEdit = () => {
    onEdit(raffle?._id || '');
  };
  if (loading)
    return (
      <RaffleViewContainer>
        <LoadingContainer />
      </RaffleViewContainer>
    );
  if (!raffle) return <RaffleViewContainer />;

  return (
    <RaffleViewContainer aria-current={!!raffle}>
      <RaffleTitle>
        <RoundButton onClick={onClearSelection}>
          <MdArrowBack />
        </RoundButton>
        <p title="Título">{raffle.title}</p>
        <RaffleId title="ID da rifa">#{raffle._id}</RaffleId>
        <RaffleActionButtons>
          <RoundButton onClick={() => onDelete(raffle._id)}>
            <MdDelete />
          </RoundButton>
          <RoundButton onClick={handleRaffleEdit}>
            <MdModeEdit />
          </RoundButton>
          <RoundButton onClick={handleRaffleTick}>
            <RaffleActive
              aria-current={raffle.active}
              title={raffle.active ? 'Rifa ativa' : 'Rifa desativada'}
            />
          </RoundButton>
        </RaffleActionButtons>
      </RaffleTitle>
      <CreatedBy>
        <MdPerson />
        Rifa criada por: <b>{raffle.createdBy?.name}</b>
      </CreatedBy>
      <TicketPrice>
        <IoTicketOutline />
        Preço: {moneyfy(Number(raffle.ticketPrice))}
      </TicketPrice>
      <Capacity>
        <MdPeople />
        Capacidade máxima: {raffle.maxUsers}
      </Capacity>
      <CreatedAt>
        <BsClockFill />
        Criada em:{' '}
        {new Date(raffle.createdAt || 0)
          .toLocaleString('pt-BR', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
          .split(' ')
          .join(', ')}
      </CreatedAt>
      <DescriptionLabel>Ver descrição</DescriptionLabel>
      <Prizes>
        <IoTrophy />
        Prêmios: {raffle.prizes?.map(moneyfy).join('; ')}
      </Prizes>
      <Link to={`/tickets?raffleId=${raffle._id}`}>
        <Tickets>
          <IoTicketOutline />
          <b>Bilhetes</b>
        </Tickets>
      </Link>
      <Link to={`/raffles/${raffle._id}`}>
        <More>
          <BsBoxSeam />
          <b>Mais</b>
        </More>
      </Link>
    </RaffleViewContainer>
  );
};
