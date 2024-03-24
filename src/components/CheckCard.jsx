import { Container, Row, Col } from "react-bootstrap";
import tools from "./images/tools.png";
import Analysis from "./images/Analysis.png";
import support from "./images/support.png";
import skills from "./images/skills.png";
import news from "./images/news.png";
import corner from "./images/corner.png";
import "./CheckCard.css";

const BadgeData = [
  {
    id: 1,
    img: Analysis,
    heading: "UOP Reasearch Portal",
    text: "Supercharge your WordPress hosting with detailed website analytics, marketing tools",
  },
  {
    id: 2,
    img: tools,
    text: "Supercharge your WordPress hosting with detailed website analytics, marketing tools.",
    heading: "Reasearch Tools",
  },
  {
    id: 3,
    img: support,
    text: "Supercharge your WordPress hosting with detailed website analytics, marketing tools.",
    heading: "Reasearch Support",
  },
  {
    id: 4,
    img: skills,
    text: "Supercharge your WordPress hosting with detailed website analytics, marketing tools.",
    heading: "Info Skills",
  },
  {
    id: 5,
    img: news,
    text: "Supercharge your WordPress hosting with detailed website analytics, marketing tools.",
    heading: "LIS Bulletin",
  },
  {
    id: 6,
    img: corner,
    text: "Supercharge your WordPress hosting with detailed website analytics, marketing tools.",
    heading: "Researcher Corner",
  },
];

export default function CheckCard() {
  return (
    <Container fluid className="team-area section-padding40 section-bg1">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="section-tittle text-center mb-105">
              <h2>Most amazing features</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {BadgeData.map((item) => (
            <CheckCardItem
              key={item.id}
              text={item.text}
              heading={item.heading}
              img={item.img}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
}

function CheckCardItem({ text, img, heading }) {
  return (
    <Col sm={6} md={4} lg={4}>
      <div className="single-cat">
        <div className="cat-icon">
          <img src={img} alt={text} />
        </div>
        <div className="cat-cap">
          <h5>{heading}</h5>
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
}
