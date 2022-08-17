import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../../components/Loading";
import LoginPage from "../../pages/auth/login/pages/Login";
import RegisterPage from "../../pages/auth/register/pages/Register";

//This only imports the NotFound component when its called and it must be rendered inside a Suspense component

const NotFound = lazy(() => import("../../pages/not-found/pages/NotFound"));

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AuthRoutes;
