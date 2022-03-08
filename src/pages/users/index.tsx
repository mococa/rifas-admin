// External
import React, { useEffect, useState } from 'react';

// Types
import { User } from '_types/User';

// API
import { RafflesAPI } from 'api/Raffles';

// Helpers
import { toastrError } from 'helpers/errors';

// Hooks
import { useToastr } from 'mococa-toastr';
import { useDialog } from 'contexts/Dialog';

// Components
import { PageTemplate } from 'components/PageTemplate';
import { UserAPI } from 'api/Users';

// Styles

export const UsersPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState<number | undefined>(1);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedRaffle, setSelectedRaffle] = useState<string>('');

  const itemsPerPage = 9;

  const toastr = useToastr();
  const { createDialog, dismissDialog } = useDialog();

  useEffect(() => {
    UserAPI.list(page)
      .then(({ items, meta }) => {
        setPagesCount(meta.pages);
        setUsers((prevUsers) => [...prevUsers, ...items]);
      })
      .catch((err) => {
        toastrError(err, toastr.error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate title="Usuários">
      <div />
    </PageTemplate>
  );
};
