// API
import { request } from 'api';
import { Pagination } from '_types/Generics';

// Types
import { Ticket } from '_types/Tickets';

export class TicketAPI {
  static list(
    page: number,
    userId: string,
    raffleId: string,
    ipp: number
  ): Promise<Pagination<Ticket>> {
    return request.get(
      `/tickets/admin?page=${page}${userId ? `&userId=${userId}` : ''}${
        raffleId ? `&raffleId=${raffleId}` : ''
      }&ipp=${ipp}`
    );
  }
}
