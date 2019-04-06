import React, {Component} from "react";
import { withRouter } from "react-router";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {API_ROOT} from "../constants";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this)
  }
  
  handleSignOut(event) {
    fetch(`${API_ROOT}/auth/sign_out`, {
      method: 'DELETE',
      headers: JSON.parse(localStorage.user),
    })
      .then((res) => {
        localStorage.removeItem('user');
        this.props.history.push('/login');
      })
  };
  
  render () {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">{JSON.parse(localStorage.getItem('user')).uid}</NavDropdown.Item>
                <NavDropdown.Item eventKey={2} href="#" onClick={this.handleSignOut}>Sign out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(Header)