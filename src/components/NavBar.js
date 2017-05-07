import React from 'react';
import { NavLink } from 'react-router-dom'

import '../App.css';
import logo from '../logo.svg';

const NavBar = (props) => {
  return(
    <div>
      <div className="App-header">
        <NavLink exact to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>
        <ul className="navbar">
          <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="selected" to="/contact">Contact</NavLink></li>
        </ul>
        <div className="clear"></div>
      </div>
    </div>
  )
}

export default NavBar;
