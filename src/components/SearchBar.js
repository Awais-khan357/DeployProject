import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { useState } from "react";
import "./SearchBar.css";
export default function SearchBar() {
  const [openCard, setOpenCard] = useState(true);

  function handleArticle() {
    setOpenCard(false);
  }
  function handleBook() {
    setOpenCard(true);
  }
  return (
    <Container fluid className="bg-dark">
      <Row className="text-center text-white">
        <Col
          md={{ span: 6, offset: 3 }}
          lg={{ span: 6, offset: 3 }}
          className="mt-5 mb-5"
        >
          <Card>
            <Card.Header className="text-start">
              <div
                className={`btn btn-white ${openCard ? "selected" : ""}`}
                onClick={handleBook}
              >
                Books
              </div>
              <div
                className={`btn btn-white ${openCard ? "" : "selected"}`}
                onClick={handleArticle}
              >
                Articles
              </div>
            </Card.Header>
            <Card.Body>
              {openCard ? (
                <>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Search in Books"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      Search
                    </Button>
                  </InputGroup>
                </>
              ) : (
                <>
                  {" "}
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Search in Articles"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      Search
                    </Button>
                  </InputGroup>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
