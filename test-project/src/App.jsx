import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function App() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
        />
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" /> <Label check>Check me out</Label>
      </FormGroup>
    </Form>
  );
}
