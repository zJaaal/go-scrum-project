import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "../types";

/**
 * @description This function takes a Route type (Public or Private). If the user has the proper state for the current route
 * (Authenticated for Private or Not for Public) it will set loading to false,
 * otherwise the page will navigate for the proper route
 * @param {Route} routeType
 * @returns the checking state
 */
const useAuthCheck = (routeType: Route): boolean => {
  const [checking, setChecking] = useState(true);

  const navigate = useNavigate();

  //Since I'm using the localStorage, there's no way to check in running time
  //if the state changes so the useEffect doesn't have much effect right now.

  //The idea is that if the user logouts or his credentials are expired,
  //this will trigger because the state changed (Redux or Context)

  useEffect(() => {
    switch (routeType) {
      case Route.Public: {
        if (!localStorage.getItem("logged")) setChecking(false);
        else
          navigate("/", {
            replace: true,
          });
        break;
      }
      case Route.Private: {
        if (localStorage.getItem("logged")) setChecking(false);
        else
          navigate("/auth/", {
            replace: true,
          });
        break;
      }
      default:
        return;
    }
  }, []);

  return checking;
};

export default useAuthCheck;
