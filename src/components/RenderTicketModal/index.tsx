// External
import React from 'react';

// Helpers
import { parseDate } from 'helpers/date';
import { getFirstName } from 'helpers/masks';

// Icons
import { BsBoxSeam, BsClockFill } from 'react-icons/bs';
import { MdPerson } from 'react-icons/md';
import { IoTicketOutline } from 'react-icons/io5';
import { RiHashtag } from 'react-icons/ri';

// Components
import { Link } from 'react-router-dom';

// Types
import { Ticket } from '_types/Tickets';

// Styles
import {
  RaffleRow,
  Row,
  TicketModalContainer,
  TicketRow,
  UserRow,
} from './styles';

// Interfaces
interface Props {
  ticket: Ticket;
  onClose(): void;
}

export const RenderTicketModal: React.FC<Props> = ({ ticket, onClose }) => {
  return (
    <TicketModalContainer>
      <Row>
        <b>Status:</b>
        <span>{ticket.status}</span>
      </Row>
      <Row>
        <RiHashtag />
        <span>Nº {ticket.number}</span>
      </Row>
      <Link to={`/raffles/${ticket.raffle?._id}`} onClick={onClose}>
        <RaffleRow>
          <BsBoxSeam />
          <b>Rifa</b>
        </RaffleRow>
      </Link>
      <Link to={`/users/${ticket.user?._id}`} onClick={onClose}>
        <UserRow>
          <MdPerson />
          <b>Detalhes do usuário</b>
        </UserRow>
      </Link>
      <Row>
        <BsClockFill />
        <span>Comprado às {parseDate(ticket.createdAt, true)}</span>
      </Row>
      <br />
      <a href={`/tickets?userId=${ticket.user?._id}`}>
        <TicketRow>
          <IoTicketOutline />
          <b>Ver bilhetes de {getFirstName(ticket.user?.name || '')}</b>
        </TicketRow>
      </a>
      <a href={`/tickets?raffleId=${ticket.raffle?._id}`}>
        <TicketRow>
          <BsBoxSeam />
          <b>Ver bilhetes desta rifa</b>
        </TicketRow>
      </a>
    </TicketModalContainer>
  );
};
