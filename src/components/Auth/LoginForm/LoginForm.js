import { Form } from "semantic-ui-react";

export function LoginForm() {
  return (
    <Form>
      {/* STRAPI quiere que le envies identifier en vez de email en la prop name */}
      <Form.Input name="identifier" type="text" placeholder="email" />
      <Form.Input name="password" type="password" placeholder="password" />
      <Form.Button type="submit" fluid>
        Sign in
      </Form.Button>
    </Form>
  );
}
