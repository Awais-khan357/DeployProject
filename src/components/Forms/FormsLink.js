import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./FormsLink";
import BookPurchase from "./BookPurchase";
import MemberShipForm from "./MemberShipForm";
import StudyRoom from "./StudyRoom";
import TurnitinForm from "./TurnitinForm";
import VpnForm from "./VpnForm";
import WifiForm from "./WifiForm";
const links = [
  "Book Purchase",
  "Turnitin",
  "Vpn Request",
  "MemberShip",
  "StudyRoom",
  "Wifi",
];
export default function FormsLink() {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    setSelectedContent(tabParam);
  }, [location]);
  const [selectedContent, setSelectedContent] = useState("");

  const renderContent = () => {
    switch (selectedContent) {
      case "Book Purchase":
        return <BookPurchase />;
      case "MemberShip":
        return <MemberShipForm />;
      case "StudyRoom":
        return <StudyRoom />;
      case "Turnitin":
        return <TurnitinForm />;
      case "Vpn Request":
        return <VpnForm />;
      case "Wifi":
        return <WifiForm />;
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
                    link + " Form"
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
