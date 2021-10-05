import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function TopNavigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">CMMS - OXO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#workOrder">Work Order</Nav.Link>
                        <Nav.Link href="#PM & PdM">PM & PdM</Nav.Link>
                        <Nav.Link href="#config">Configuration</Nav.Link>
                        <Nav.Link href="#help">Help</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
