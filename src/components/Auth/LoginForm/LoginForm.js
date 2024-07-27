import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.Form";
import { Auth } from "@/api";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";

const authCtrl = new Auth();


export function LoginForm() {
  const {login} = useAuth(); 
  const rout = useRouter();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(formValue);
        login(response.jwt);
        // rout.push('/')
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* STRAPI quiere que le envies identifier en vez de email en la prop name */}
      <Form.Input
        name="identifier"
        type="text"
        placeholder="email"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Button type="submit" fluid>
        Sign in
      </Form.Button>
    </Form>
  );
}
