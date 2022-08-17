import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/auth/login/pages/Login";
import RegisterPage from "../../pages/auth/register/pages/Register";
import NotFound from "../../pages/not-found/pages/NotFound";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AuthRoutes;
