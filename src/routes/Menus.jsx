import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Menus() {
  const { REACT_APP_NAME } = process.env;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="#home" color="light">
          <h4 className="fw-bold">
            {REACT_APP_NAME} <span className="fw-light">Jobs</span>
          </h4>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Menus;
