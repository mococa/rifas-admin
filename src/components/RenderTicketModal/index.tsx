// External
import React from 'react';

// Helpers
import { parseDate } from 'helpers/date';

// Icons
import { BsBoxSeam, BsClockFill } from 'react-icons/bs';
import { MdPerson } from 'react-icons/md';
import { RiHashtag } from 'react-icons/ri';

// Components
import { Link } from 'react-router-dom';

// Types
import { Ticket } from '_types/Tickets';

// Styles
import { RaffleRow, Row, TicketModalContainer, UserRow } from './styles';

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
    </TicketModalContainer>
  );
};
