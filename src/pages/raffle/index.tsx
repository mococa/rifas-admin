// External
import React, { useEffect, useState } from 'react';

// API
import { RafflesAPI } from 'api/Raffles';

// Components
import { LoadingContainer } from 'components/LoadingContainer';
import { PageTemplate } from 'components/PageTemplate';

// Helpers
import { toastrError } from 'helpers/errors';

// Hooks
import { useToastr } from 'mococa-toastr';

// Types
import { Raffle } from '_types/Raffle';

export const RafflePage: React.FC = () => {
  // States
  const [raffle, setRaffle] = useState<Raffle | null>(null);
  const [loading, setLoading] = useState(true);

  // Context Hooks
  const toastr = useToastr();

  // Effects
  useEffect(() => {
    const raffleId = String(window.location.pathname.split('/').at(-1));
    RafflesAPI.find(raffleId)
      .then((fetchedRaffle: Raffle) => {
        setRaffle(fetchedRaffle);
        setLoading(false);
      })
      .catch((err) => {
        toastrError(err, toastr.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <PageTemplate title="Rifa">
        <LoadingContainer />
      </PageTemplate>
    );
  if (!raffle)
    return (
      <PageTemplate title="Rifa">
        <h1>Rifa não encontrada</h1>
      </PageTemplate>
    );
  return (
    <PageTemplate title="Rifa">
      <div>
        <span>{raffle?._id}</span>
      </div>
    </PageTemplate>
  );
};
