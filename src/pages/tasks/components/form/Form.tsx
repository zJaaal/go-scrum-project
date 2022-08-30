import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { Task, TaskImportance, TaskStatus } from "../../types";
import { taskSchema } from "../../utils/validations/taskSchema";
import "./Form.styles.css";
import "react-toastify/dist/ReactToastify.css";

const initialValues: Task = {
  _id: Date.now(),
  createdAt: Date.now().toString(),
  creator: "",
  title: "",
  description: "",
  status: TaskStatus.New,
  importance: TaskImportance.Low,
};

const Form = () => {
  const onSubmit = (values: Task) => {
    fetch(`${import.meta.env.VITE_MAIN_URL}task/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        task: {
          title: values.title,
          description: values.description,
          status: values.status,
          importance: values.importance,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        resetForm();
        toast("Task Created");
      });
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
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
              name="status"
              id="status"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.status}
              className={errors.status ? "error" : ""} //Im not really validating this, but ill let that for example
            >
              <option value={""} disabled>
                Status
              </option>
              {Object.values(TaskStatus).map((status, i) => (
                <option value={status} key={i}>
                  {status}
                </option>
              ))}
            </select>
            {errors.status && touched.status && (
              <span className="error-message">{errors.status}</span>
            )}
          </div>
          <div>
            <select
              name="importance"
              id="importance"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.importance}
              className={errors.importance ? "error" : ""} //Im not really validating this, but ill let that for example
            >
              <option value={""} disabled>
                Priority Level
              </option>
              {Object.values(TaskImportance).map((priority, i) => (
                <option value={priority} key={i}>
                  {priority}
                </option>
              ))}
            </select>
            {errors.importance && touched.importance && (
              <span className="error-message">{errors.importance}</span>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.description}
            className={errors.description ? "error" : ""}
          ></textarea>
          {errors.description && touched.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <button type="submit">Create</button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Form;
