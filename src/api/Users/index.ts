// API
import { request } from 'api';
import { Pagination } from '_types/Generics';

// Types
import { User } from '_types/User';

export class UserAPI {
  static list(page: number): Promise<Pagination<User>> {
    return request.get(`/users?page=${page}`);
  }
}
