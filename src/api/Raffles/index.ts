// API
import { request } from 'api';
import { Pagination } from '_types/Generics';

// Types
import { Raffle, RaffleFields } from '_types/Raffle';

export class RafflesAPI {
  static get(page: number): Promise<Pagination<Raffle>> {
    return request.get(`/raffles?page=${page}`);
  }

  static tick(raffle: Raffle) {
    return request.patch(
      `/raffles/${raffle.active ? 'deactivate' : 'activate'}/${raffle._id}`
    );
  }

  static find(raffleId: string): Promise<Raffle> {
    return request.get(`/raffles/${raffleId}`);
  }

  static async create(raffle: RaffleFields): Promise<Raffle> {
    return request.put('/raffles', raffle);
  }

  static async edit(raffleId: string, raffle: RaffleFields): Promise<Raffle> {
    return request.patch(`/raffles/${raffleId}`, raffle);
  }

  static async delete(raffleId: string): Promise<void> {
    return request.delete(`/raffles/${raffleId}`);
  }
}
