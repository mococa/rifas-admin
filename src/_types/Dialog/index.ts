export interface DialogButton {
    text: string;
    variant?: 'primary' | 'secondary' | 'text';
    onClick?: () => void | Promise<void>;
  }
  
  export interface DialogProps {
    title: JSX.Element | string;
    body: JSX.Element | string;
    buttons?: DialogButton[];
    onClose?: () => void;
    showCross?: boolean;
  }
  