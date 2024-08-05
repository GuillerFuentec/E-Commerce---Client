import { Form } from "semantic-ui-react";
import { Formik, useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeEmailForm.form";
import { User } from "@/api";
import { useAuth } from "@/hooks";
import styles from "./ChangeEmailForm.module.scss";

const userCtrl = new User();

export function ChangeEmailForm() {
  const { user, updateUser } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await userCtrl.updateMe(user.id, { email: formValues.email });
        updateUser("email", formValues.email);
        formik.handleReset();
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>Update email</label>
      <Form.Input
        name="email"
        placeholder="type your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="retypeEmail"
        placeholder="re-type your email"
        value={formik.values.retypeEmail}
        onChange={formik.handleChange}
        error={formik.errors.retypeEmail}
      />
      <Form.Button type="submit" loading={formik.isSubmitting}>
        Submit
      </Form.Button>
    </Form>
  );
}
