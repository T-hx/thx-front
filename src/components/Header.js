import React, {Component} from "react";
import { withRouter } from "react-router";
import {API_ROOT} from "../constants";
import '../css/Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this)
  }
  
  handleSignOut() {
    fetch(`${API_ROOT}/auth/sign_out`, {
      method: 'DELETE',
      headers: JSON.parse(localStorage.user),
    })
      .then(() => {
        localStorage.removeItem('user');
        this.props.history.push('/login');
      })
  };
  
  render () {
    return (
      <nav className='header-nav'>
        <ul>
          <li>{JSON.parse(localStorage.getItem('user')).uid}</li>
          <li onClick={this.handleSignOut}>Sign out</li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Header)