import React, { ReactElement } from "react";
import Loading from "../../components/Loading";
import useAuthCheck from "../hooks/useAuthCheck";
import { Route } from "../types";

const PrivateRoutes = ({ children }: { children: ReactElement }) => {
  const checking = useAuthCheck(Route.Private);

  return checking ? <Loading /> : children;
};

export default PrivateRoutes;
