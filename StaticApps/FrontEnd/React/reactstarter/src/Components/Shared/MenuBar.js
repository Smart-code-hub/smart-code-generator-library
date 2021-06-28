
    
    import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function MenuBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
           <Nav.Link href='/employee'>Employee</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
