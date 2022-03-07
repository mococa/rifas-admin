import { AuthPage } from 'pages/auth';
import { MainPage } from 'pages/main';
import { RafflesPage } from 'pages/raffles';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/raffles" element={<RafflesPage />} />
    </Routes>
  );
};
