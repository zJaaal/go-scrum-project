import React from "react";
import { useParams } from "react-router-dom";

const Registered = () => {
  const { teamID } = useParams();
  return <div>{teamID}</div>;
};

export default Registered;
