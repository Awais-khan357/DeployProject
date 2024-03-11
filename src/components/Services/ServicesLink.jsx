import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Search from "./Search";
import DigitalLibrary from "./DigitalLibrary";
import OPAC from "./OPAC";
import RequestABook from "./RequestABook";
import UnionCatalog from "./UnionCatalog";
import "../Links.css";
const links = [
  "Search",
  "Digital Library",
  "Request ABook",
  "OPAC",
  "Union Catalog",
];
export default function ServicesLink() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(tabParam || "Search");
  useEffect(() => {
    setSelectedContent(tabParam || "Search");
  }, [tabParam]);

  const renderContent = () => {
    switch (selectedContent) {
      case "Search":
        return <Search />;
      case "Digital Library":
        return <DigitalLibrary />;
      case "Request ABook":
        return <RequestABook />;
      case "OPAC":
        return <OPAC />;
      case "Union Catalog":
        return <UnionCatalog />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container fluid className="mt-5">
        <Row>
          <Col md={3}>
            <div className="nav-box">
              <h4>Services List</h4>
              <nav className="main-nav">
                <ul className="unstyled list-hover-slide">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/servicesLink?tab=${encodeURIComponent(link)}`}
                    >
                      <li
                        className={`mt-2 ${
                          selectedContent === link ? "active" : ""
                        }`}
                      >
                        {link}
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>
          </Col>
          <Col md={9} className="border mb-3">
            <p className="content">{renderContent()}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
