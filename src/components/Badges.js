import BadgeItem from "./BadgeItem";
import { Container, Row } from "react-bootstrap";
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
    <Container fluid className="mt-5 bg-light">
      <Row className="d-flex">
        {BadgeData.map((item) => (
          <BadgeItem text={item.text} icon={item.icon} color={item.color} />
        ))}
      </Row>
    </Container>
  );
}
