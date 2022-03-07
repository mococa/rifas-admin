// Types
import { ISection } from '_types/Section/index';

// Icons
import { BsBoxSeam, BsPersonFill } from 'react-icons/bs';
import { IoTicketOutline } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';

export const getSections: ISection[] = [
  {
    label: 'Rifas',
    id: 'raffles',
    icon: BsBoxSeam({}),
    color: 'orange',
  },
  {
    label: 'Bilhetes',
    id: 'tickets',
    icon: IoTicketOutline({}),
    color: 'red',
  },
  {
    label: 'Usuários',
    id: 'users',
    icon: BsPersonFill({}),
    color: 'dark_blue',
  },
  {
    label: 'Pagamentos',
    id: 'payments',
    icon: MdPayment({}),
    color: 'green',
  },
];
