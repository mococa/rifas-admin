// External
import React from 'react';

// Icons
import { BiWallet } from 'react-icons/bi';
import { MdPerson } from 'react-icons/md';

// Hooks
import { useDialog } from 'contexts/Dialog';

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
  // Context hooks
  const { createDialog } = useDialog();

  // Handlers
  const handleTicketClick = () => {
    createDialog({
      title: `Bilhete do(a) ${user?.name}`,
      body: <div />,
      showCross: true,
    });
  };

  return (
    <TicketContainer
      aria-current={raffle?.active || 'false'}
      aria-label={status}
      onClick={handleTicketClick}
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
