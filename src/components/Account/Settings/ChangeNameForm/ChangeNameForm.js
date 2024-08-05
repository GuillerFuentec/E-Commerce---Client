import { Form } from "semantic-ui-react";
import { useAuth } from "@/hooks";
import { useFormik } from "formik";
import { User } from "@/api";
import { initialValues, validationSchema } from "./ChangeNameForm.form";
import styles from "./ChangeNameForm.module.scss";

const userCtrl = new User();

export function ChangeNameForm() {
  const { user } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(user.name),
    validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await userCtrl.updateMe(user.id, { name: formValues.name });
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Update Full Name</label>

      <div className={styles.content}>
        <Form.Input
          name="name"
          placeholder="Full Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Submit
        </Form.Button>
      </div>
    </Form>
  );
}
