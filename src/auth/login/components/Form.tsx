import { useFormik } from "formik";
import { UserLogin } from "../types";

import "../../auth.styles.css";

const initialValues: UserLogin = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const validate = (values: UserLogin) => {
    const errors: any = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";

    return errors;
  };
  const onSubmit = () => {
    localStorage.setItem("logged", "yes");
  };

  const { values, handleChange, handleSubmit, errors } = useFormik<UserLogin>({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={handleSubmit} className="container-form">
      <h1>Log In</h1>
      <div className="form-control-container">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type={"email"}
          value={values.email}
          onChange={handleChange}
          className="form-control"
        />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div className="form-control-container">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          className="form-control"
        />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <div className="form-control-container">
        <button type="submit" className="form-control">
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
