// External
import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

// API
import { OrganizationAPI } from 'api/Organization';

// Components
import { FormCreator } from 'components/FormCreator';
import { PageTemplate } from 'components/PageTemplate';

// Helpers
import { organizationInputs } from 'helpers/inputs';
import { toastrError } from 'helpers/errors';

// Types
import { Organization } from '_types/Organization';
import { LoadingContainer } from 'components/LoadingContainer';

// Hooks
import { useToastr } from 'mococa-toastr';

// Styles
import { OrganizationFormContainer } from './styles';

export const SettingsPage: React.FC = () => {
  // States
  const [organization, setOrganization] = useState<Organization | undefined>();

  // Context Hooks
  const toastr = useToastr();

  // Effects
  useEffect(() => {
    OrganizationAPI.get().then(setOrganization);
  }, []);

  // Handlers
  const handleSaveOrganization = async (typedOrganization: Organization) => {
    try {
      await OrganizationAPI.save(typedOrganization);
      setOrganization(typedOrganization);
    } catch (err) {
      toastrError(err as AxiosError, toastr.error);
    }
  };

  return (
    <PageTemplate title="Organização">
      {organization && (
        <OrganizationFormContainer>
          <FormCreator
            fields={organizationInputs(organization)}
            submitButtonText="Salvar"
            onSubmit={handleSaveOrganization}
          />
        </OrganizationFormContainer>
      )}
      {!organization && <LoadingContainer />}
    </PageTemplate>
  );
};
