import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../hooks/useAuthCheck";
import { Route } from "../types";

const PublicRoutes = ({ children }: { children: ReactElement }) => {
  const checking = useAuthCheck(Route.Public);

  return checking ? <h3>loading</h3> : children;
};

export default PublicRoutes;
