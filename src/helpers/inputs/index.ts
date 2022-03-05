interface Input {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  end?: JSX.Element;
  required?: boolean;
  pattern?: string;
}

export const raffleCreationInputs: Input[] = [
  {
    name: "title",
    placeholder: "Digite o título dessa rifa",
    label: "Título",
    required: true,
  },
  {
    name: "description",
    placeholder: "Descrição",
    label: "Descrição",
    required: true,
  },
  {
    name: "prizes",
    placeholder: "Valores separados por ponto-e-vírgula (;)",
    label: "Prêmios",
  },
  {
    name: "ticketPrice",
    placeholder: "Digite um valor",
    label: "Preço do bilhete",
  },
  {
    name: "maxUsers",
    placeholder: "Digite quantos usuário podem entrar nesta rifa",
    label: "Capacidade máxima",
  },
];
