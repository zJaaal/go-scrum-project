import React, { FC, useState } from "react";
import { Task } from "../types";
import { limitDescription } from "../utils/string/limitDescription";
import { DescriptionState } from "../types/index";
const Card: FC<Task> = ({
  title,
  createdAt,
  creator,
  description,
  status,
  importance,
}) => {
  const [descriptionState, setDescriptionState] = useState<DescriptionState>(
    limitDescription(description)
  );
  const [showMore, setShowMore] = useState(descriptionState.showMore);
  return (
    <div className="card">
      <div className="close">x</div>
      <h3>{title}</h3>
      <h6>{new Date(createdAt).toLocaleString()}</h6>
      <h5>{creator}</h5>
      <button className={status.toLowerCase()} type="button">
        {status}
      </button>
      <button className={importance.toLowerCase()} type="button">
        {importance}
      </button>
      {!showMore && <p>{descriptionState.string}</p>}
      {showMore && (
        <>
          <p>{description}</p>
          <button type="button" onClick={() => setShowMore(false)}>
            Ver menos
          </button>
        </>
      )}
      {!showMore && descriptionState.showMore && (
        <button type="button" onClick={() => setShowMore(true)}>
          Ver más
        </button>
      )}
    </div>
  );
};

export default Card;
