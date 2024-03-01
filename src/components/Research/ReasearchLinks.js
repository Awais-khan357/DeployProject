import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Databases from "./Databases";
import ApaStyle from "./ApaStyle";
import JournalCitation from "./JournalCitation";
import SearchTechnique from "./SearchTechnique";
import Citation from "./Citation";
import EndNote from "./EndNote";
import LibraryUse from "./LibraryUse";

const links = [
  "Databases",
  "APA Style",
  "Search Technique",
  "Citation Software",
  "Journal Citation Report",
  "EndNote Tool",
  "Library Use",
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
