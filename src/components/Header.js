import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//css
import logo from '../css/logo.svg';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="top-bar">
          <div className="top-bar-left">
                <ul className="menu">
                    <li><img src={logo} className="App-logo" alt="logo" /></li>
                    <li className="menu-text">React - Valutni pokazivać </li>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/about' >About</Link></li>
                </ul>
          </div>
          <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Izradio: <a href="https://github.com/blevajac" target="_blank" rel="noopener noreferrer">Boris Levajac</a>
                    </li>
                </ul>
            </div>
      </div>
    );
  }
}

export default Header;
