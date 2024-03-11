import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UpperLinks() {
  return (
    <Nav>
      <Nav.Link as={Link} to="/">
        Email
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        Downloads
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        Tenders
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        Jobs
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        Contact Us
      </Nav.Link>
    </Nav>
  );
}
