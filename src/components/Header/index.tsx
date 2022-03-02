// External
import React from "react";
import { Link } from "react-router-dom";

// Icons
import { BsSearch } from "react-icons/bs";
import {
  MdLightbulb,
  MdLogout,
  MdNightlight,
  MdPowerSettingsNew,
  MdWbSunny,
} from "react-icons/md";

// Styles
import {
  HeaderActionButtons,
  HeaderLogo,
  SearchBox,
  SearchBoxInput,
  StyledHeader,
} from "./styles";
import { useDarkMode } from "contexts/DarkMode";
import { RoundButton } from "components/RoundButton";
import { useDialog } from "mococa-dialog";
import { deleteAllCookies } from "helpers/cookies";

export const Header: React.FC = ({ children }) => {
  const { isDark, toggle } = useDarkMode();
  const dialog = useDialog();

  const handleLogoff = () => {
    dialog({
      title: "Sair",
      body: "Deseja sair da sua conta?",
      cancelText: "Não",
      continueText: "Sair",
      continueButtonColor: "var(--red)",
      continueButtonTextColor: "white",
      closeOnBackdropClick: true,
      showCrossOnTop: true,
      onContinue() {
        deleteAllCookies();
        window.location.replace("/auth");
      },
    });
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
