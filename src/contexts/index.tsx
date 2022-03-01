/* ---------- External ---------- */
import { DialogProvider } from "mococa-dialog";
import { ToastrProvider } from "mococa-toastr";
import React from "react";
import { BrowserRouter } from "react-router-dom";
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
