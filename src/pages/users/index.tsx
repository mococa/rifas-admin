// External
import React, { useEffect, useState } from 'react';

// Types
import { User } from '_types/User';

// API
import { UserAPI } from 'api/Users';

// Helpers
import { toastrError } from 'helpers/errors';
import { slicePagination, handlePaginate } from 'helpers/pagination';

// Hooks
import { useToastr } from 'mococa-toastr';
import { useDialog } from 'contexts/Dialog';

// Components
import { PageTemplate } from 'components/PageTemplate';
import { PaginationHeader } from 'components/PaginationHeader';
import { UsersList } from 'components/UsersList';
import { RenderUserModal } from 'components/RenderUserModal';

// Constants
const itemsPerPage = 9;

export const UsersPage: React.FC = () => {
  // States
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState<number | undefined>(1);
  const [users, setUsers] = useState<User[]>([]);

  // Context Hooks
  const toastr = useToastr();
  const { createDialog } = useDialog();

  // Effects
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

  // Effects
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
      <PaginationHeader
        onNext={() => handlePagination(1)}
        onPrevious={() => handlePagination(-1)}
        pagesCount={pagesCount || 0}
        currentPage={page}
      />
      <UsersList
        users={slicePagination(users, page, itemsPerPage)}
        onClick={handleUserClick}
      />
    </PageTemplate>
  );
};
