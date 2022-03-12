// External
import React from 'react';

// Icons
import { BiWallet } from 'react-icons/bi';
import { IoTicketOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdPerson, MdPhone } from 'react-icons/md';
import { RiPlantLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

// Types
import { User } from '_types/User';

// Styles
import { UserModalContent } from './styles';

// Interfaces
interface Props {
  user: User;
  onClose(): void;
}

export const RenderUserModal: React.FC<Props> = ({ user, onClose }) => {
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
      <Link to={`/tickets?userId=${user._id}`} onClick={onClose}>
        <b>
          <IoTicketOutline />
          Tickets
        </b>
      </Link>
    </UserModalContent>
  );
};
