import { CSSColors } from 'enums/colors';

export interface DialogButton {
  text: string;
  color?: keyof typeof CSSColors;
  onClick?: () => void | Promise<void>;
}

export interface DialogProps {
  title: JSX.Element | string;
  body: JSX.Element | string;
  buttons?: DialogButton[];
  onClose?: () => void;
  showCross?: boolean;
}
