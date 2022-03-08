import { Meta } from '_types/QueryMeta';

export interface Pagination<T> {
  items: T[];
  meta: Meta;
}
