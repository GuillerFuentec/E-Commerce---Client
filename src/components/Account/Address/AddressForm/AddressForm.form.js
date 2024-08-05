import * as Yup from "yup";

export function initialValues() {
  return {
    title: "",
    name: "",
    address_line_1: "",
    address_line_2: "",
    state: "",
    zip_code: "",
    phone: "",
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    address_line_1: Yup.string().required(true),
    address_line_2: Yup.string().required(false),
    state: Yup.string().required(true),
    zip_code: Yup.string().required(true),
    phone: Yup.number().required(true),
  });
}
