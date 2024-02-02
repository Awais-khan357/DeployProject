import { Card } from "react-bootstrap";
import "./CardItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function CardItem({ heading, text, icon, color }) {
  return (
    <Card className="card overflow">
      <div className="header text-center bg-white">
        <div
          className="icon"
          style={{ color: "white", backgroundColor: color }}
        >
          <span>
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>
        <h5>{heading}</h5>
      </div>
      <Card.Body>
        <p className="card-text">{text}</p>
        <div className="d-grid">
          <button className="btn btn-success">
            Explore More <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
