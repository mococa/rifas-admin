// External
import React from 'react';

// Components
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { BackButtonTitle } from 'components/BackButtonTitle';

// Hooks
// import { useAuth } from 'contexts/Auth';

// Helpers
// import { getCookie } from 'helpers/cookies';

// Styles
import { ChildrenContainer, PageContainer, PageWrapper } from './styles';

// Interfaces
interface Props {
  title?: string;
}

export const PageTemplate: React.FC<Props> = ({ children, title }) => {
  // const cookie = getCookie("jwt");
  // Hooks
  // const { user } = useAuth();
  // const navigate = useNavigate();

  // Effects
  // useEffect(() => {
  //   if (!user && !cookie) {
  //     navigate("/auth");
  //   }
  // }, [cookie, user, navigate]);

  return (
    <PageContainer>
      <Header />
      <PageWrapper>
        <Sidebar />
        <ChildrenContainer>
          {title && <BackButtonTitle text={title} />}
          {children}
        </ChildrenContainer>
      </PageWrapper>
    </PageContainer>
  );
};
