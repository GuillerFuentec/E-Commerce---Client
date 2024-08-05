import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    retypeEmail: ",",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    retypeEmail: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("email")]),
  });
}
