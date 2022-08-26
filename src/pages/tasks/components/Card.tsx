import React, { FC } from "react";
import { Task } from "../types";

const Card: FC<Task> = ({
  title,
  datatime,
  creator,
  description,
  status,
  importance,
}) => {
  return (
    <div className="card">
      <div className="close">x</div>
      <h3>{title}</h3>
      <h6>{datatime}</h6>
      <h5>{creator}</h5>
      <button type="button">{status}</button>
      <button type="button">{importance}</button>
      <p>{description}</p>
    </div>
  );
};

export default Card;
