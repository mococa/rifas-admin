// External
import React, { useEffect, useState } from 'react';

// API
import { OrganizationAPI } from 'api/Organization';

// Components
import { FormCreator } from 'components/FormCreator';
import { PageTemplate } from 'components/PageTemplate';

// Helpers
import { organizationInputs } from 'helpers/inputs';

// Types
import { Organization } from '_types/Organization';
import { LoadingContainer } from 'components/LoadingContainer';

// Styles
import { OrganizationFormContainer } from './styles';

export const SettingsPage: React.FC = () => {
  // States
  const [organization, setOrganization] = useState<Organization | undefined>();

  // Effects
  useEffect(() => {
    OrganizationAPI.get().then(setOrganization);
  }, []);

  // Handlers
  const handleSaveOrganization = async (typedOrganization: Organization) => {
    await OrganizationAPI.save(typedOrganization);
    setOrganization(typedOrganization);
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
