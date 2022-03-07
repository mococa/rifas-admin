import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  padding: 12px 24px;

  width: 100%;

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

  min-width: 150px;

  padding: 0 12px;

  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  background-color: rgba(0, 0, 0, 0.05);

  svg {
    min-width: 1rem;
  }
`;

export const SearchBoxInput = styled.input`
  padding: 10px 12px;

  flex: 1;

  background: transparent;

  border: none;

  overflow: hidden;
`;

export const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;

  margin: auto;
  margin-right: 16px;
`;

export const HeaderActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-left: 24px;
`;
