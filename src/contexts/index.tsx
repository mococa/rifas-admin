// External
import React from "react";
import { DialogProvider } from "mococa-dialog";
import { ToastrProvider } from "mococa-toastr";
import { BrowserRouter } from "react-router-dom";

// Providers
import { AuthProvider } from "./Auth";

export const AppProvider: React.FC = ({ children }) => (
  <ToastrProvider>
    <DialogProvider>
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    </DialogProvider>
  </ToastrProvider>
);
