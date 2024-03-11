import { Container, Row, Col } from "react-bootstrap";
import {
  faUsers,
  faStar,
  faCircleExclamation,
  faBook,
  faDisplay,
  faArrowsToCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./AboutSideLink.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BadgeData = [
  { icon: faUsers, text: "Open Acess Journals" },
  { icon: faArrowsToCircle, text: "HEC Corner" },
  { icon: faBook, text: "MOOCs" },
  { icon: faCircleExclamation, text: "Union Catalog" },
];

export default function AboutSideLink() {
  return (
    <Row>
      <h4 className="text-center">Quick Link</h4>
      {BadgeData.map((item) => (
        <SideLinkItem text={item.text} key={item.text} icon={item.icon} />
      ))}
    </Row>
  );
}

function SideLinkItem({ icon, text }) {
  return (
    <Col md={12} className="mt-0">
      <div className="sideLink-block">
        <Link to="#" className="d-block">
          <div className="icons">
            <span>
              <FontAwesomeIcon icon={icon} />
            </span>
          </div>
          <p className="sideLink-text text-center">{text}</p>
        </Link>
      </div>
    </Col>
  );
}
