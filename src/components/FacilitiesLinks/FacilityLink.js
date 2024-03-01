import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Internet from "./Internet";
import StudyCabin from "./StudyCabin";
import WashRoom from "./WashRoom";
import Water from "./Water";
import Wifi from "./Wifi";
import "./FacilityLink.css";
import Printer from "./Printer";
import Scanner from "./Scanner";
const links = [
  "Internet Lab",
  "Wifi",
  "Printer",
  "Scanner",
  "Filter Water",
  "WashRoom",
];
export default function FacilityLink() {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    setSelectedContent(tabParam);
  }, [location]);
  const [selectedContent, setSelectedContent] = useState("");

  const renderContent = () => {
    switch (selectedContent) {
      case "Internet Lab":
        return <Internet />;
      case "Wifi":
        return <Wifi />;
      case "Printer":
        return <Printer />;
      case "Scanner":
        return <Scanner />;
      case "Filter Water":
        return <Water />;
      case "WashRoom":
        return <WashRoom />;
      case "Study Cabin":
        return <StudyCabin />;
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
