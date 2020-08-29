import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./menustyles.css";
const Menu = () => {
  return (
    <div className="menu fixed-top">
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">CatsPage</Navbar.Brand>
        <Navbar.Toggle aria-controls="hamburger" />
        <Navbar.Collapse id="hamburger">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mainecoon">Maine Coon</Nav.Link>
            <Nav.Link href="/ragdoll">Ragdoll</Nav.Link>
            <Nav.Link href="/scottishfold">Scottish Fold</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
