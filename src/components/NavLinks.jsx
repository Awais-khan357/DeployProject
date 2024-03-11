import React, { useState } from "react";
import { Navbar, Nav, Container, FormControl, Button } from "react-bootstrap";
import "./NavLinks.css";

const links = [
  { id: "link1", name: "Google Scholar" },
  { id: "link2", name: "Link 2" },
  { id: "link3", name: "Link 3" },
];

function NavLinks() {
  const [activeLink, setActiveLink] = useState(links[0].id);
  const [content, setContent] = useState(null);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setContent(null);
  };

  const handleSearch = (searchTerm) => {
    setContent(`Search results for: ${searchTerm}`);
  };

  const handleSearchClose = () => {
    setContent(null);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="custom-nav">
            {links.map((link) => (
              <Nav.Link
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                active={activeLink === link.id}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      <div>
        {content === null ? (
          <div>
            <FormControl
              type="text"
              placeholder="Enter search term"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Button variant="secondary" onClick={handleSearchClose}>
              Close Search
            </Button>
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </>
  );
}

export default NavLinks;
