// External
import React, { useState } from "react";
import { AxiosError } from "axios";

// APIs
import { AuthAPI } from "../../api/Auth";

// Icons
import { MdEmail, MdLock } from "react-icons/md";

// Types
import { LoginFields } from "../../_types/Auth";
import { User } from "../../_types/User";

// Helpers
import { errorHandler } from "../../helpers/errors";
import { Patterns } from "../../helpers/patterns";

// Components
import { Button } from "../Button";
import { Form } from "../Form";
import { FormInput } from "../FormInput";

// Styles
import { FormAuthContainer } from "./styles";

// Interfaces
interface Props {
  onLogin(user: User): void;
  onError(message: string): void;
}

interface Input {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  end?: JSX.Element;
  required?: boolean;
  pattern?: string;
}

const inputs: Input[] = [
  {
    name: "email",
    placeholder: "Digite seu e-mail",
    label: "E-mail",
    end: <MdEmail />,
    required: true,
    pattern: Patterns.email,
  },
  {
    name: "password",
    placeholder: "Digite sua senha",
    label: "Senha",
    type: "password",
    end: <MdLock />,
    required: true,
  },
];

export const FormAuth: React.FC<Props> = ({ onLogin, onError }) => {
  //States
  const [values, setValues] = useState<LoginFields>({
    email: "",
    password: "",
  });
  const [fetching, setFetching] = useState(false);

  //Handlers
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setFetching(true);
    try {
      const user: User = await AuthAPI.login(values as LoginFields);
      if (user.role !== "admin") {
        onError("Você não tem permissão para isso");
        return;
      }
      onLogin(user);
    } catch (error) {
      console.log({ error });
      onError(errorHandler(error as AxiosError));
    } finally {
      setFetching(false);
    }
  };

  return (
    <FormAuthContainer>
      <h4>Login</h4>
      <Form onSubmit={handleSubmit}>
        {inputs.map((currInput) => (
          <FormInput
            key={currInput.name}
            type={currInput.type || "text"}
            label={currInput.label}
            name={currInput.name}
            placeholder={currInput.placeholder}
            value={values[currInput.name as keyof LoginFields] || ""}
            onChange={handleOnChange}
            end={currInput.end}
            required={currInput.required}
            pattern={currInput.pattern}
          />
        ))}
        <Button color="green" disabled={fetching}>
          Entrar
        </Button>
      </Form>
    </FormAuthContainer>
  );
};
