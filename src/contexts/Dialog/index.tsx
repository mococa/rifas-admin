/* ---------- External ---------- */
import { Dialog } from "components/Dialog";
import React, { createContext, useContext, useMemo, useState } from "react";
import { DialogProps } from "_types/Dialog";

/* ---------- Interfaces ---------- */
interface Props {
  createDialog: React.Dispatch<React.SetStateAction<DialogProps | null>>;
  dismissDialog: () => void;
}

export const DialogContext = createContext({} as Props);

export const DialogProvider: React.FC = ({ children }) => {
  /* ---------- States ---------- */
  const [dialog, setDialog] = useState<DialogProps | null>(null);

  /* ---------- Memos ---------- */
  const value = useMemo(
    () => ({
      createDialog: setDialog,
      dismissDialog: () => {
        setDialog(null);
      },
    }),
    []
  );

  return (
    <DialogContext.Provider value={value}>
      {dialog && (
        <Dialog
          title={dialog.title}
          body={dialog.body}
          buttons={dialog.buttons}
          showCross={dialog.showCross}
          onClose={value.dismissDialog}
        />
      )}
      {children}
    </DialogContext.Provider>
  );
};

/* ---------- Hooks ---------- */
export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("");
  }

  return context;
};
