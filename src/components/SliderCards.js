import React from "react";
import { Container, Row } from "react-bootstrap";
import SliderCardItem from "./SliderCardItem";

const sliderCard = [
  {
    heading: " UOP Research Portal",
    text: "Explore the Repository",
    color: "green",
  },
  { heading: " Research", text: "Support", color: "red" },
  { heading: " Research", text: "Tools", color: "blue" },
  { heading: "Info Skills", text: "Program", color: "SaddleBrown" },
  {
    heading: " LIS Bulletin",
    text: "Quarterly News Letter",
    color: "SeaGreen",
  },
  { heading: "Researchers", text: "Corner", color: "orange" },
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
