//export {};
import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HeaderLogo, SearchBox, SearchBoxInput, StyledHeader } from "./styles";

export const Header: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <Link to="/">
        <HeaderLogo src="/logo192.png" alt="logo" />
      </Link>
      <SearchBox>
        <BsSearch />
        <SearchBoxInput placeholder="Procure um usuário ou rifa" />
      </SearchBox>
    </StyledHeader>
  );
};