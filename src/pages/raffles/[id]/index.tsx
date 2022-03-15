// External
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

// API
import { RafflesAPI } from 'api/Raffles';

// Components
import { LoadingContainer } from 'components/LoadingContainer';
import { PageTemplate } from 'components/PageTemplate';
import { Link } from 'react-router-dom';

// Helpers
import { parseDate } from 'helpers/date';
import { moneyfy } from 'helpers/number';
import { toastrError } from 'helpers/errors';

// Hooks
import { useToastr } from 'mococa-toastr';

// Types
import { Raffle } from '_types/Raffle';

// Icons
import { IoTicketOutline, IoTrophy } from 'react-icons/io5';
import { BsClockFill } from 'react-icons/bs';
import { MdPeople, MdPerson } from 'react-icons/md';

// Styles
import {
  Capacity,
  CreatedAt,
  CreatedBy,
  Description,
  Prizes,
  TicketPrice,
  Tickets,
} from './styles';

export const RafflePage: React.FC = () => {
  // States
  const [raffle, setRaffle] = useState<Raffle | null>(null);
  const [loading, setLoading] = useState(true);

  // Context Hooks
  const toastr = useToastr();

  // Effects
  useEffect(() => {
    const raffleId = String(window.location.pathname.split('/').at(-1));
    RafflesAPI.find(raffleId)
      .then((fetchedRaffle: Raffle) => {
        setRaffle(fetchedRaffle);
        setLoading(false);
      })
      .catch((err) => {
        toastrError(err, toastr.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <PageTemplate title="Rifa">
        <LoadingContainer />
      </PageTemplate>
    );
  if (!raffle)
    return (
      <PageTemplate title="Rifa">
        <h3>Rifa não encontrada :(</h3>
      </PageTemplate>
    );
  return (
    <PageTemplate title="Rifa">
      <div>
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
          Capacidade: {raffle.amountOfUsers || 0}/{raffle.maxUsers}
        </Capacity>
        <CreatedAt>
          <BsClockFill />
          Criada em: {parseDate(raffle.createdAt, true)}
        </CreatedAt>
        <Description>
          <b>Descrição</b>
          <div>{parse(raffle.description || '')}</div>
        </Description>
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
      </div>
    </PageTemplate>
  );
};
