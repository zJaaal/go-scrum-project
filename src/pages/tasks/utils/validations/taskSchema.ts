import * as yup from "yup";

const required = "* This field is required";

export const taskSchema: yup.AnyObjectSchema = yup.object().shape({
  title: yup
    .string()
    .min(6, "Title must have at least 6 chars")
    .required(required),
  description: yup.string().required(required),
  status: yup.string().required(required),
  importance: yup.string().required(required),
});
