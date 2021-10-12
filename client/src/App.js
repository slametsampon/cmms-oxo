import React, { Fragment } from "react";
import "./App.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//componenets
import ConfigNav from "./components/layout/ConfigNav";
import EqpScope from "./components/Configuration/Equipment/EqpScope"
import ConfigItems from "./components/Configuration/FromFile/ConfigItems";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Router>
            <Navbar expand="lg" bg="light">
                <Navbar.Brand href="/">CMMS-OXO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#workOrder">Work Order</Nav.Link>
                    <Nav.Link href="#PM & PdM">PM & PdM</Nav.Link>
                    <Nav.Link href="#reporting">Reporting</Nav.Link>
                    <ConfigNav />
                    <Nav.Link href="#help">Help</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    It's Home CMMS - OXO
                </Route>
                <Route exact path="/eqpScope">
                    <EqpScope />
                </Route>
                <Route exact path="/file">
                    <ConfigItems />
                </Route>
            </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
