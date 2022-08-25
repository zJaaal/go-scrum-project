import { useFormik } from "formik";
import { UserLogin } from "../types";

import "../../auth.styles.css";
import { useNavigate } from "react-router-dom";
import loginSchema from "../types/loginSchema";

// fetch("https://goscrum-api.alkemy.org/auth/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     userName: values.userName,
//     password: values.password,
//   }),
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res));

const initialValues: UserLogin = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/", {
      replace: true,
    });
    localStorage.setItem("logged", "yes");
  };

  const { values, handleChange, handleSubmit, errors } = useFormik<UserLogin>({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
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
      <div
        style={{
          color: "#ff452b",
          display: "flex",
          justifyContent: "center",
          marginTop: "5px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/auth/register")}
      >
        Don't have an account?
      </div>
    </form>
  );
};

export default LoginForm;
