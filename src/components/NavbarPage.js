import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarPage.css";

const navLinkStyle = {
  color: "white",
};

function NavbarPage() {
  return (
    <Navbar
      style={{ backgroundColor: "rgb(57, 13, 97)", color: "white" }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={navLinkStyle}>
          Library Project
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" style={navLinkStyle}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={navLinkStyle}>
              FIND
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={navLinkStyle}>
              EXPLORE
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={navLinkStyle}>
              USER GUIDE/MANUALS
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={navLinkStyle}>
              VIRTUAL TOUR
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={navLinkStyle}>
              CONNECT WITH US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
