// External
import React, { useEffect, useState } from "react";

// Components
import { PageTemplate } from "components/PageTemplate";
import { RafflesList } from "components/RafflesList";
import { RaffleView } from "components/RaffleView";

import { Raffle, RaffleFields } from "_types/Raffle";

// Styles
import { RafflesContainer } from "./styles";
import { RafflesAPI } from "api/Raffles";
import { toastrError } from "helpers/errors";
import { useToastr } from "mococa-toastr";
import { Form } from "components/Form";
import { raffleCreationInputs } from "helpers/inputs";
import { FormInput } from "components/FormInput";
import { useDialog } from "contexts/Dialog";
import { Button } from "components/Button";
import { AxiosError } from "axios";

interface RenderProps {
  onRaffleCreate: (raffle: Raffle) => void;
}

const RenderRaffleDialog = ({ onRaffleCreate }: RenderProps) => {
  const [raffleFields, setRaffleFields] = useState<RaffleFields>({
    title: "",
    description: "",
    prizes: "",
    ticketPrice: "",
    maxUsers: "",
  });

  const toastr = useToastr();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaffleFields((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Form onSubmit={() => null}>
      {raffleCreationInputs.map((currInput) => (
        <FormInput
          key={currInput.name}
          type={currInput.type || "text"}
          label={currInput.label}
          name={currInput.name}
          placeholder={currInput.placeholder}
          value={raffleFields[currInput.name as keyof RaffleFields]}
          onChange={handleOnChange}
          end={currInput.end}
          required={currInput.required}
          pattern={currInput.pattern}
        />
      ))}
      <br />
      <Button
        onClick={async () => {
          try {
            const createdRaffle = await RafflesAPI.create(raffleFields);
            onRaffleCreate(createdRaffle);
          } catch (error) {
            toastrError(error as AxiosError, toastr.error);
          }
        }}
      >
        Criar
      </Button>
    </Form>
  );
};

export const RafflesPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState<number | undefined>(1);
  const [raffles, setRaffles] = useState<Raffle[]>([]);
  const [selectedRaffle, setSelectedRaffle] = useState<string>("");

  const [creatingRaffle, setCreatingRaffle] = useState<RaffleFields | null>(
    null
  );

  const itemsPerPage = 9;

  const toastr = useToastr();
  const { createDialog, dismissDialog } = useDialog();

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

  useEffect(() => {
    console.log({ creatingRaffle });
  }, [creatingRaffle]);

  const handlePaginate = (pagination: number) => {
    // If paginate back
    if (pagination < 0) return setPage((_page) => _page - 1);

    // If paginate forwards, but it was already fetched before
    if (raffles.length > (page + 1) * itemsPerPage)
      return setPage((_page) => _page + 1);

    // If paginate forwards a not fetched page
    RafflesAPI.get(page + 1)
      .then(({ items, meta }) => {
        setPagesCount(meta.pages);
        setRaffles((prevRaffles) => [...prevRaffles, ...items]);
        setPage((_page) => _page + 1);
      })
      .catch((err) => {
        toastrError(err, toastr.error);
      });
  };

  const handleSelectRaffle = (raffle: Raffle) => {
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
      title: "Nova rifa",
      body: (
        <RenderRaffleDialog
          onRaffleCreate={(raffle) => {
            setPage(0);
            setRaffles([raffle, ...raffles]);
            dismissDialog();
          }}
        />
      ),
      showCross: true,
    });
  };

  return (
    <PageTemplate title="Rifas">
      <RafflesContainer>
        <RafflesList
          raffles={raffles.slice(
            page * itemsPerPage,
            itemsPerPage * (page + 1)
          )}
          page={page}
          pagesCount={pagesCount || 1}
          paginate={handlePaginate}
          onSelect={handleSelectRaffle}
          onCreateRaffle={handleRaffleCreation}
          selectedRaffle={selectedRaffle}
        />
        <RaffleView
          changeRaffleStatus={handleChangeRaffleStatus}
          raffle={raffles.find((raffle) => raffle._id === selectedRaffle)}
        />
      </RafflesContainer>
    </PageTemplate>
  );
};
