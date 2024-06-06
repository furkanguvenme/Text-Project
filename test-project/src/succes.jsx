import { useLocation } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function Success() {
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
