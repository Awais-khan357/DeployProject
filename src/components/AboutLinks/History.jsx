import history from "../images/history.jpg";
import { Col } from "react-bootstrap";
import "./History.css";
import AboutSideLink from "./AboutSideLink";
export default function History() {
  return (
    <>
      <Col md={6} className="mb-3 px-4">
        <div className="content">
          <div>
            <h5 className="mt-3">About Library</h5>
            <img src={history} className="img-fluid" />
            <div className="mt-3">
              Welcome to University of Peshawar Library. This is a
              multi-disciplinary learning space serving the faculty, students,
              researchers and staff of the university. The UOP aspires to be one
              of the finest repositories of knowledge and play a critical role
              in the growth of scholarship and innovative research in the
              region.
            </div>
            <div className="mt-3">
              The space supplements Habib University’s vision of innovation,
              creativity and knowledge creation. Our vision is “Promoting and
              facilitating the culture of critical inquiry, research,
              scholarship, collaboration and self-directed lifelong learning”.
            </div>
            <div className="mt-3">
              Currently, the library houses a unique and diverse collection of
              14500 books, 329,000 e-books and 11500 Journals.
            </div>
          </div>
        </div>
      </Col>
      <Col md={3}>
        <AboutSideLink />
      </Col>
    </>
  );
}
