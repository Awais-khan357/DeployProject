import { Link, useParams, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Internet from "./Internet";
import StudyCabin from "./StudyCabin";
import WashRoom from "./WashRoom";
import Water from "./Water";
import Wifi from "./Wifi";
import "../Links.css";
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
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(
    tabParam || "Internet Lab"
  );
  useEffect(() => {
    setSelectedContent(tabParam || "Internet Lab");
  }, [tabParam]);

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
      <Container fluid className="mt-5">
        <Row>
          <Col md={3}>
            <div className="nav-box">
              <h4>Facilities List</h4>
              <nav className="main-nav">
                <ul className="unstyled list-hover-slide">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/facilityLink?tab=${encodeURIComponent(link)}`}
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
