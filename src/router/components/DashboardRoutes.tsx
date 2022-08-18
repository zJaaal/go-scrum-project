import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../../components/Loading";
import TasksPage from "../../pages/tasks/pages/Tasks";
import Header from "./header/Header";

//This only imports the NotFound component when its called and it must be rendered inside a Suspense component

const NotFound = lazy(() => import("../../pages/not-found/pages/NotFound"));

const DashboardRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route
          path="/*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
