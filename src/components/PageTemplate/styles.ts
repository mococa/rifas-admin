import styled from 'styled-components/macro';
import { Devices } from 'common/breakpoints';

export const PageContainer = styled.main`
  display: flex;
  flex-flow: column;
  flex: 1;
`;
export const PageWrapper = styled.div`
  display: flex;
  flex: 1;

  @media (${Devices.mobile}) {
    flex-flow: column-reverse;
  }
`;
export const ChildrenContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  --padding-top: 36px;

  padding: var(--padding-top) 24px 0;

  height: calc(100vh - var(--padding-top) - var(--header-height));

  > div:nth-of-type(2) {
    padding: 24px 0;

    height: calc(100% - 4px);
  }

  @media (${Devices.mobile}) {
    padding: 16px 8px 0;

    height: calc(
      100vh - var(--padding-top) - var(--header-height) -
        var(--nav-bottom-height) - 16px
    );
  }
`;
