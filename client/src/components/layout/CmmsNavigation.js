import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//componenets
import EqpScope from "../Configuration/Equipment/EqpScope"

export default function CmmsNavigation() {
    return (
        <Router>
            <Navbar expand="lg" bg="light">
                <Container>
                    <Navbar.Brand href="#home">CMMS-OXO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#workOrder">Work Order</Nav.Link>
                        <Nav.Link href="#PM & PdM">PM & PdM</Nav.Link>
                        <Nav.Link href="#reporting">Reporting</Nav.Link>
                        <NavDropdown title="Configuration" id="basic-nav-dropdown">
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
                                <NavDropdown.Item href="/eqpScope">Scope</NavDropdown.Item>
                                <NavDropdown.Item href="#category">Category</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#tagnumber">Tagnumber</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#file">From File</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#help">Help</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/eqpScope">
                    <EqpScope />
                </Route>
            </Switch>
        </Router>
    )
}


