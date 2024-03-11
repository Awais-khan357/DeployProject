import introduction from "../images/introduction.jpg";
import { Col } from "react-bootstrap";
import AboutSideLink from "./AboutSideLink";
export default function Introduction() {
  return (
    <>
      <Col md={6} className="border mb-3 px-4">
        <div className="content">
          <div className="history">
            <h5 className="mt-3">Introduction</h5>
            <img src={introduction} className="img-fluid" />
            <div className="mt-3" style={{ fontWeight: "90px" }}>
              University of Peshawar Library is vital to the education mission
              of COMSATS University Islamabad. Overall objective of the Junaid
              Zaidi Library is to select, organize, and maintain print and
              electronic resources that support the curriculum and information
              needs of COMSATS University Islamabad academic community.
            </div>
            <h5 className="mt-3">Aim</h5>
            <div className="mt-3">
              The space supplements Habib University’s vision of innovation,
              creativity and knowledge creation. Our vision is “Promoting and
              facilitating the culture of critical inquiry, research,
              scholarship, collaboration and self-directed lifelong learning”.
            </div>
            <h5 className="mt-3">Mission</h5>
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
