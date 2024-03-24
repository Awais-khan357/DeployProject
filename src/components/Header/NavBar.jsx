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
                  label: "Manuscript Collection",
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
                  label: "Middle East Collection",
                  page: "/collectionLink?tab=MiddleEast",
                },
                {
                  label: "Rare Book Collection",
                  page: "/collectionLink?tab=RareBook",
                },
                {
                  label: "Newspaper Collection",
                  page: "/collectionLink?tab=NewsPaper",
                },
              ]}
            />
            <DropDown
              title="Services"
              items={[
                { label: "OPAC", page: "/servicesLink?tab=OPAC" },
                {
                  label: "Circulation Service",
                  page: "/servicesLink?tab=Circulation Services",
                },
                {
                  label: "Digital Library",
                  page: "/servicesLink?tab=Digital Library",
                },
                {
                  label: "SDI services",
                  page: "/servicesLink?tab=SDI Services",
                },
                {
                  label: "Email Alerts",
                  page: "/servicesLink?tab=Email Services",
                },
                {
                  label: "Assistive technology Room",
                  page: "/servicesLink?tab=Assertive technology",
                },
                {
                  label: "Union Catalogue",
                  page: "/servicesLink?tab=Union Catalog",
                },
                {
                  label: "Reader Advisory Service",
                  page: "/servicesLink?tab=Reader Advisory",
                },
                {
                  label: "Search Collection",
                  page: "/servicesLink?tab=Search",
                },
                {
                  label: "Request A Book",
                  page: "/servicesLink?tab=Request ABook",
                },
                {
                  label: "Disability Room",
                  page: "/servicesLink?tab=Disability Room",
                },
                {
                  label: "Reference Service",
                  page: "/servicesLink?tab=Reference Services",
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
                {
                  label: "Study Cabin",
                  page: "/facilityLink?tab=Study Cabin",
                },
                {
                  label: "Discussion Room",
                  page: "/facilityLink?tab=Discussion Room",
                },
                {
                  label: "Study Carrels",
                  page: "/facilityLink?tab=Study Carrels",
                },
                {
                  label: "Research Cubicales",
                  page: "/facilityLink?tab=Research Cubicales",
                },
                {
                  label: "PhotoCopying",
                  page: "/facilityLink?tab=PhotoCopying",
                },
                {
                  label: "Printing",
                  page: "/facilityLink?tab=Printing",
                },
                {
                  label: "Scanning",
                  page: "/facilityLink?tab=Scanning",
                },
                {
                  label: "Filter Water",
                  page: "/facilityLink?tab=Filter Water",
                },
                { label: "WashRooms", page: "/facilityLink?tab=WashRoom" },
              ]}
            />
            <DropDown
              title="Reasearch"
              items={[
                { label: "Databases", page: "/researchLink?tab=Databases" },
                {
                  label: "A to Z journals",
                  page: "/researchLink?tab=Databases",
                },
                {
                  label: "Open Acess Book",
                  page: "/researchLink?tab=Databases",
                },
                {
                  label: "Citation Management Software",
                  page: "/researchLink?tab=Citation Management Software",
                },
                {
                  label: "Data Analysis tools",
                  page: "/researchLink?tab=Data Analysis tool",
                },
                {
                  label: "Journal Citation Report",
                  page: "/researchLink?tab=Journal Citation Report",
                },
                {
                  label: "Citation Manuals",
                  page: "/researchLink?tab=Citation Manuals",
                },
                {
                  label: "Searching Technique",
                  page: "/researchLink?tab=Search Technique",
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
                  label: "BS Theses GuideLines",
                  page: "/guideLine?tab=BS Theses",
                },
                {
                  label: "Library HandBook GuideLines",
                  page: "/guideLine?tab=Library Handbook",
                },
              ]}
            />
            {/* <DropDown
              title="Sections"
              items={[
                {
                  label: "Administrative",
                  page: "/librarySection?tab=Administrative",
                },
                {
                  label: "Technical Section",
                  page: "/librarySection?tab=Technical",
                },
                {
                  label: "Oriental Section",
                  page: "/librarySection?tab=Oriental",
                },
                {
                  label: "Thesis & Dessertation",
                  page: "/librarySection?tab=ThesisDessertation",
                },
              ]}
            /> */}
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
                { label: "Library Staff", page: "/aboutLink?tab=Staff" },
                { label: "Contact Us", page: "/aboutLink?tab=Contact" },
                { label: "FAQ", page: "/aboutLink?tab=Faq" },
              ]}
            />
            <Nav.Link as={Link} to="/newsEvent">
              Events
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
