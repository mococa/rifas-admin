// External
import React from 'react';

// Helpers
import { maskCPF } from 'helpers/masks';

// Components
import { LoadingContainer } from 'components/LoadingContainer';

// Icons
import { MdPerson } from 'react-icons/md';

// Types
import { User } from '_types/User';

// Styles
import { UserListContainer, UserRow } from './styles';

// Interfaces
interface Props {
  users: User[];
  onClick(user: User): void;
  loading: boolean;
}

export const UsersList: React.FC<Props> = ({ users, onClick, loading }) => {
  return (
    <UserListContainer>
      {loading && <LoadingContainer />}
      {!loading &&
        users.map((user) => (
          <UserRow key={user._id} onClick={() => onClick(user)}>
            <MdPerson />
            <span>{maskCPF(user.cpf || '')}</span> |<span>{user.name}</span>
          </UserRow>
        ))}
    </UserListContainer>
  );
};
