import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";

import { useAuth } from "contexts/Auth";

import { getCookie } from "helpers/cookies";

import { ChildrenContainer, PageContainer, PageWrapper } from "./styles";
import { BackButtonTitle } from "components/BackButtonTitle";

interface Props {
  title?: string;
}

export const PageTemplate: React.FC<Props> = ({ children, title }) => {
  // const { user } = useAuth();
  // const cookie = getCookie("jwt");
  // const navigate = useNavigate();
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
