export interface User {
  _id: string;
  cpf?: string;
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  role?: 'user' | 'admin';
  createdAt?: string;
}
