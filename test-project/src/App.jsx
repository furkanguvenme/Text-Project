import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const history = useHistory();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password validation criteria: minimum 8 characters, at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailValid(emailValue === "" || validateEmail(emailValue));
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPasswordValid(passwordValue === "" || validatePassword(passwordValue));
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      emailValid &&
      passwordValid &&
      termsAccepted &&
      email !== "" &&
      password !== ""
    ) {
      history.push("/success", { email, password });
    }
  };

  const isFormValid =
    emailValid &&
    passwordValid &&
    termsAccepted &&
    email !== "" &&
    password !== "";

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          invalid={!emailValid}
        />
        {!emailValid && email !== "" && (
          <FormFeedback>Email geçerli değil</FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          invalid={!passwordValid}
        />
        {!passwordValid && password !== "" && (
          <FormFeedback>
            Şifre en az 8 karakter olmalı ve en az bir harf ve bir sayı
            içermelidir
          </FormFeedback>
        )}
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          checked={termsAccepted}
          onChange={handleTermsChange}
        />{" "}
        <Label check>Şartları kabul ediyorum!</Label>
      </FormGroup>
      <Button type="submit" disabled={!isFormValid}>
        Login
      </Button>
    </Form>
  );
}

function Success() {
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Giriş Başarılı</CardTitle>
        <CardText>Email: {email}</CardText>
        <CardText>Password: {password}</CardText>
      </CardBody>
    </Card>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/success" component={Success} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}
