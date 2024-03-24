import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./CheckSearch.css";

export default function CheckSearch() {
  return (
    <Container
      fluid
      className="mb-5"
      style={{
        paddingTop: "65px",
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
                  <option value="0">Title</option>
                  <option value="1">Author</option>
                  <option defaultValue="">Keyword</option>
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
          <Col md={12} className="text-center text-light">
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Book"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Article"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Thesis"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
