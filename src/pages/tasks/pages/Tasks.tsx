import Card from "../components/Card";
import Form from "../components/form/Form";
import useResize from "../hooks/useResize";
import Skeleton from "react-loading-skeleton";
import { Task, TaskStatus } from "../types";
import { useState, useEffect } from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import "../Tasks.styles.css";
import "react-loading-skeleton/dist/skeleton.css";
const TasksPage = () => {
  const { isPhone } = useResize();

  const [tasksfromWho, setTasksfromWho] = useState("ALL");
  const [list, setList] = useState<Task[]>([]);
  const [renderList, setRenderList] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${import.meta.env.VITE_MAIN_URL}task/${
        tasksfromWho === "ALL" ? "" : "me"
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setList(data.result);
        setRenderList(data.result);
      });
  }, [tasksfromWho]);

  const handleChangeImportance = (event: any) => {
    if (event.target.value === "ALL") return setRenderList(list);
    setRenderList(
      list.filter((data) => data.importance.includes(event.currentTarget.value))
    );
  };
  return (
    <main id="tasks">
      <Form />
      <section className="wrapper_list">
        <div className="list_header">
          <h2>My Tasks</h2>
        </div>

        <div className="filters">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              onChange={(event) => setTasksfromWho(event.currentTarget.value)}
            >
              <FormControlLabel value="ALL" control={<Radio />} label="All" />
              <FormControlLabel
                value="ME"
                control={<Radio />}
                label="My Tasks"
              />
            </RadioGroup>
          </FormControl>
          {/* <div className="search">
            <input
              type="text"
              placeholder="Search by title..."
              onChange={handleSearch}
            />
          </div> */}
          <select name="importance" onChange={handleChangeImportance}>
            <option value="">Select a priority</option>
            <option value="ALL">All</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>

        {isPhone ? (
          <div className="list phone">
            {loading ? (
              <Skeleton />
            ) : !renderList.length ? (
              <div>There's no tasks</div>
            ) : (
              renderList.map((card) => (
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
            {loading ? (
              <Skeleton />
            ) : !renderList.length ? (
              <div>There's no tasks</div>
            ) : (
              <>
                <div className="list">
                  <h4>Done</h4>
                  {renderList
                    .filter((data) => data.status === TaskStatus.Finished)
                    .map((card) => (
                      <Card key={card._id} {...card} />
                    ))}
                </div>
                <div className="list">
                  <h4>Doing</h4>
                  {renderList
                    .filter((data) => data.status === TaskStatus.InProcess)
                    .map((card) => (
                      <Card key={card._id} {...card} />
                    ))}
                </div>
                <div className="list">
                  <h4>To Do</h4>
                  {renderList
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
