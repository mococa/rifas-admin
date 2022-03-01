import { AuthPage } from "pages/auth";
import { MainPage } from "pages/main";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

interface Props {}

export const Router: React.FC<Props> = ({ children }) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
