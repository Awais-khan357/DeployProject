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
    text: "(Online Public Acess Catalog) It is a matter of satisfaction that we have developed our web online public access catalogue (OPAC) that can help the users to reach our library bibliographic database worldwide and remotely accessible 24/7.",
  },

  {
    heading: "UOP Thesis Repository",
    icon: faBars,
    color: "orange",
    text: "UOP community produces massive amount of research each year in the form of theses, dissertations and project reports...",
  },
  {
    heading: "HEC E-Books Library",
    icon: faBook,
    color: "red",
    text: "Find out e-books by world renowned publishers being subscribed by UOP library through HEC Digital Library Program",
  },
  {
    heading: "HEC Digital Library",
    icon: faAddressBook,
    color: "green",
    text: "Know about the databases and journals being subscribed by UOP library through HEC Digital Library Program",
  },
];

function Cards() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={12} className="text-center mb-5">
          <h1>SERVICES</h1>
          <h6>
            In order to accomplish our goals and objectives, we provide the
            following services{" "}
          </h6>
        </Col>
        {cardData.map((cardItem) => (
          <Col md={6} className="mb-4 mt-2" key={cardItem.heading}>
            <CardItem
              heading={cardItem.heading}
              text={cardItem.text}
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
