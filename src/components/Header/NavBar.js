import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import DropDown from "./DropDown";
export default function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="justify-content-center"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <DropDown
              title="About Us"
              items={[
                { label: "History", page: "/aboutLink?tab=History" },
                { label: "Introduction", page: "/aboutLink?tab=Introduction" },
                {
                  label: "Rules & Regulation",
                  page: "/aboutLink?tab=Rules Regulation",
                },
                { label: "Library Timing", page: "/aboutLink?tab=Timing" },
                { label: "Location", page: "/aboutLink?tab=Location" },
                { label: "Library Staff", page: "/aboutLink?tab=Staff" },
                { label: "Contact Us", page: "/aboutLink?tab=Contact" },
                { label: "FAQ", page: "/aboutLink?tab=Faq" },
              ]}
            />
            <DropDown
              title="Collection"
              items={[
                {
                  label: "General Collection",
                  page: "/collectionLink?tab=General",
                },
                {
                  label: "Special Collection",
                  page: "/collectionLink?tab=Special",
                },
                {
                  label: "Personal Collection",
                  page: "/collectionLink?tab=Personal",
                },
                {
                  label: "ManuScript Collection",
                  page: "/collectionLink?tab=ManuScript",
                },
                {
                  label: "Serial Collection",
                  page: "/collectionLink?tab=Serial",
                },
                {
                  label: "Oriental Collection",
                  page: "/collectionLink?tab=Oriental",
                },
                {
                  label: "MiddleEast Collection",
                  page: "/collectionLink?tab=MiddleEast",
                },
                {
                  label: "RareBook Collection",
                  page: "/collectionLink?tab=RareBook",
                },
              ]}
            />
            <DropDown
              title="Services"
              items={[
                {
                  label: "Search Collection",
                  page: "/servicesLink?tab=Search",
                },
                {
                  label: "Digital Library",
                  page: "/servicesLink?tab=Digital Library",
                },
                {
                  label: "Request A Book",
                  page: "/servicesLink?tab=Request ABook",
                },
                { label: "OPAC", page: "/servicesLink?tab=OPAC" },
                {
                  label: "Union Catalogue",
                  page: "/servicesLink?tab=Union Catalog",
                },
              ]}
            />
            <DropDown
              title="Reasearch"
              items={[
                { label: "Databases", page: "/researchLink?tab=Databases" },
                { label: "APA Style", page: "/researchLink?tab=APA Style" },
                {
                  label: "Search Technique",
                  page: "/researchLink?tab=Search Technique",
                },
                {
                  label: "Citation Software",
                  page: "/reasearchLink?tab=Citation Software",
                },
                {
                  label: "Journal Citation Report",
                  page: "/researchLink?tab=Journal Citation Report",
                },
                {
                  label: "EndNote Tool",
                  page: "/researchLink?tab=EndNote Tool",
                },
                { label: "Library Use", page: "/researchLink?tab=Library Use" },
              ]}
            />
            <DropDown
              title="Forms/Reservation"
              items={[
                {
                  label: "Book Purchase Form",
                  page: "/formLink?tab=Book Purchase",
                },
                {
                  label: "Library MemberShip Form",
                  page: "/formLink?tab=MemberShip",
                },
                {
                  label: "StudyRoom Form",
                  page: "/formLink?tab=StudyRoom",
                },
                { label: "Turnitin Form", page: "/formLink?tab=Turnitin" },
                {
                  label: "VPN Request Form",
                  page: "/formLink?tab=Vpn Request",
                },
                { label: "Wifi Password Form", page: "/formLink?tab=Wifi" },
              ]}
            />
            <DropDown
              title="GuideLines"
              items={[
                {
                  label: "Turnitin GuideLines",
                  page: "/guideLine?tab=Turnitin",
                },
                {
                  label: "Vpn GuideLines",
                  page: "/guideLine?tab=Vpn",
                },
                {
                  label: "PHD Theses GuideLines",
                  page: "/guideLine?tab=PHD Theses",
                },
                {
                  label: "MS Theses GuideLines",
                  page: "/guideLine?tab=MS Theses",
                },
                {
                  label: "Library HandBook GuideLines",
                  page: "/guideLine?tab=Library Handbook",
                },
              ]}
            />
            <DropDown
              title="Facilities"
              items={[
                {
                  label: "Internet Lab",
                  page: "/facilityLink?tab=Internet Lab",
                },
                { label: "Wifi", page: "/facilityLink?tab=Wifi" },
                { label: "Study Cabin", page: "/facilityLink?tab=Study Cabin" },
                {
                  label: "Printer",
                  page: "/facilityLink?tab=Printer",
                },
                {
                  label: "Scanner",
                  page: "/facilityLink?tab=Scanner",
                },
                {
                  label: "Filter Water",
                  page: "/facilityLink?tab=Filter Water",
                },
                { label: "WashRooms", page: "/facilityLink?tab=WashRoom" },
              ]}
            />
            <Nav.Link as={Link} to="/newsEvent">
              News/Events
            </Nav.Link>
            <Nav.Link as={Link} to="/virtualTour">
              Virtual Tour
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
