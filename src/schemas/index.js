import * as yup from "yup";

const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6)
    .matches(regex, { message: "Please create a strong password" })
    .required(),
});
