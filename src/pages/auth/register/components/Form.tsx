import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Continents, Region, Roles, UserRegister } from "../types";
import registerSchema from "../types/registerSchema";
//9cdbd108-f924-4383-947d-8f0c651d0dad
const initialValues: UserRegister = {
  userName: "",
  password: "",
  email: "",
  teamID: "",
  role: Roles.TeamMember,
  continent: Continents.America,
  region: Region.Latam,
  check: false,
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const onSubmit = (values: UserRegister) => {
    if (values.continent != Continents.America) values.region = Region.Other;
    if (!values.check) values.teamID = "";

    const teamID = !values.teamID ? uuidv4() : values.teamID;
    fetch("https://goscrum-api.alkemy.org/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          userName: values.userName,
          password: values.password,
          email: values.email,
          teamID: teamID,
          role: values.role,
          continent: values.continent,
          region: values.region,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => navigate("/auth/registered/" + teamID));
  };

  const { values, handleChange, handleSubmit, errors, setFieldValue } =
    useFormik<UserRegister>({
      initialValues,
      onSubmit,
      validationSchema: registerSchema,
    });
  return (
    <form onSubmit={handleSubmit} className="container-form">
      <h1>Register</h1>
      <div className="form-control-container">
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type={"text"}
          name="userName"
          value={values.userName}
          onChange={handleChange}
          className="form-control"
        />
        {errors.userName && <div>{errors.userName}</div>}
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
        <label htmlFor="have-team">Already have a team?</label>
        <input
          id="have-team"
          type={"checkbox"}
          name="have-team"
          checked={values.check}
          onChange={() => setFieldValue("check", !values.check)}
          className="form-control"
        />
      </div>
      {values.check && (
        <div className="form-control-container">
          <label htmlFor="teamID">Team ID</label>
          <input
            id="teamID"
            type={"string"}
            name="teamID"
            value={values.teamID}
            onChange={handleChange}
            className="form-control"
          />
          {errors.teamID && <div>{errors.teamID}</div>}
        </div>
      )}

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
      {values.continent == Continents.America && (
        <div className="form-control-container">
          <label htmlFor="region">Region</label>
          <select
            id="region"
            name="region"
            value={values.region}
            onChange={handleChange}
            className="form-control"
          >
            {Object.values(Region).map((region, i) => (
              <option value={region} key={i}>
                {region}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="form-control-container">
        <button type="submit" className="form-control">
          Register
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
        onClick={() => navigate("/auth")}
      >
        Already have an account?
      </div>
    </form>
  );
};

export default RegisterForm;
