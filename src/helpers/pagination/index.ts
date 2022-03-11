// External
import React from 'react';

// Helpers
import { toastrError } from 'helpers/errors';

// Types
import { Pagination } from '_types/Generics';

// Interfaces
interface IPagination<T> {
  pagination: number;
  currentPage: number;
  setPagesCount: React.Dispatch<React.SetStateAction<number | undefined>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  items: T[];
  setItems: (value: React.SetStateAction<T[]>) => void;
  apiFetch: (page: number) => Promise<Pagination<T>>;
  itemsPerPage?: number;
}
export const handlePaginate = <T>({
  pagination,
  currentPage,
  setPagesCount,
  setPage,
  items,
  setItems,
  apiFetch,
  itemsPerPage = 9,
}: IPagination<T>) => {
  // If paginate back
  if (pagination < 0) return setPage((_page) => _page - 1);

  // If paginate forwards, but it was already fetched before
  if (items.length > (currentPage + 1) * itemsPerPage)
    return setPage((_page) => _page + 1);

  // If paginate forwards a not fetched page
  return apiFetch(currentPage + 1)
    .then(({ items: fetchedItems, meta }) => {
      setPagesCount(meta.pages || 0);
      setItems((prevItems) => [...prevItems, ...fetchedItems]);
      setPage((_page) => _page + 1);
    })
    .catch((err) => {
      toastrError(err, console.error);
    });
};

export const slicePagination = <T>(
  items: T[],
  page: number,
  itemsPerPage: number
) => items.slice(page * itemsPerPage, itemsPerPage * (page + 1));
