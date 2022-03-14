// External
import React from 'react';

// Components
import { Link } from 'react-router-dom';

// Types
import { Ticket } from '_types/Tickets';

// Interfaces
interface Props {
  ticket: Ticket;
  onClose(): void;
}

export const RenderTicketModal: React.FC<Props> = ({ ticket, onClose }) => {
  return (
    <div>
      <Link to={`/raffles/${ticket.raffle?._id}`} onClick={onClose}>
        Rifa
      </Link>
    </div>
  );
};
