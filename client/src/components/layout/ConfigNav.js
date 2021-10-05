import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function ConfigNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="flex-column">
                        <NavDropdown title="Organization" id="nav-dropdown">
                            <NavDropdown.Item href="#department">Department</NavDropdown.Item>
                            <NavDropdown.Item href="#section">Section</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#user">User</NavDropdown.Item>
                            <NavDropdown.Item href="#flow">Flow</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Plant" id="nav-dropdown">
                            <NavDropdown.Item href="#name">Name</NavDropdown.Item>
                            <NavDropdown.Item href="#unit">Unit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#package">Package</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Equipment" id="nav-dropdown">
                            <NavDropdown.Item href="#scope">Scope</NavDropdown.Item>
                            <NavDropdown.Item href="#category">Category</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#tagnumber">Tagnumber</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>       
    )
}
