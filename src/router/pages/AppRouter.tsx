import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../components/AuthRoutes";
import DashboardRoutes from "../components/DashboardRoutes";
import PrivateRoutes from "../components/PrivateRoutes";
import PublicRoutes from "../components/PublicRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <DashboardRoutes />
          </PrivateRoutes>
        }
      />
      <Route
        path="/auth/*"
        element={
          <PublicRoutes>
            <AuthRoutes />
          </PublicRoutes>
        }
      />
    </Routes>
  );
};

export default AppRouter;
