import React from 'react';
import '../../resources/css/App.css';
import { Navbar, Nav, NavDropdown, Button, ButtonGroup} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="sm" variant="light" className="sticky-top justify-content-center">
        <Container>
            <Navbar bg="light" variant="light" expand="sm" sticky="top" className="navbar navbar-expand-sm navbar-light bg-light sticky-nav justify-content-center">
              <Navbar.Brand href="#home">Samriddhi Lamichhane</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/samriddhi-lamichhane-b193431b5/">Linkedin</Nav.Link>
                  <Nav.Link href="https://github.com/ssumri">Github</Nav.Link>
                  <Nav.Link href="#email">Email</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar> 
        </Container>
      </Navbar>
    </div>
  );
}


export default Header;

