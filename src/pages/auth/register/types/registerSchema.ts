import * as Yup from "yup";

const registerSchema: Yup.AnyObjectSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username should have at least 4 characters")
    .required("Field is required"),
  password: Yup.string()
    .min(8, "Password should have at least 8 characters")
    .required("Field is required"),
  email: Yup.string()
    .email("Email should be valid")
    .required("Field is required"),
  teamID: Yup.string().required("Field is required"),
  role: Yup.string().required("Field is required"),
  continent: Yup.string().required("Field is required"),
  region: Yup.string().required("Field is required"),
});

export default registerSchema;
