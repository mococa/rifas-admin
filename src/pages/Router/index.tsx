import { AuthPage } from 'pages/auth';
import { MainPage } from 'pages/main';
import { RafflePage } from 'pages/raffle';
import { RafflesPage } from 'pages/raffles';
import { SettingsPage } from 'pages/settings';
import { TicketsPage } from 'pages/tickets';
import { UsersPage } from 'pages/users';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/raffles" element={<RafflesPage />} />
      <Route path="/raffles/:id" element={<RafflePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/tickets" element={<TicketsPage />} />
    </Routes>
  );
};
