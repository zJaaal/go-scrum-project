import { useFormik } from "formik";
import { UserLogin } from "../types";

import "../../auth.styles.css";
import { useNavigate } from "react-router-dom";
import loginSchema from "../types/loginSchema";
import Swal from "sweetalert2";

const initialValues: UserLogin = {
  userName: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    fetch(`${import.meta.env.VITE_MAIN_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: values.userName,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status_code === 200) {
          localStorage.setItem("token", res.result.token);
          navigate("/", {
            replace: true,
          });
        } else
          Swal.fire({
            title: "Invalid Credentials",
            text: "Please enter a valid username and password",
            confirmButtonText: "OK",
            width: "400px",
            timer: 10000,
            timerProgressBar: true,
          });
      });
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik<UserLogin>({
      initialValues,
      onSubmit,
      validationSchema: loginSchema,
    });

  return (
    <form onSubmit={handleSubmit} className="container-form">
      <h1>Log In</h1>
      <div className="form-control-container">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type={"text"}
          name="userName"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
        />
        {errors.userName && touched.userName && <div>{errors.userName}</div>}
      </div>
      <div className="form-control-container">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
        />
        {errors.password && touched.password && <div>{errors.password}</div>}
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
