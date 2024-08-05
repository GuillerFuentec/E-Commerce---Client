import { Form } from "semantic-ui-react";
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangePasswordForm.form";
import styles from "./ChangePasswordForm.module.scss";

const userCtrl = new User();

export function ChangePasswordForm() {
  const { user, logout } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await userCtrl.updateMe(user.id, { password: formValues.password });
        logout();
      } catch (error) {
        throw error;
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="password">Update Password</label>
      <Form.Input
        type="password"
        name="password"
        placeholder="Type new Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input
        type="password"
        name="reTypepassword"
        placeholder="Re-Type new Password"
        value={formik.values.reTypepassword}
        onChange={formik.handleChange}
        error={formik.errors.reTypepassword}
      />
      <Form.Button type="submit" loading={formik.isSubmitting}>
        Submit
      </Form.Button>
    </Form>
  );
}
