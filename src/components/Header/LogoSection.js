import { Col, Container, Row } from "react-bootstrap";
import nlogo from "../images/nlogo.png";
import UpperLinks from "../UpperLinks";
import NavBar from "./NavBar";
import { DropdownProvider } from "../Context/NavbarContext";
import { Link } from "react-router-dom";
export default function LogoSection() {
  return (
    <div>
      <Container fluid>
        <Row className="text-center">
          <Col md={6}>
            <Link to="/">
              {" "}
              <img src={nlogo} alt="logo" />
            </Link>
          </Col>
          <Col md={6} className="d-block text-dark mt-4">
            <UpperLinks />
          </Col>
        </Row>
        <Row>
          <DropdownProvider>
            <NavBar />
          </DropdownProvider>
        </Row>
      </Container>
    </div>
  );
}
