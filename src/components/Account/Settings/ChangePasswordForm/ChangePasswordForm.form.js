import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    reTypepassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required(true),
    reTypepassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], true),
  });
}
