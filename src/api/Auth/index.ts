// API
import { request } from 'api';

// Interfaces
import { LoginFields } from '_types/Auth/index';

export class AuthAPI {
  static login({ email, password }: LoginFields) {
    return request.post('/auth/sign-in', { email, password });
  }

  static getMe() {
    return request.get('/auth/me');
  }
}
