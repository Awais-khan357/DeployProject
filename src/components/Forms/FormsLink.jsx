import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import BookPurchase from "./BookPurchase";
import MemberShipForm from "./MemberShipForm";
import StudyRoom from "./StudyRoom";
import VpnForm from "./VpnForm";
import WifiForm from "./WifiForm";
import "../Links.css";
const links = [
  "Book Purchase",
  "Vpn Request",
  "MemberShip",
  "StudyRoom",
  "Wifi",
];
export default function FormsLink() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(
    tabParam || "Book Purchase"
  );
  useEffect(() => {
    setSelectedContent(tabParam || "Book Purchase");
  }, [tabParam]);
  const renderContent = () => {
    switch (selectedContent) {
      case "Book Purchase":
        return <BookPurchase />;
      case "MemberShip":
        return <MemberShipForm />;
      case "StudyRoom":
        return <StudyRoom />;
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
      <Container fluid className="mt-5">
        <Row>
          <Col md={3}>
            <div className="nav-box">
              <h4>Forms List</h4>
              <nav className="main-nav">
                <ul className="unstyled list-hover-slide">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/formLink?tab=${encodeURIComponent(link)}`}
                    >
                      <li
                        className={`mt-2 ${
                          selectedContent === link ? "active" : ""
                        }`}
                      >
                        {`${link} Form`}
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
    </>
  );
}
