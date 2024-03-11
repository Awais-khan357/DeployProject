import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import History from "./History";
import Contact from "./Contact";
import Staff from "./Staff";
import Timing from "./Timing";
import Rules from "./Rules";
import FAQ from "./FAQ";
import Introduction from "./Introduction";
import Footer from "../Footer";
import "../Links.css";

const links = [
  "History",
  "Introduction",
  "Rules Regulation",
  "Timing",
  "Staff",
  "Faq",
  "Contact",
];

export default function AboutLinks() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(tabParam || "History");
  useEffect(() => {
    setSelectedContent(tabParam || "History");
  }, [tabParam]);

  const renderContent = () => {
    switch (selectedContent) {
      case "History":
        return <History />;
      case "Contact":
        return <Contact />;
      case "Staff":
        return <Staff />;
      case "Timing":
        return <Timing />;
      case "Faq":
        return <FAQ />;
      case "Rules Regulation":
        return <Rules />;
      case "Introduction":
        return <Introduction />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container fluid className="about-link mt-5 px-4">
        <Row>
          <Col md={3}>
            <div className="nav-box">
              <h4>About List</h4>
              <nav className="main-nav">
                <ul className="unstyled list-hover-slide">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/aboutLink?tab=${encodeURIComponent(link)}`}
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
          {renderContent()}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
