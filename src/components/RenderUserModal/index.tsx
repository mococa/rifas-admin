// External
import React, { useState } from 'react';

// Helpers
import { maskCPF } from 'helpers/masks';

// Icons
import { BiHide, BiShow, BiWallet } from 'react-icons/bi';
import { IoTicketOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdPerson, MdPhone } from 'react-icons/md';
import { RiPlantLine } from 'react-icons/ri';

// Components
import { Link } from 'react-router-dom';
import { RoundButton } from 'components/RoundButton';

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
  const [showingCPF, setShowingCPF] = useState(false);
  return (
    <UserModalContent>
      <h5>#{user._id}</h5>
      <span>
        <MdPerson /> Nome: {user.name}
      </span>
      <span>
        <BiWallet /> CPF: {showingCPF ? user.cpf : maskCPF(user.cpf || '')}
        <RoundButton onClick={() => setShowingCPF(!showingCPF)}>
          {showingCPF ? <BiHide /> : <BiShow />}
        </RoundButton>
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
          Bilhetes
        </b>
      </Link>
    </UserModalContent>
  );
};
