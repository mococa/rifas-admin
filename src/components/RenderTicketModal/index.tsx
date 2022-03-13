import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket } from '_types/Tickets';

interface Props {
  ticket: Ticket;
}

export const RenderTicketModal: React.FC<Props> = ({ ticket }) => {
  return (
    <div>
      <Link to={`/raffles/${ticket.raffle?._id}`}>Rifa</Link>
    </div>
  );
};
