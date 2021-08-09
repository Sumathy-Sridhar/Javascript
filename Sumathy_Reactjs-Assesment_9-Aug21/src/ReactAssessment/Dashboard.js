import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Dashboard() {
    return (
        <div>
        <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/landing">User Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/create">Create Account</Nav.Link>              
            <Nav.Link href="/viewdata">View Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}
