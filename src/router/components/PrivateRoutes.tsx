import React, { ReactElement } from "react";
import useAuthCheck from "../hooks/useAuthCheck";
import { Route } from "../types";

const PrivateRoutes = ({ children }: { children: ReactElement }) => {
  const checking = useAuthCheck(Route.Private);

  return checking ? <h1>Loading</h1> : children;
};

export default PrivateRoutes;
