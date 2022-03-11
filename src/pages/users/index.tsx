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
import { PaginationHeader } from 'components/PaginationHeader';
import { handlePaginate } from 'helpers/pagination';
import { UsersList } from 'components/UsersList';
import { RenderUserModal } from 'components/RenderUserModal';

// Styles

export const UsersPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState<number | undefined>(1);
  const [users, setUsers] = useState<User[]>([]);

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
  const handlePagination = (pagination: number) => {
    if (pagination < 0 && page + 1 <= 1) return;
    handlePaginate({
      pagination,
      apiFetch: UserAPI.list,
      currentPage: page,
      items: users,
      setItems: setUsers,
      setPage,
      setPagesCount,
      itemsPerPage,
    });
  };

  const handleUserClick = (user: User) => {
    createDialog({
      title: user.name || '',
      body: <RenderUserModal user={user} />,
      showCross: true,
    });
  };

  return (
    <PageTemplate title="Usuários">
      <PaginationHeader
        onNext={() => handlePagination(1)}
        onPrevious={() => handlePagination(-1)}
        pagesCount={pagesCount || 0}
        currentPage={page}
      />
      <UsersList
        users={users.slice(page * itemsPerPage, itemsPerPage * (page + 1))}
        onClick={handleUserClick}
      />
    </PageTemplate>
  );
};
