// External
import React from 'react';

// Icons
import { BiWallet } from 'react-icons/bi';
import { MdPerson } from 'react-icons/md';

// Types
import { Ticket } from '_types/Tickets';

// Styles
import {
  TicketBody,
  TicketContainer,
  TicketHeader,
  TicketInfo,
  TicketNumber,
} from './styles';

export const TicketComponent: React.FC<Ticket> = ({
  user,
  raffle,
  number,
  status,
}) => {
  return (
    <TicketContainer
      aria-current={raffle?.active || 'false'}
      aria-label={status}
    >
      <TicketHeader>{raffle?.title}</TicketHeader>
      <TicketBody>
        <TicketNumber>#{number}</TicketNumber>
        <TicketInfo>
          <div>
            <MdPerson />
            <span>{user?.name}</span>
          </div>
          <div>
            <BiWallet />
            <span>{user?.cpf}</span>
          </div>
        </TicketInfo>
      </TicketBody>
    </TicketContainer>
  );
};
