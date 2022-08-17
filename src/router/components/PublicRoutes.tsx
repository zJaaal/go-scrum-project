import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import useAuthCheck from "../hooks/useAuthCheck";
import { Route } from "../types";

const PublicRoutes = ({ children }: { children: ReactElement }) => {
  const checking = useAuthCheck(Route.Public);

  return checking ? <Loading /> : children;
};

export default PublicRoutes;
