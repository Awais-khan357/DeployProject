import { Link } from "react-router-dom";
import "./Nav.css";
import { Container } from "react-bootstrap";

export default function NavPrac() {
  return (
    <Container fluid className="navbar-section">
      <nav className="navbar">
        <ul>
          <li>
            <Link className="nav-link scrollto active" to="/about">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/">
              <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
            </Link>
            <ul>
              <li>
                <Link to="/">Drop Down 1</Link>
              </li>
              <li className="dropdown">
                <Link to="/">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/">Deep Drop Down 1</Link>
                  </li>
                  <li>
                    <Link to="/">Deep Drop Down 2</Link>
                  </li>
                  <li>
                    <Link to="/">Deep Drop Down 3</Link>
                  </li>
                  <li>
                    <Link to="/">Deep Drop Down 4</Link>
                  </li>
                  <li>
                    <Link to="/">Deep Drop Down 5</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">Drop Down 2</Link>
              </li>
              <li>
                <Link to="/">Drop Down 3</Link>
              </li>
              <li>
                <Link to="/">Drop Down 4</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="nav-link scrollto" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
