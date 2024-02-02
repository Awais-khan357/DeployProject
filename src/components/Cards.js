import { Container, Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";
import {
  faGear,
  faAddressBook,
  faBars,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    heading: "OPAC",
    color: "blue",
    icon: faGear,
    text: "Discover and search books and other library collection as it is an online database of material held by UOP library",
  },
  {
    heading: "HEC Digital Library",
    icon: faAddressBook,
    color: "green",
    text: "Know about the databases and journals being subscribed by UOP library through HEC Digital Library Program",
  },
  {
    heading: "HEC E-Books Library",
    icon: faBook,
    color: "red",
    text: "Find out e-books by world renowned publishers being subscribed by UOP library through HEC Digital Library Program",
  },
  {
    heading: "UOP Thesis Repository",
    icon: faBars,
    color: "orange",
    text: "UOP community produces massive amount of research each year in the form of theses, dissertations and project reports...",
  },
];

function Cards() {
  return (
    <Container fluid>
      <Row className="g-2 mt-4">
        {cardData.map((cardItem) => (
          <Col md={3}>
            <CardItem
              heading={cardItem.heading}
              text={cardItem.text}
              key={cardItem.heading}
              icon={cardItem.icon}
              color={cardItem.color}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
