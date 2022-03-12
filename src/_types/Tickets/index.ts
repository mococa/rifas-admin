// Types
import { Raffle } from '_types/Raffle';
import { User } from '_types/User';

// Enums
import { TicketStatus } from 'enums/tickets';

export interface Ticket {
  _id: string;
  user?: User | null;
  raffle?: Raffle;
  number?: number;
  status: TicketStatus;
}
