import React from 'react';
import { toastrError } from 'helpers/errors';
import { Pagination } from '_types/Generics';

interface Props<T> {
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
}: Props<T>) => {
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
