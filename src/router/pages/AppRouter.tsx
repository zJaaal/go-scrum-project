import { motion } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthRoutes from "../components/AuthRoutes";
import DashboardRoutes from "../components/DashboardRoutes";
import PrivateRoutes from "../components/PrivateRoutes";
import PublicRoutes from "../components/PublicRoutes";
import { pageTransition } from "../utils";

const AppRouter = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <DashboardRoutes />
            </motion.div>
          </PrivateRoutes>
        }
      />
      <Route
        path="/auth/*"
        element={
          <PublicRoutes>
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <AuthRoutes />
            </motion.div>
          </PublicRoutes>
        }
      />
    </Routes>
  );
};

export default AppRouter;
