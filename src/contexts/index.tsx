// External
import React from 'react';
import { ToastrProvider } from 'mococa-toastr';
import { BrowserRouter } from 'react-router-dom';

// Providers
import { AuthProvider } from './Auth';
import { DarkModeProvider } from './DarkMode';
import { DialogProvider } from './Dialog';

export const AppProvider: React.FC = ({ children }) => (
  <ToastrProvider>
    <BrowserRouter>
      <AuthProvider>
        <DialogProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </DialogProvider>
      </AuthProvider>
    </BrowserRouter>
  </ToastrProvider>
);
