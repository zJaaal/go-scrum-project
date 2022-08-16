import { useFormik } from "formik";
import { UserLogin, UserLoginErrors } from "../types";

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
    <form onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type={"email"}
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};

export default LoginForm;
