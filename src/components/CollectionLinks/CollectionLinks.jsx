import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import General from "./General";
import Special from "./Special";
import ManuScript from "./ManuScript";
import Serial from "./Serial";
import Personal from "./Personal";
import Orientation from "./Orientation";
import MiddleEast from "./MiddleEast";
import RareBook from "./RareBook";
import "../Links.css";
const links = [
  "General",
  "Special",
  "Personal",
  "ManuScript",
  "Serial",
  "Oriental",
  "MiddleEast",
  "RareBook",
];
export default function CollectionLinks() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(tabParam || "General");
  useEffect(() => {
    setSelectedContent(tabParam || "General");
  }, [tabParam]);

  const renderContent = () => {
    switch (selectedContent) {
      case "General":
        return <General />;
      case "Personal":
        return <Personal />;
      case "ManuScript":
        return <ManuScript />;
      case "Special":
        return <Special />;
      case "Oriental":
        return <Orientation />;
      case "MiddleEast":
        return <MiddleEast />;
      case "RareBook":
        return <RareBook />;
      case "Serial":
        return <Serial />;
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
              <h4>Collection List</h4>
              <nav className="main-nav">
                <ul className="unstyled list-hover-slide">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/collectionLink?tab=${encodeURIComponent(link)}`}
                    >
                      <li
                        className={`mt-2 ${
                          selectedContent === link ? "active" : ""
                        }`}
                      >
                        {` ${link} Collection`}
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
