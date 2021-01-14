import React from 'react';
import './Navbar.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Online Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown className="login-dropdown" title="Login">
              <NavDropdown.Item href="/login/student">Student</NavDropdown.Item>
              <NavDropdown.Item href="/login/tutor">Tutor</NavDropdown.Item>
              <NavDropdown.Item href="/login/admin">Admin</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="register-dropdown" title="Registration">
              <NavDropdown.Item href="/register/student">
                Student
              </NavDropdown.Item>
              <NavDropdown.Item href="/register/tutor">Tutor</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
