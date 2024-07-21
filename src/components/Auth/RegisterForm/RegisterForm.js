import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "./RegisterForm.form";

export function RegisterForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: () => {
      console.log("succes");
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths={"equal"}>
        <Form.Input
          name="email"
          placeholder="example@gmailcom"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          name="username"
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
      </Form.Group>
      <Form.Group widths={"equal"}>
        <Form.Input
          name="name"
          placeholder="first and last name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          name="password"
          placeholder="password"
          type="password"
          value={formik.values.passwaord}
          onChange={formik.handleChange}
          error={formik.errors.passwaord}
        />
      </Form.Group>
      <Form.Button type="submit" fluid loading={formik.isSubmitting} >
        Register
      </Form.Button>
    </Form>
  );
}
