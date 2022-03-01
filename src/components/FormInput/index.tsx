/* ---------- External ---------- */
import React from "react";
import { EndContainer, Input, InputContainer, Label } from "./styles";

/* ---------- Interfaces ---------- */
interface Props {
  label: string;
  name: string;
  placeholder: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  errorMessage?: string;
  end?: JSX.Element;
  pattern?: string;
  value: string;
  type: React.HTMLInputTypeAttribute;
  required?: boolean;
}

export const FormInput: React.FC<Props> = ({
  label,
  placeholder,
  onChange,
  errorMessage,
  end,
  value,
  pattern,
  name,
  required,
  type,
}) => {
  return (
    <InputContainer aria-current={!!value}>
      <Label>{label}</Label>
      <Input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
        autoComplete="off"
        required={required}
      />

      {end && <EndContainer>{end}</EndContainer>}
    </InputContainer>
  );
};
