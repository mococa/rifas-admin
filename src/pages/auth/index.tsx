import React from "react";
import { useToastr } from "mococa-toastr";
import { FormAuth } from "components/FormAuth";
import { deleteAllCookies } from "helpers/cookies";
import { useAuth } from "contexts/Auth";
import { useNavigate } from "react-router";

export const AuthPage = () => {
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
