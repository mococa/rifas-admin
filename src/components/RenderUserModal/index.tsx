// External
import React from 'react';

// Icons
import { BiWallet } from 'react-icons/bi';
import { IoTicketOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdPerson, MdPhone } from 'react-icons/md';
import { RiPlantLine } from 'react-icons/ri';

// Types
import { User } from '_types/User';

// Styles
import { UserModalContent } from './styles';

// Interfaces
interface Props {
  user: User;
}

export const RenderUserModal: React.FC<Props> = ({ user }) => {
  return (
    <UserModalContent>
      <h5>#{user._id}</h5>
      <span>
        <MdPerson /> Nome: {user.name}
      </span>
      <span>
        <BiWallet /> CPF: {user.cpf}
      </span>
      <span>
        <MdPhone />
        Telefone: {user.phone}
      </span>
      <span>
        <MdOutlineEmail />
        Email: {user.email}
      </span>
      <span>
        <RiPlantLine />
        Desde: {new Date(user.createdAt || 0).toLocaleDateString('pt-BR')}
      </span>
      <b>
        <IoTicketOutline />
        Tickets
      </b>
    </UserModalContent>
  );
};
