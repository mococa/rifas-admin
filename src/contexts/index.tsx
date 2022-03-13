// External
import React from 'react';
import { ToastrProvider } from 'mococa-toastr';
import { BrowserRouter } from 'react-router-dom';

// Providers
import { AuthProvider } from './Auth';
import { DarkModeProvider } from './DarkMode';
import { DialogProvider } from './Dialog';
import { RouteProvider } from './Route';

export const AppProvider: React.FC = ({ children }) => (
  <ToastrProvider>
    <BrowserRouter>
      <RouteProvider>
        <AuthProvider>
          <DialogProvider>
            <DarkModeProvider>{children}</DarkModeProvider>
          </DialogProvider>
        </AuthProvider>
      </RouteProvider>
    </BrowserRouter>
  </ToastrProvider>
);
