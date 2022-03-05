import { Meta } from "_types/QueryMeta";
import { Raffle, RaffleFields } from "_types/Raffle";
// API
import { request } from "./../index";

export class RafflesAPI {
  static get(page: number): Promise<{ items: Raffle[]; meta: Meta }> {
    return request.get(`/raffles?page=${page}`);
  }
  static tick(raffle: Raffle) {
    return request.patch(
      `/raffles/${raffle.active ? "deactivate" : "activate"}/${raffle._id}`
    );
  }
  static async create(raffle: RaffleFields): Promise<Raffle> {
    return request.put("/raffles", raffle);
  }
}
