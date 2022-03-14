import { Input } from '_types/Forms';
import { MdLock, MdEmail } from 'react-icons/md';
import { Patterns } from 'helpers/patterns';
import { Raffle } from '_types/Raffle';
import { moneyfy } from 'helpers/number';
import { Organization } from '_types/Organization';

export const authInputs = () =>
  [
    {
      name: 'email',
      placeholder: 'Digite seu e-mail',
      label: 'E-mail',
      end: MdEmail({}),
      required: true,
      pattern: Patterns.email,
    },
    {
      name: 'password',
      placeholder: 'Digite sua senha',
      label: 'Senha',
      type: 'password',
      end: MdLock({}),
      required: true,
    },
  ] as Input[];

export const raffleInputs = () =>
  [
    {
      name: 'title',
      placeholder: 'Digite o título dessa rifa',
      label: 'Título',
      required: true,
    },
    {
      name: 'description',
      placeholder: 'Descrição',
      label: 'Descrição',
      required: true,
    },
    {
      name: 'prizes',
      placeholder: 'Valores separados por ponto-e-vírgula (;)',
      label: 'Prêmios',
    },
    {
      name: 'ticketPrice',
      placeholder: 'Digite um valor',
      label: 'Preço do bilhete',
    },
    {
      name: 'maxUsers',
      placeholder: 'Digite quantos usuário podem entrar nesta rifa',
      label: 'Capacidade máxima',
    },
    {
      name: 'calculate',
      label: 'Calcular',
      type: 'button',
      onClick(values) {
        const { ticketPrice, prizes, maxUsers } = values;
        const total = Number(ticketPrice) * Number(maxUsers);
        const cost = prizes
          .split(';')
          .map(Number)
          .reduce((acc, curr) => acc + curr, 0);
        // eslint-disable-next-line no-alert
        alert(
          `Acúmulo máximo com bilhete = ${moneyfy(
            total
          )}\nCusto de prêmios = ${moneyfy(cost)}\nRetorno = ${moneyfy(
            total - cost
          )}`
        );
      },
    },
  ] as Input[];

export const editRaffleInputs = (raffle: Raffle) =>
  [...raffleInputs()].map((input) => {
    Object.keys(raffle).forEach((key) => {
      if (key === input.name) {
        input.defaultValue = String(raffle[key as keyof Raffle]) || '';
      }
      if (input.name === 'prizes') {
        input.defaultValue = (input.defaultValue || '').replace(/,/g, '; ');
      }
    });
    return input;
  });

export const organizationInputs = (organization: Organization) => {
  const typeThe = (thing: string) => `Digite ${thing} da organição`;
  return [
    {
      name: 'zip',
      placeholder: typeThe('o CEP'),
      label: 'CEP',
      defaultValue: organization.zip,
      required: true,
      type: 'tel',
    },
    {
      name: 'street',
      placeholder: typeThe('a rua'),
      label: 'Rua',
      defaultValue: organization.street,
      required: true,
    },
    {
      name: 'number',
      placeholder: typeThe('o número'),
      label: 'Número',
      defaultValue: organization.number,
      required: true,
    },
    {
      name: 'district',
      placeholder: typeThe('o bairro'),
      label: 'Bairro',
      defaultValue: organization.district,
      required: true,
    },
    {
      name: 'city',
      placeholder: typeThe('a cidade'),
      label: 'Cidade',
      defaultValue: organization.city,
      required: true,
    },
    {
      name: 'state',
      placeholder: typeThe('o Estado'),
      label: 'UF',
      defaultValue: organization.state,
      required: true,
    },
  ] as Input[];
};

export const TicketsFilterInputs = (
  byUser: string,
  byRaffle: string,
  byNumber: string
) =>
  [
    {
      name: 'userId',
      label: 'Usuário',
      placeholder: 'ID do usuário',
      defaultValue: byUser,
    },
    {
      name: 'raffleId',
      label: 'Rifa',
      placeholder: 'ID da rifa',
      defaultValue: byRaffle,
    },
    {
      name: 'ticketNo',
      label: 'Número',
      placeholder: 'Número do bilhete',
      defaultValue: byNumber,
    },
  ] as Input[];
