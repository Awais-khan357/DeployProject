import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Contact.css";
export default function Contact() {
  return (
    <Col md={9} className="bg-light rounded mb-3">
      <Container className="contact-section">
        <Row>
          <Col md={12} lg={12} sm={12} className="g-4">
            <div class="text-center mx-auto" style={{ maxWidth: "700px" }}>
              <h2>Get in touch</h2>
              <p class="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax &amp;PHP.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={7} md={7} className="g-5 mb-5">
            <Form>
              <Form.Group
                className="mb-4 input-group-lg"
                controlId="formBasicText"
              >
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3 input-group-lg">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mb-3 input-group-lg"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Your Message"
                  rows={5}
                />
              </Form.Group>
              <button
                class="w-100 btn form-control border-warning py-3 bg-white text-warning"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Col>
          <Col md={5} sm={12} lg={5} className="g-5 contact-icon">
            <AddressBadge
              icon={faLocationDot}
              title="Address"
              text="University of Peshawar University Road Brt station 22"
            />
            <AddressBadge
              icon={faEnvelope}
              title="Mail Us"
              text="info@example.com"
            />
            <AddressBadge
              icon={faPhone}
              title="Telephone"
              text="(+012) 3456 7890"
            />
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
function AddressBadge({ text, icon, title }) {
  return (
    <div class="d-flex p-4 rounded mb-4 bg-white">
      <span className="my-custom-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <div>
        <h4>{title}</h4>
        <div class="mb-2 text-muted">{text}</div>
      </div>
    </div>
  );
}
