import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Databases from "./Databases";
import ApaStyle from "./ApaStyle";
import JournalCitation from "./JournalCitation";
import SearchTechnique from "./SearchTechnique";
import Citation from "./Citation";
import EndNote from "./EndNote";
import LibraryUse from "./LibraryUse";
import "../Links.css";

const links = [
  "Databases",
  "APA Style",
  "Search Technique",
  "Citation Software",
  "Journal Citation Report",
  "EndNote Tool",
  "Library Use",
];
export default function ReasearchLinks() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(
    tabParam || "Databases"
  );
  useEffect(() => {
    setSelectedContent(tabParam || "Databases");
  }, [tabParam]);

  const renderContent = () => {
    switch (selectedContent) {
      case "Databases":
        return <Databases />;
      case "Citation Software":
        return <Citation />;
      case "APA Style":
        return <ApaStyle />;
      case "Search Technique":
        return <SearchTechnique />;
      case "Journal Citation Report":
        return <JournalCitation />;
      case "EndNote Tool":
        return <EndNote />;
      case "Library Use":
        return <LibraryUse />;
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
              <h4>Research List</h4>
              <nav className="main-nav">
                <ul className="unstyled list-hover-slide">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/researchLink?tab=${encodeURIComponent(link)}`}
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
