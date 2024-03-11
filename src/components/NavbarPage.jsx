import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./NavbarPage.css";

function NavbarPage() {
  return (
    <Container fluid className="contain d-flex text-white">
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <nav id="navbar" className="navbar-nav">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/hero">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/about">
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
        </div>
      </header>
    </Container>
  );
}

export default NavbarPage;
