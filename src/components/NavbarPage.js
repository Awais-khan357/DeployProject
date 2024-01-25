import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarPage.css";

function NavbarPage() {
  return (
    <Navbar bg="light" text="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Library Project
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown title="Get Us Know" id="get-us-know-dropdown">
              <NavDropdown.Item as={Link} to="/introduction">
                Introduction
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/message">
                Message
              </NavDropdown.Item>
              <NavDropdown title="Get Us Know" id="get-us-know-dropdown">
                <NavDropdown.Item as={Link} to="/introduction">
                  Introduction
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/message">
                  Message
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
