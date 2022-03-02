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

export const AuthPage = () => {
  // Hooks
  const toastr = useToastr();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <FormAuth
        onLogin={(user) => {
          //setUser(user);
          toastr.success("Sucesso!", `Bem vindo(a), ${user.name}`);
          navigate("/");
        }}
        onError={(err) => {
          console.log({ err });
          toastr.error("Oops!", err);
          deleteAllCookies();
        }}
      />
    </div>
  );
};
