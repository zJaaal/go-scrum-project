import { useFormik } from "formik";
import React from "react";
import { Continents, Region, Roles, UserRegister } from "../types";

const initialValues: UserRegister = {
  username: "",
  password: "",
  email: "",
  teamID: "9cdbd108-f924-4383-947d-8f0c651d0dad",
  role: Roles.TeamMember,
  continent: Continents.America,
  region: Region.Latam,
};

const RegisterForm = () => {
  const validate = (values: UserRegister) => {
    const errors: any = {};
    if (!values.username) errors.username = "Username is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";

    return errors;
  };
  const onSubmit = (values: UserRegister) => {
    alert(JSON.stringify(values));
  };

  const { values, handleChange, handleSubmit, errors } =
    useFormik<UserRegister>({
      initialValues,
      onSubmit,
      validate,
    });
  return (
    <form onSubmit={handleSubmit} className="container-form">
      <h1>Register</h1>
      <div className="form-control-container">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type={"text"}
          name="username"
          value={values.username}
          onChange={handleChange}
          className="form-control"
        />
        {errors.username && <div>{errors.username}</div>}
      </div>
      <div className="form-control-container">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className="form-control"
        />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <div className="form-control-container">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type={"email"}
          name="email"
          value={values.email}
          onChange={handleChange}
          className="form-control"
        />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div className="form-control-container">
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={values.role}
          onChange={handleChange}
          className="form-control"
        >
          <option value={Roles.TeamLeader}>{Roles.TeamLeader}</option>
          <option value={Roles.TeamMember}>{Roles.TeamMember}</option>
        </select>
      </div>
      <div className="form-control-container">
        <label htmlFor="continent">Continent</label>
        <select
          id="continent"
          name="continent"
          value={values.continent}
          onChange={handleChange}
          className="form-control"
        >
          <option value={Continents.America}>{Continents.America}</option>
          <option value={Continents.Europe}>{Continents.Europe}</option>
          <option value={Continents.Other}>{Continents.Other}</option>
        </select>
      </div>
      <div className="form-control-container">
        <label htmlFor="region">Region</label>
        <select
          id="region"
          name="region"
          value={values.region}
          onChange={handleChange}
          className="form-control"
        >
          {Object.keys(Region).map((region, i) => (
            <option value={region} key={i}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control-container">
        <button type="submit" className="form-control">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
