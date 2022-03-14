// External
import React, { useEffect, useState } from 'react';

// Types
import { Ticket } from '_types/Tickets';

// Enums
import { TicketStatus } from 'enums/tickets';

// Helpers
import { handlePaginate } from 'helpers/pagination';
import { TicketsFilterInputs } from 'helpers/inputs';

// APIs
import { TicketAPI } from 'api/Tickets';

// Components
import { TicketComponent } from 'components/TicketComponent';
import { PageTemplate } from 'components/PageTemplate';
import { PaginationHeader } from 'components/PaginationHeader';
import { FormCreator } from 'components/FormCreator';
import { LoadingContainer } from 'components/LoadingContainer';

// Hooks
import { useNavigate } from 'react-router-dom';
// import { useToastr } from 'mococa-toastr';

// Styles
import { FiltersContainer, TicketsContainer, TicketsGrid } from './styles';

const itemsPerPage = 12;

const getParams = (query: string) =>
  new URLSearchParams(window.location.search).get(query) || '';

export const TicketsPage: React.FC = () => {
  // States
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState<number | undefined>();
  const [byUser, setByUser] = useState(getParams('userId'));
  const [byRaffle, setByRaffle] = useState(getParams('raffleId'));
  const [byNumber, setByNumber] = useState(getParams('ticketNo'));
  const [loading, setLoading] = useState(true);

  // Context Hooks
  // const toastr = useToastr();
  const navigate = useNavigate();

  // Handlers
  const handleFetchTickets = async (currentPage = 0) => {
    setLoading(true);
    const fetchedTickets = await TicketAPI.list(
      currentPage,
      byUser,
      byRaffle,
      byNumber,
      itemsPerPage
    );
    setLoading(false);
    return fetchedTickets;
  };

  const handlePagination = async (pagination: number) => {
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
    ticketNo,
  }: {
    userId: string;
    raffleId: string;
    ticketNo: string;
  }) => {
    if (userId.trim() || raffleId.trim()) setLoading(true);
    setByUser(userId.trim());
    setByRaffle(raffleId.trim());
    setByNumber(ticketNo.trim());
  };

  // Effects
  useEffect(() => {
    if ((byUser || byRaffle || byNumber) && tickets.length) {
      setPage(0);
      setTickets([]);
    }
    handleFetchTickets(0).then(({ items }) => setTickets(items));
  }, [byUser, byRaffle, byNumber]);

  useEffect(() => {
    const query =
      '?' +
      `${byUser ? `userId=${byUser}&` : ''}${
        byRaffle ? `raffleId=${byRaffle}&` : ''
      }${byNumber ? `ticketNo=${byNumber}&` : ''}`;

    const shouldChangeSearch =
      window.location.search !== query &&
      (window.location.search || query.slice(1)) &&
      (byRaffle !== getParams('raffleId') ||
        byUser !== getParams('userId') ||
        byNumber !== getParams('ticketNo'));

    if (shouldChangeSearch) navigate(query.slice(0, -1));

    if (page > 0) {
      handleFetchTickets(page);
    }
  }, [byUser, byRaffle, byNumber, page]);

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
            fields={TicketsFilterInputs(byUser, byRaffle, byNumber)}
            submitButtonText="Filtrar"
            onSubmit={handleFilter}
          />
        </FiltersContainer>
        {loading && <LoadingContainer />}
        {!loading && (
          <TicketsGrid>
            {tickets.map((ticket) => (
              <TicketComponent key={ticket._id} ticket={ticket} />
            ))}
          </TicketsGrid>
        )}
      </TicketsContainer>
    </PageTemplate>
  );
};
