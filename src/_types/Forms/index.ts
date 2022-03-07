export interface Input {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  end?: JSX.Element;
  required?: boolean;
  pattern?: string;
  defaultValue?: string;
  onClick?: (values: { [key: string]: string }) => void;
}
