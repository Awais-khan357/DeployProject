import { Container, Row } from "react-bootstrap";
import SliderCardItem from "./SliderCardItem";

const sliderCard = [
  {
    id: 1,
    heading: " UOP Research Portal",
    text: "Explore the Repository",
    color: "green",
  },
  { id: 2, heading: " Research", text: "Support", color: "red" },
  { id: 3, heading: " Research", text: "Tools", color: "blue" },
  { id: 4, heading: "Info Skills", text: "Program", color: "SaddleBrown" },
  {
    id: 5,
    heading: " LIS Bulletin",
    text: "Quarterly News Letter",
    color: "SeaGreen",
  },
  { id: 6, heading: "Researchers", text: "Corner", color: "orange" },
];

function SliderCards() {
  return (
    <Container fluid>
      <h2 className="text-center mt-5">
        Search Articles From HEC Digital Library
      </h2>
      <Row className="mt-5 mb-5">
        <SliderCardItem slides={sliderCard} />
      </Row>
    </Container>
  );
}

export default SliderCards;
