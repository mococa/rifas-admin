// External
import React, { useEffect, useState } from 'react';

// Types
import { Ticket } from '_types/Tickets';

// Enums
import { TicketStatus } from 'enums/tickets';

// Helpers
import { handlePaginate } from 'helpers/pagination';

// APIs
import { TicketAPI } from 'api/Tickets';

// Components
import { TicketComponent } from 'components/TicketComponent';
import { PageTemplate } from 'components/PageTemplate';
import { PaginationHeader } from 'components/PaginationHeader';
import { FormCreator } from 'components/FormCreator';
import { LoadingContainer } from 'components/LoadingContainer';

// Hooks
import { useSearchParams } from 'react-router-dom';

// Styles
import { FiltersContainer, TicketsContainer, TicketsGrid } from './styles';

const itemsPerPage = 20;

export const TicketsPage: React.FC = () => {
  // States
  const [searchParams, setSearchParams] = useSearchParams();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState<number | undefined>();
  const [byUser, setByUser] = useState(searchParams.get('userId') || '');
  const [byRaffle, setByRaffle] = useState(searchParams.get('raffleId') || '');
  const [loading, setLoading] = useState(true);

  // Handlers
  const handleFetchTickets = (currentPage: number) => {
    return TicketAPI.list(currentPage, byUser, byRaffle, itemsPerPage);
  };

  const handlePagination = async (pagination: number) => {
    if (pagination < 0 && page + 1 <= 1) return;
    setLoading(true);
    await handlePaginate({
      pagination,
      apiFetch: handleFetchTickets,
      currentPage: page,
      items: tickets,
      setItems: setTickets,
      setPage,
      setPagesCount,
      itemsPerPage,
    });
    setLoading(false);
  };

  const handleFilter = async ({
    userId,
    raffleId,
  }: {
    userId: string;
    raffleId: string;
  }) => {
    setLoading(true);
    setByUser(userId.trim());
    setByRaffle(raffleId.trim());
  };

  // Effects
  useEffect(() => {
    const query =
      '?' +
      `${byUser ? `userId=${byUser}&` : ''}${
        byRaffle ? `raffleId=${byRaffle}&` : ''
      }`;
    setSearchParams(query);
  }, [byUser, byRaffle]);

  useEffect(() => {
    handleFetchTickets(page).then(() => setLoading(false));
  }, [searchParams, page]);

  return (
    <PageTemplate title="Bilhetes">
      <PaginationHeader
        onNext={() => handlePagination(1)}
        onPrevious={() => handlePagination(-1)}
        pagesCount={pagesCount || 1}
        currentPage={page}
      />
      <TicketsContainer>
        <FiltersContainer>
          <FormCreator
            fields={[
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
            ]}
            submitButtonText="Filtrar"
            onSubmit={handleFilter}
          />
        </FiltersContainer>
        {loading && <LoadingContainer />}
        {!loading && (
          <TicketsGrid>
            {tickets.map((ticket) => (
              <TicketComponent
                key={ticket._id}
                _id={ticket._id}
                user={ticket.user}
                raffle={ticket.raffle}
                status={ticket.status as TicketStatus}
                number={ticket.number}
              />
            ))}
          </TicketsGrid>
        )}
      </TicketsContainer>
    </PageTemplate>
  );
};
