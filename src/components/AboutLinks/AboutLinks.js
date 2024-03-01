import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./AboutLinks.css";
import History from "./History";
import Location from "./Location";
import Contact from "./Contact";
import Staff from "./Staff";
import Timing from "./Timing";
import Rules from "./Rules";
import FAQ from "./FAQ";
import Introduction from "./Introduction";
import Footer from "../Footer";

const links = [
  "History",
  "Introduction",
  "Rules Regulation",
  "Timing",
  "Location",
  "Contact",
  "Staff",
  "Faq",
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
      case "History":
        return <History />;
      case "Location":
        return <Location />;
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
      <Footer />
    </>
  );
}
