import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/not-found/pages/NotFound";
import TasksPage from "../../pages/tasks/pages/Tasks";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default DashboardRoutes;
