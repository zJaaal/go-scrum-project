import { useFormik } from "formik";
import { Task, TaskPriority, TaskType } from "../../types";
import { taskSchema } from "../../utils/validations/taskSchema";
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

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: taskSchema,
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
              onBlur={handleBlur}
              value={values.title}
              placeholder="Title"
              className={errors.title ? "error" : ""}
            />
            {errors.title && touched.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>
          <div>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.type}
              className={errors.type ? "error" : ""} //Im not really validating this, but ill let that for example
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
            {errors.type && touched.type && (
              <span className="error-message">{errors.type}</span>
            )}
          </div>
          <div>
            <select
              name="priority"
              id="priority"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.priority}
              className={errors.priority ? "error" : ""} //Im not really validating this, but ill let that for example
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
            {errors.priority && touched.priority && (
              <span className="error-message">{errors.priority}</span>
            )}
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
