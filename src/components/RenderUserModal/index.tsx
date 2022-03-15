// External
import React, { useState } from 'react';

// Helpers
import { maskCPF } from 'helpers/masks';
import { parseDate } from 'helpers/date';

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
import { Row, TicketsRow, UserModalContent } from './styles';

// Interfaces
interface Props {
  user: User;
  onClose(): void;
}

export const RenderUserModal: React.FC<Props> = ({ user, onClose }) => {
  // States
  const [showingCPF, setShowingCPF] = useState(false);

  return (
    <UserModalContent>
      <Link to={`/users/${user._id}`} onClick={onClose}>
        <h5>#{user._id}</h5>
      </Link>
      <Row>
        <MdPerson /> Nome: {user.name}
      </Row>
      <Row>
        <BiWallet /> CPF: {showingCPF ? user.cpf : maskCPF(user.cpf || '')}
        <RoundButton onClick={() => setShowingCPF(!showingCPF)}>
          {showingCPF ? <BiHide /> : <BiShow />}
        </RoundButton>
      </Row>
      <Row>
        <MdPhone />
        <span>Telefone: {user.phone}</span>
      </Row>
      <Row>
        <MdOutlineEmail />
        <span>Email: {user.email}</span>
      </Row>
      <Row>
        <RiPlantLine />
        <span>Desde: {parseDate(user.createdAt)}</span>
      </Row>
      <Link to={`/tickets?userId=${user._id}`} onClick={onClose}>
        <TicketsRow>
          <IoTicketOutline />
          <b>Bilhetes deste usuário</b>
        </TicketsRow>
      </Link>
    </UserModalContent>
  );
};
