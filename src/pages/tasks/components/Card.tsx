import React, { FC } from "react";
import { Task } from "../types";

const Card: FC<Task> = ({
  title,
  createdAt,
  creator,
  description,
  status,
  importance,
}) => {
  return (
    <div className="card">
      <div className="close">x</div>
      <h3>{title}</h3>
      <h6>{new Date(createdAt).toLocaleString()}</h6>
      <h5>{creator}</h5>
      <button type="button">{status}</button>
      <button type="button">{importance}</button>
      <p>{description}</p>
    </div>
  );
};

export default Card;
