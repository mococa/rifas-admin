import { Input } from '_types/Forms';
import { MdLock, MdEmail } from 'react-icons/md';
import { Patterns } from 'helpers/patterns';
import { Raffle } from '_types/Raffle';
import { moneyfy } from 'helpers/number';

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
