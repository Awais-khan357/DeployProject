import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./Guidelines.css";
import VpnGuide from "./VpnGuide";
import TurnitinGuide from "./TurnitinGuide";
import MsGuide from "./MsGuide";
import PhdGuide from "./PhdGuide";
import HandBookGuide from "./HandBookGuide";
const links = [
  "Turnitin",
  "Vpn",
  "PHD Theses",
  "MS Theses",
  "Library Handbook",
];
export default function Guidelines() {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    setSelectedContent(tabParam);
  }, [location]);
  const [selectedContent, setSelectedContent] = useState("");

  const renderContent = () => {
    switch (selectedContent) {
      case "Turnitin":
        return <TurnitinGuide />;
      case "Vpn":
        return <VpnGuide />;
      case "PHD Theses":
        return <PhdGuide />;
      case "MS Theses":
        return <MsGuide />;
      case "Library Handbook":
        return <HandBookGuide />;
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
