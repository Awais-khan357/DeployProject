import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Search from "./Search";
import DigitalLibrary from "./DigitalLibrary";
import OPAC from "./OPAC";
import RequestABook from "./RequestABook";
import UnionCatalog from "./UnionCatalog";
import SDIServices from "./SDIServices";
import EmailServices from "./EmailServices";
import DisabilityService from "./DisabilityService";
import ReaderService from "./ReaderService";
import AssertiveService from "./AssertiveService";
import CirculationService from "./CirculationService";
import ReferenceService from "./ReferenceService";
import "../Links.css";
const links = [
  "Search",
  "Digital Library",
  "Request ABook",
  "OPAC",
  "Union Catalog",
  "SDI Services",
  "Email Services",
  "Disability Room",
  "Reader Advisory",
  "Assertive technology",
  "Circulation Services",
  "Reference Services",
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
      case "SDI Services":
        return <SDIServices />;
      case "Email Services":
        return <EmailServices />;
      case "Disability Room":
        return <DisabilityService />;
      case "Reader Advisory":
        return <ReaderService />;
      case "Assertive technology":
        return <AssertiveService />;
      case "Circulation Services":
        return <CirculationService />;
      case "Reference Services":
        return <ReferenceService />;
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
            {renderContent()}
          </Col>
        </Row>
      </Container>
    </>
  );
}
