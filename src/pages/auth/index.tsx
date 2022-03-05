// External
import React from "react";

// Components
import { FormAuth } from "components/FormAuth";

// Helpers
import { deleteAllCookies } from "helpers/cookies";

// Hooks
import { useToastr } from "mococa-toastr";
import { useNavigate } from "react-router";
import { useAuth } from "contexts/Auth";
import { AuthContainer } from "./styles";

export const AuthPage = () => {
  // Hooks
  const toastr = useToastr();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return (
    <AuthContainer>
      <FormAuth
        onLogin={(user) => {
          toastr.success("Sucesso!", `Bem vindo(a), ${user.name}`);
          setUser(user);
        }}
        onError={(err) => {
          console.log({ err });
          toastr.error("Oops!", err);
          deleteAllCookies();
        }}
      />
    </AuthContainer>
  );
};
