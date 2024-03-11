import { Container, Row, Col } from "react-bootstrap";
import "./CheckSearch.css";

export default function CheckSearch() {
  return (
    <Container
      fluid
      className="mb-5"
      style={{
        paddingTop: "85px",
        paddingBottom: "85px",
        visibility: "visible",
        background: "rgb(31, 9, 55)",
      }}
    >
      <Container>
        <Row className="g-2">
          <Col md={10} sm={10} lg={10}>
            <Row className="g-2">
              <Col md={4} sm={4} lg={4}>
                <select className="form-select border-0 py-3">
                  <option defaultValue="">Book</option>
                  <option value="1">Thesis</option>
                  <option value="2">Articles</option>
                </select>
              </Col>
              <Col md={8} sm={8} lg={8}>
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Search Keyword"
                />
              </Col>
            </Row>
          </Col>
          <Col md={2} sm={2} lg={2} className="search-btn">
            <button className="btn border-0 w-100 py-3">Search</button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
