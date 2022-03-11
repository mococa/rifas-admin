// External
import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

// Types
import { Raffle, RaffleFields } from '_types/Raffle';

// API
import { RafflesAPI } from 'api/Raffles';

// Helpers
import { toastrError } from 'helpers/errors';
import { handlePaginate, slicePagination } from 'helpers/pagination';
import { editRaffleInputs, raffleInputs } from 'helpers/inputs';

// Hooks
import { useToastr } from 'mococa-toastr';
import { useDialog } from 'contexts/Dialog';

// Components
import { PageTemplate } from 'components/PageTemplate';
import { RafflesList } from 'components/RafflesList';
import { RaffleView } from 'components/RaffleView';
import { FormCreator } from 'components/FormCreator';

// Styles
import { RafflesContainer } from './styles';

// Constants
const itemsPerPage = 9;

export const RafflesPage: React.FC = () => {
  // States
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState<number | undefined>(1);
  const [raffles, setRaffles] = useState<Raffle[]>([]);
  const [selectedRaffle, setSelectedRaffle] = useState<string>('');

  // Context Hooks
  const toastr = useToastr();
  const { createDialog, dismissDialog } = useDialog();

  // Effects
  useEffect(() => {
    RafflesAPI.get(page)
      .then(({ items, meta }) => {
        setPagesCount(meta.pages);
        setRaffles((prevRaffles) => [...prevRaffles, ...items]);
      })
      .catch((err) => {
        toastrError(err, toastr.error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handlers
  const handlePagination = (pagination: number) => {
    if (pagination < 0 && page + 1 <= 1) return;
    handlePaginate({
      pagination,
      apiFetch: RafflesAPI.get,
      currentPage: page,
      items: raffles,
      setItems: setRaffles,
      setPage,
      setPagesCount,
      itemsPerPage,
    });
  };

  const handleSelectRaffle = (raffle?: Raffle) => {
    if (!raffle) {
      setSelectedRaffle('');
      return;
    }
    setSelectedRaffle(raffle._id);
  };

  const handleChangeRaffleStatus = (raffleId: string) => {
    setRaffles(
      raffles.map((raffle) => {
        if (raffle._id === raffleId) raffle.active = !raffle.active;
        return raffle;
      })
    );
  };

  const handleRaffleCreation = () => {
    createDialog({
      title: 'Nova rifa',
      body: (
        <FormCreator
          fields={raffleInputs()}
          onSubmit={async (raffleFields: RaffleFields) => {
            try {
              const raffle = await RafflesAPI.create({
                ...raffleFields,
                prizes: String(raffleFields.prizes)
                  .trim()
                  .split(';')
                  .map(Number),
              });
              setPage(0);
              setRaffles([raffle, ...raffles]);
              setTimeout(() => {
                dismissDialog();
              }, 100);
            } catch (error) {
              toastrError(error as AxiosError, toastr.error);
            }
          }}
          submitButtonText="Criar"
        />
      ),
      showCross: true,
    });
  };

  const handleRaffleEdit = (raffleId: string) => {
    const raffle: Raffle | undefined = raffles.find(
      (rff) => rff._id === raffleId
    );
    if (!raffle) return;
    createDialog({
      title: 'Editar rifa',
      body: (
        <FormCreator
          fields={editRaffleInputs(raffle)}
          onSubmit={async (raffleFields: RaffleFields) => {
            try {
              const editedRaffle = await RafflesAPI.edit(raffle._id, {
                ...raffleFields,
                prizes: String(raffleFields.prizes).split(';').map(Number),
              });
              setPage(0);
              setRaffles((prevRaffles) =>
                prevRaffles.map((prevRaffle) => {
                  if (prevRaffle._id === editedRaffle._id)
                    prevRaffle = editedRaffle;
                  return prevRaffle;
                })
              );

              setTimeout(() => {
                dismissDialog();
              }, 100);
            } catch (error) {
              toastrError(error as AxiosError, toastr.error);
            }
          }}
          submitButtonText="Editar"
          buttonColor="blue"
        />
      ),
      showCross: true,
    });
  };

  const handleRaffleDelete = (id: string) => {
    createDialog({
      title: 'Deletar rifa',
      body: 'Deseja deletar esta rifa?',
      showCross: true,
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Deletar',
          color: 'red',
          onClick: async () => {
            try {
              await RafflesAPI.delete(id);
              toastr.success('Pronto!', 'Rifa deletada com sucesso');
              handleSelectRaffle();
              setRaffles((prevRaffles) =>
                prevRaffles.filter((raffle) => raffle._id !== id)
              );
            } catch (error) {
              toastrError(error as AxiosError, toastr.error);
            }
          },
        },
      ],
    });
  };

  return (
    <PageTemplate title="Rifas">
      <RafflesContainer>
        <RafflesList
          raffles={slicePagination(raffles, page, itemsPerPage)}
          page={page}
          pagesCount={pagesCount || 1}
          paginate={handlePagination}
          onSelect={handleSelectRaffle}
          onCreateRaffle={handleRaffleCreation}
          selectedRaffle={selectedRaffle}
        />
        <RaffleView
          onEdit={handleRaffleEdit}
          changeRaffleStatus={handleChangeRaffleStatus}
          onClearSelection={() => handleSelectRaffle()}
          raffle={raffles.find((raffle) => raffle._id === selectedRaffle)}
          onDelete={handleRaffleDelete}
        />
      </RafflesContainer>
    </PageTemplate>
  );
};
