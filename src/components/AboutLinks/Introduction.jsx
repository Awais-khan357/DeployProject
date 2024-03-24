import introduction from "../images/introduction.jpg";
import { Col } from "react-bootstrap";
import Heading from "./Heading";
export default function Introduction() {
  return (
    <>
      <Col md={8} className="mb-3 px-4">
        <div className="content">
          <Heading heading="Introduction" />
          <img src={introduction} className="img-fluid" />
          <div className="mt-3" style={{ fontWeight: "90px" }}>
            University of Peshawar Library is vital to the education mission of
            University of Peshawar. Overall objective of the Central Library is
            to select, organize, and maintain print and electronic resources
            that support the curriculum and information needs of University of
            peshawar academic community.
          </div>
          <h5 className="mt-3">Aim</h5>
          <div className="mt-3">
            The space supplements Peshawar University’s vision of innovation,
            creativity and knowledge creation. Our vision is “Promoting and
            facilitating the culture of critical inquiry, research, scholarship,
            collaboration and self-directed lifelong learning”.
          </div>
          <h5 className="mt-3">Mission</h5>
          <div className="mt-3">
            Currently, the library houses a unique and diverse collection of
            14500 books, 329,000 e-books and 11500 Journals.
          </div>
        </div>
      </Col>
    </>
  );
}
