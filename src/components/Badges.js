import BadgeItem from "./BadgeItem";
import { Container, Row, Col } from "react-bootstrap";
import {
  faUsers,
  faStar,
  faCircleExclamation,
  faBook,
  faDisplay,
  faArrowsToCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Badges.css";

const BadgeData = [
  { icon: faUsers, text: "Open Acess Journals", color: "green" },
  { icon: faArrowsToCircle, text: "HEC Corner", color: "red" },
  { icon: faStar, text: "University Ranking", color: "blue" },
  { icon: faBook, text: "MOOCs", color: "SaddleBrown" },
  { icon: faCircleExclamation, text: "Union Catalog", color: "SeaGreen" },
  { icon: faDisplay, text: "Open Acess Thesis", color: "orange" },
];

export default function Badges() {
  return (
    <Container className="mt-5">
      <Row className="d-flex">
        <Col md={12} className="text-center">
          <h1>Quick Links</h1>
        </Col>
        {BadgeData.map((item) => (
          <BadgeItem text={item.text} icon={item.icon} />
        ))}
      </Row>
    </Container>
  );
}
