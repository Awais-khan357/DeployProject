import "./footer.css";
import { Container, Row } from "react-bootstrap";
import FooterSection from "./FooterSection";
import FooterBar from "./FooterBar";
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
      "UOP Peshawar",
      "UOP Home",
      "Admissions",
      "UOP-Online",
      "Scholarships",
      "Reasearch",
      "UOP Association",
      "Career Developement Center",
    ],
  },
  {
    links: [
      "User Guides/Manuals",
      "Library Handbook",
      "Turnitin User Guide",
      "VPN User Guide for MAC User",
      "VPN User Guide for Window 8",
      "VPN User Guide for window 10",
      "VPN User Guide ",
      "How to write PHD Thesis",
      "Guidelines for Writing MS Thesis",
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
        <Row>
          {footerData.map((footer, index) => (
            <FooterSection footer={footer.links} />
          ))}
        </Row>
        <FooterBar />
      </Container>
    </>
  );
}
