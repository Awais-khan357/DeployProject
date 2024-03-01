import "./footer.css";
import { Container, Row } from "react-bootstrap";
import FooterSection from "./FooterSection";
import FooterBar from "./FooterBar";
import MapSection from "./MapSection";
const footerData = [
  {
    links: [
      "Useful Link",
      "Library Home",
      "Online Public Access Catalog",
      "UOP Union Catalog",
      "UOP E-Library",
      "Free Online Journals",
      "HEC Digital Library",
      "HEC E-books Library",
      "Contact Us",
    ],
  },
  {
    links: [
      "Forms",
      "VPN Request Form",
      "WIFI Password Reset/ Set Form",
      "Library MemeberShip Form",
      "Books Purchase Request Form",
      "SDI Inquiry Form",
    ],
  },
];

export default function Footer() {
  return (
    <>
      <Container fluid className="footer text-white">
        <Row className="mb-5">
          {footerData.map((footer, index) => (
            <FooterSection footer={footer.links} />
          ))}
          <MapSection />
        </Row>
        <FooterBar />
      </Container>
    </>
  );
}
