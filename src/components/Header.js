import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavbarBrand,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" bg="light">
        <Navbar.Brand href="#home">
          <img
            src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1608545327-do9hb4ayy1_d.png"
            alt=""
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar>
          <Nav className="mr-auto">
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Skin Care</NavDropdown.Item>
              <NavDropdown.Item href="#">Makeup</NavDropdown.Item>
              <NavDropdown.Item href="#">Fragrance</NavDropdown.Item>
              <NavDropdown.Item href="#">Personal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Best Deals</Nav.Link>
            <Nav.Link href="#">Protective Care</Nav.Link>
            <Nav.Link href="#">Hot Offers</Nav.Link>
            <Nav.Link href="#">Sasa Outlet</Nav.Link>
            <Nav.Link href="#">New Arrival</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar>
      </Navbar>
    </div>
  );
};

export default Header;
