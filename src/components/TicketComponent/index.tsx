// External
import React from 'react';

// Helpers
import { getFirstName, getName, maskCPF } from 'helpers/masks';

// Icons
import { BiWallet } from 'react-icons/bi';
import { MdPerson } from 'react-icons/md';

// Hooks
import { useDialog } from 'contexts/Dialog';

// Types
import { Ticket } from '_types/Tickets';

// Components
import { RenderTicketModal } from 'components/RenderTicketModal';

// Styles
import {
  TicketBody,
  TicketContainer,
  TicketHeader,
  TicketInfo,
  TicketNumber,
} from './styles';

// Interface
interface Props {
  ticket: Ticket;
}

export const TicketComponent: React.FC<Props> = ({ ticket }) => {
  // Context hooks
  const { createDialog, dismissDialog } = useDialog();

  // Handlers
  const handleTicketClick = () => {
    createDialog({
      title: `Bilhete do(a) ${getFirstName(ticket.user?.name || '')}`,
      body: <RenderTicketModal ticket={ticket} onClose={dismissDialog} />,
      showCross: true,
    });
  };

  return (
    <TicketContainer
      aria-current={ticket.raffle?.active || 'false'}
      aria-label={ticket.status}
      onClick={handleTicketClick}
    >
      <TicketHeader>{ticket.raffle?.title}</TicketHeader>
      <TicketBody>
        <TicketNumber>#{ticket.number}</TicketNumber>
        <TicketInfo>
          <div>
            <MdPerson />
            <span>{getName(ticket.user?.name || '')}</span>
          </div>
          <div>
            <BiWallet />
            <span>{maskCPF(ticket.user?.cpf || '')}</span>
          </div>
        </TicketInfo>
      </TicketBody>
    </TicketContainer>
  );
};
