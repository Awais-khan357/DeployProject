import "./FooterBar.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterBar() {
  return (
    <>
      <Row className="text-center">
        <Col md={8} lg={6} xs={10} sm={10} className="mb-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Student</span>
            </strong>
            . All Rights Reserved By University of Peshawar
          </div>
        </Col>
        <Col md={4} lg={6} xs={2} sm={2} className="text-center">
          <div className="social-links">
            <span className="facebook">
              <FontAwesomeIcon icon={faFacebookSquare} />{" "}
            </span>
            <span className="twitter">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </span>
          </div>
        </Col>
      </Row>
    </>
  );
}
