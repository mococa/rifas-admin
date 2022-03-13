export const maskCPF = (cpf: string) =>
  `${cpf.slice(0, 3)}.***.***.***-${cpf.slice(-2)}`;

export const getName = (fullName: string) => {
  const names = fullName.split(' ');
  return `${names[0]} ${names.at(-1)}`;
};

export const getFirstName = (fullName: string) => fullName.split(' ')[0];
