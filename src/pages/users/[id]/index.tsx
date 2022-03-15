// External
import React, { useEffect, useState } from 'react';

// Components
import { LoadingContainer } from 'components/LoadingContainer';
import { PageTemplate } from 'components/PageTemplate';
import { RoundButton } from 'components/RoundButton';
import { Link } from 'react-router-dom';

// Helpers
import { toastrError } from 'helpers/errors';
import { maskCPF } from 'helpers/masks';
import { parseDate } from 'helpers/date';

// API
import { UserAPI } from 'api/Users';

// Icons
import { BiHide, BiShow, BiWallet } from 'react-icons/bi';
import { IoTicketOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdPerson, MdPhone } from 'react-icons/md';
import { RiPlantLine } from 'react-icons/ri';

// Types
import { User } from '_types/User';

// Hooks
import { useToastr } from 'mococa-toastr';

// Styles
import { Row, TicketsRow, UserPageContainer } from './styles';

export const UserPage: React.FC = () => {
  // States
  const [user, setuser] = useState<User | null>(null);
  const [showingCPF, setShowingCPF] = useState(false);
  const [loading, setLoading] = useState(true);

  // Context Hooks
  const toastr = useToastr();

  // Effects
  useEffect(() => {
    const userId = String(window.location.pathname.split('/').at(-1));
    UserAPI.find(userId)
      .then((fetcheduser: User) => {
        setuser(fetcheduser);
        setLoading(false);
      })
      .catch((err) => {
        toastrError(err, toastr.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <PageTemplate title="Carregando usuário...">
        <LoadingContainer />
      </PageTemplate>
    );
  if (!user)
    return (
      <PageTemplate title="Oops!">
        <h3>Usuário não encontrado :(</h3>
      </PageTemplate>
    );

  return (
    <PageTemplate title="Usuário">
      <UserPageContainer>
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
        <Link to={`/tickets?userId=${user._id}`}>
          <TicketsRow>
            <IoTicketOutline />
            <b>Bilhetes deste usuário</b>
          </TicketsRow>
        </Link>
      </UserPageContainer>
    </PageTemplate>
  );
};
