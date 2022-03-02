import styled from "styled-components/macro";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  padding: 12px 24px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  a:first-of-type {
    line-height: normal;
    font-size: xx-small;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  padding: 0 12px;

  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SearchBoxInput = styled.input`
  padding: 10px 12px;

  background: transparent;

  border: none;

  flex: 1;
`;

export const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;

  margin: auto;
  margin-right: 16px;
`;
