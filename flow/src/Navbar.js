import React, { Component } from 'react';
import logo from './assets/images/logo-light.png';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav class="navbar">
        <div class="logo-wrapper">
          <img class="logo" src={logo} alt="Flow"/>
        </div>
      </nav>
    );
  }
}

export default Navbar;