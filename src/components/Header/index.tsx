// External
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icons
import { BsSearch } from 'react-icons/bs';
import { MdLogout, MdNightlight, MdSettings, MdWbSunny } from 'react-icons/md';

// Hooks
import { useDarkMode } from 'contexts/DarkMode';

// Components
import { RoundButton } from 'components/RoundButton';

// Helpers
import { deleteAllCookies } from 'helpers/cookies';

// Hooks
import { useDialog } from 'contexts/Dialog';

// Styles
import {
  HeaderActionButtons,
  HeaderLogo,
  SearchBox,
  SearchBoxInput,
  StyledHeader,
} from './styles';

export const Header: React.FC = () => {
  // Context Hooks
  const navigate = useNavigate();
  const { isDark, toggle } = useDarkMode();
  const { createDialog } = useDialog();

  // Handlers
  const handleLogoff = () => {
    createDialog({
      title: 'Sair',
      body: 'Deseja sair da sua conta?',
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Sair',
          color: 'red',
          onClick() {
            deleteAllCookies();
            navigate('/auth');
          },
        },
      ],
    });
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <StyledHeader>
      <Link to="/">
        <HeaderLogo src="/logo192.png" alt="logo" />
      </Link>
      <SearchBox>
        <BsSearch />
        <SearchBoxInput placeholder="Procure um usuário ou rifa" />
      </SearchBox>
      <HeaderActionButtons>
        <RoundButton onClick={handleSettings}>
          <MdSettings />
        </RoundButton>
        <RoundButton onClick={toggle}>
          {isDark ? <MdWbSunny /> : <MdNightlight />}
        </RoundButton>
        <RoundButton onClick={handleLogoff}>
          <MdLogout />
        </RoundButton>
      </HeaderActionButtons>
    </StyledHeader>
  );
};
