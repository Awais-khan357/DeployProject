import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BadgeItem.css";

export default function BadgeItem({ icon, text, color }) {
  return (
    <Col md={2} sm={6} xs={6} className="mb-4">
      <div className="featured-block" style={{ backgroundColor: color }}>
        <Link to="#" className="d-block">
          <div className="icon">
            <span>
              <FontAwesomeIcon icon={icon} />
            </span>
          </div>
          <p className="featured-block-text text-white text-center">{text}</p>
        </Link>
      </div>
    </Col>
  );
}
