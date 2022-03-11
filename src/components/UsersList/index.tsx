// External
import React from 'react';

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
}

export const UsersList: React.FC<Props> = ({ users, onClick }) => {
  return (
    <UserListContainer>
      {users.map((user) => (
        <UserRow key={user._id} onClick={() => onClick(user)}>
          <MdPerson />
          <span>{user.cpf}</span> |<span>{user.name}</span>
        </UserRow>
      ))}
    </UserListContainer>
  );
};
