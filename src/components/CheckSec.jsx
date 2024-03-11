import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import openAcess from "./images/openAcess.png";
import Ranking from "./images/Ranking.png";
import catalog from "./images/catalog.png";
import Elearning from "./images/Elearning.png";
import education from "./images/education.png";
import thesis from "./images/thesis.png";
import "./CheckSection.css";

const BadgeData = [
  { img: openAcess, text: "Open Acess Journals" },
  { img: education, text: "HEC Corner" },
  { img: Ranking, text: "University Ranking" },
  { img: Elearning, text: "MOOCs" },
  { img: catalog, text: "Union Catalog" },
  { img: thesis, text: "Open Acess Thesis" },
];

export default function checkSection() {
  return (
    <section className="about w-100">
      <Container fluid>
        <Row>
          <Col
            sm={12}
            lg={4}
            md={4}
            className="content d-flex flex-column justify-content-center mb-5"
          >
            <div className="content">
              <h2>Voluptatem dignissimos provident quasi</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <button className="btn about-btn">See All</button>
            </div>
          </Col>
          <Col
            md={8}
            lg={8}
            sm={12}
            className="badge-img d-flex align-items-center"
          >
            <Row>
              {BadgeData.map((item) => (
                <BadgeItem text={item.text} key={item.text} img={item.img} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function BadgeItem({ img, text }) {
  return (
    <Col md={4} lg={4} sm={6} className="mt-3">
      <div className="featured-block justify-content-center">
        <Link to="/newsEvent" className="d-block">
          <div className="img">
            <img src={img} alt={text} />
          </div>
          <p className="badge-text text-center">{text}</p>
        </Link>
      </div>
    </Col>
  );
}
