import Card from "../components/Card";
import Form from "../components/form/Form";
import useResize from "../hooks/useResize";
import { cardsData } from "../misc/data";
import { Task, TaskStatus } from "../types";
import { useState, useEffect } from "react";
import "../Tasks.styles.css";
const TasksPage = () => {
  const { isPhone } = useResize();
  const [list, setList] = useState<Task[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_MAIN_URL}task/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setList(data.result));
  }, []);
  return (
    <main id="tasks">
      <Form />
      <section className="wrapper_list">
        <div className="list_header">
          <h2>My Tasks</h2>
        </div>

        {isPhone ? (
          <div className="list phone">
            {!list.length ? (
              <div>There's no tasks</div>
            ) : (
              list.map((card) => (
                <Card
                  key={card._id}
                  {...card}
                  creator={card.user.userName}
                  createdAt={card.createdAt}
                />
              ))
            )}
          </div>
        ) : (
          <div className="list_group">
            {!list.length ? (
              <div>There's no tasks</div>
            ) : (
              <>
                <div className="list">
                  <h4>Done</h4>
                  {list
                    .filter((data) => data.status === TaskStatus.Finished)
                    .map((card) => (
                      <Card key={card._id} {...card} />
                    ))}
                </div>
                <div className="list">
                  <h4>Doing</h4>
                  {list
                    .filter((data) => data.status === TaskStatus.InProcess)
                    .map((card) => (
                      <Card key={card._id} {...card} />
                    ))}
                </div>
                <div className="list">
                  <h4>To Do</h4>
                  {list
                    .filter((data) => data.status === TaskStatus.New)
                    .map((card) => (
                      <Card key={card._id} {...card} />
                    ))}
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default TasksPage;
