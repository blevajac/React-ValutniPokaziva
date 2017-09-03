import React, { Component } from 'react';
import logo from '../css/logo.svg';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="app">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test za sada </h2>
        </div>
      </div>
    );
  }
}

export default Header;
