// External
import React from 'react';
import { AxiosError } from 'axios';

// APIs
import { AuthAPI } from 'api/Auth';

// Types
import { LoginFields } from '_types/Auth';
import { User } from '_types/User';

// Helpers
import { errorHandler } from 'helpers/errors';
import { authInputs } from 'helpers/inputs';

// Components
import { FormCreator } from 'components/FormCreator';

// Styles
import { FormAuthContainer } from './styles';

// Interfaces
interface Props {
  onLogin(user: User): void;
  onError(message: string): void;
}

export const FormAuth: React.FC<Props> = ({ onLogin, onError }) => {
  const handleSubmit = async (values: { [key: string]: string }) => {
    try {
      const user: User = await AuthAPI.login(values as unknown as LoginFields);
      if (user.role !== 'admin') {
        onError('Você não tem permissão para isso');
        return;
      }
      onLogin(user);
    } catch (error) {
      console.error(error);
      onError(errorHandler(error as AxiosError));
    }
  };

  return (
    <FormAuthContainer>
      <h4>Login</h4>
      <FormCreator
        fields={authInputs()}
        onSubmit={handleSubmit}
        submitButtonText="Entrar"
      />
    </FormAuthContainer>
  );
};
