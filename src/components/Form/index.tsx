/* ---------- External ---------- */
import React from "react";

/* ---------- Styles ---------- */
import { FormContainer } from "./styles";

interface Props {
  onSubmit(): void;
}

export const Form: React.FC<Props> = ({ children, onSubmit }) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <FormContainer onSubmit={handleOnSubmit}>
      {children}
    </FormContainer>
  );
};
