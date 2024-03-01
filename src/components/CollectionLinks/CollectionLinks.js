import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import General from "./General";
import Special from "./Special";
import ManuScript from "./ManuScript";
import Serial from "./Serial";
import Personal from "./Personal";
import Orientation from "./Orientation";
import MiddleEast from "./MiddleEast";
import RareBook from "./RareBook";
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
      <Container className="mt-5">
        <Row>
          <Col sm={2} md={3}>
            <nav className="main-nav" role="navigation">
              <ul className="unstyled list-hover-slide">
                {links.map((link) => (
                  <li onClick={() => setSelectedContent(link)}>{`${
                    link + " Collection"
                  }`}</li>
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
