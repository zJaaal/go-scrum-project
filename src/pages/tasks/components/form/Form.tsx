import { useFormik } from "formik";
import { Task, TaskPriority, TaskType } from "../../types";
import "./Form.styles.css";

const initialValues: Task = {
  id: Date.now(),
  title: "",
  datatime: Date.now().toString(),
  creator: "Jalinson",
  description: "",
  type: TaskType.New,
  priority: TaskPriority.Low,
};

const Form = () => {
  const onSubmit = (values: Task) => {
    alert(JSON.stringify(values));
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <section className="task-form">
      <h2>Create Task</h2>
      <p>Here you can create a task</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
              placeholder="Title"
            />
          </div>
          <div>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              value={values.type}
            >
              <option value={""} disabled>
                Status
              </option>
              {Object.values(TaskType).map((type, i) => (
                <option value={type} key={i}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="priority"
              id="priority"
              onChange={handleChange}
              value={values.priority}
            >
              <option value={""} disabled>
                Priority Level
              </option>
              {Object.values(TaskPriority).map((priority, i) => (
                <option value={priority} key={i}>
                  {priority}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            value={values.description}
          ></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default Form;
