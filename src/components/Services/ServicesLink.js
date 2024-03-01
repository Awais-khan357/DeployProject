import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Search from "./Search";
import DigitalLibrary from "./DigitalLibrary";
import OPAC from "./OPAC";
import RequestABook from "./RequestABook";
import UnionCatalog from "./UnionCatalog";
const links = [
  "Search",
  "Digital Library",
  "Request ABook",
  "OPAC",
  "Union Catalog",
];
export default function AboutLinks() {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    setSelectedContent(tabParam);
  }, [location]);
  const [selectedContent, setSelectedContent] = useState("");

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
      <Container className="mt-5">
        <Row>
          <Col sm={2} md={3}>
            <nav className="main-nav" role="navigation">
              <ul className="unstyled list-hover-slide">
                {links.map((link) => (
                  <li onClick={() => setSelectedContent(link)}>{link}</li>
                ))}
              </ul>
            </nav>
          </Col>
          <Col md={9} className="border mb-3">
            <p className="content">{renderContent()}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
