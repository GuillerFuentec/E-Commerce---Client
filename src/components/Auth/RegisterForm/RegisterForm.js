import { Form } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { Auth } from "@/api";
import { validationSchema, initialValues } from "./RegisterForm.form";

const authCtrl = new Auth();

export function RegisterForm() {
  const rout = useRouter();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log("Form values being submitted:", formValue);
        await authCtrl.register(formValue);
        rout.push("/join/sign-in");
      } catch (error) {
        console.log("Error during form submission:", error);
      }
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
          placeholder="full name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          name="password"
          placeholder="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </Form.Group>
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Register
      </Form.Button>
    </Form>
  );
}
