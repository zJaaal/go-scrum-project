import * as Yup from "yup";

const loginSchema: Yup.AnyObjectSchema = Yup.object().shape({
  userName: Yup.string().required("Field is required"),
  password: Yup.string()
    .min(8, "Password should have at least 8 characters")
    .required("Field is required"),
});

export default loginSchema;
