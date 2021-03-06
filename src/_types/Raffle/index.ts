import { User } from '_types/User';

export interface Raffle {
  _id: string;
  prizes?: number[];
  title?: string;
  description?: string;
  active?: boolean;
  ticketPrice?: number;
  createdBy?: User;
  maxUsers?: number;
  createdAt?: string;
  amountOfUsers?: number;
}

export interface RaffleFields {
  title: string;
  description: string;
  prizes: string | number[];
  ticketPrice: string;
  maxUsers: string;
}
