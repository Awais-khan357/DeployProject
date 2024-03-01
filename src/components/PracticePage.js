import { Container, Row, Col } from "react-bootstrap";
import "./PracticePage.css";
import { useState } from "react";
import About from "./About";
import OurServices from "./OurServices";

export default function PracticePage() {
  const [selectedContent, setSelectedContent] = useState("overview");

  const renderContent = () => {
    switch (selectedContent) {
      case "overview":
        return <About />;
      case "about":
        return <OurServices />;
      case "staff":
        return "This is overview staff";
      case "contact":
        return "This is overview contact";
      default:
        return null;
    }
  };

  return (
    <Container className="mt-5">
      <Row className="gap-3">
        <Col md={2} className="bg-light text-dark sidebar">
          <nav>
            <ul className="flex-column">
              <li
                className={`${
                  selectedContent === "overview" ? "selected" : ""
                }`}
                onClick={() => setSelectedContent("overview")}
              >
                Overview
              </li>
              <li
                className={`${selectedContent === "about" ? "selected" : ""}`}
                onClick={() => setSelectedContent("about")}
              >
                About
              </li>
              <li
                className={`${selectedContent === "staff" ? "selected" : ""}`}
                onClick={() => setSelectedContent("staff")}
              >
                Staff
              </li>
              <li
                className={`${selectedContent === "contact" ? "selected" : ""}`}
                onClick={() => setSelectedContent("contact")}
              >
                Contact
              </li>
            </ul>
          </nav>
        </Col>
        <Col md={8} className="border p-4">
          <div>{renderContent()}</div>
        </Col>
      </Row>
    </Container>
  );
}
