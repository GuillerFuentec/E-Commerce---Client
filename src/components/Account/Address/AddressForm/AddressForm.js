import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddressForm.form";
import { Address } from "@/api";
import { useAuth } from "@/hooks";

const addressCtrl = new Address();

export function AddressForm(props) {
  const { user } = useAuth();
  const { onClose } = props;
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        await addressCtrl.createAddress(formValues, user.id);
        formik.handleReset()
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        placeholder="Addres's tile"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
      <Form.Input
        name="name"
        placeholder="Your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Form.Group widths="equal">
        <Form.Input
          name="address_line_1"
          placeholder="Address"
          value={formik.values.address_line_1}
          onChange={formik.handleChange}
          error={formik.errors.address_line_1}
        />
        <Form.Input
          name="address_line_2"
          placeholder="apt/suite/#"
          value={formik.values.address_line_2}
          onChange={formik.handleChange}
          error={formik.errors.address_line_2}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="state"
          placeholder="State"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.errors.state}
        />
        <Form.Input
          name="city"
          placeholder="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="zip_code"
          placeholder="Zip_code"
          value={formik.values.zip_code}
          onChange={formik.handleChange}
          error={formik.errors.zip_code}
        />
        <Form.Input
          name="phone"
          placeholder="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
      </Form.Group>
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Submit
      </Form.Button>
    </Form>
  );
}
