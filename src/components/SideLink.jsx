import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";

const links = ["history", "location", "contact"];
export default function History() {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const [selectedContent, setSelectedContent] = useState(path);

  const renderContent = () => {
    switch (selectedContent) {
      case "history":
        return "Awais ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet lectus venenatis, sagittis quam in, faucibus mauris. Phasellus magna nibh, pulvinar convallis malesuada a, tincidunt ut justo. Vivamus vitae eros tortor. Nulla facilisi. Integer cursus rhoncus mi eget elementum. Morbi ante tellus, tristique vel erat sed, luctus congue nibh. Sed elementum ultricies scelerisque. Aliquam mollis non arcu nec lacinia. Cras condimentum sollicitudin nibh, eget consectetur nunc bibendum iaculis. Sed in nunc lectus. Integer rhoncus nibh nec turpis gravida, sed sodales nunc hendrerit. Ut vitae ligula elit";
      case "location":
        return "location interdum, diam ac pharetra mattis, ante neque porttitor libero, ac mollis est nulla a quam. Nullam diam ligula, fringilla vel luctus eu, sollicitudin tempus libero. Cras sodales, ligula nec venenatis porta, nibh tellus eleifend eros, eget feugiat justo leo ac massa. Nam iaculis risus in posuere pellentesque. Aenean in ex sollicitudin lorem elementum dapibus nec ac tellus. Aenean odio arcu, ornare et bibendum ut, sodales sed mauris. Duis vitae blandit nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae ";
      case "contact":
        return "This is overview staff";
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col sm={2}>
            <nav className="main-nav" role="navigation">
              <ul className="unstyled list-hover-slide">
                {links.map((link) => (
                  <li onClick={() => setSelectedContent(link)}>{link}</li>
                ))}
              </ul>
            </nav>
          </Col>
          <Col md={9}>
            <div className="content">{renderContent()}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
