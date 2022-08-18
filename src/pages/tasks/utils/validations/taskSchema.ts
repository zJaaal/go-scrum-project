import * as yup from "yup";

const required = "* This field is required";

export const taskSchema: yup.AnyObjectSchema = yup.object().shape({
  title: yup
    .string()
    .min(6, "Title must have at least 6 chars")
    .required(required),
  type: yup.string().required(required),
  priority: yup.string().required(required),
});
