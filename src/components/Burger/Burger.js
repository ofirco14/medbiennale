import { slide as   ReactMenu } from 'react-burger-menu';
import {NavLink} from 'react-router-dom';

import React, { Component } from 'react';


import './Burger.css';


class Burger extends Component {

  render() {

    return (
        <div>

        <ReactMenu  className="menu" width={'30vh'} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
  
        <NavLink activeStyle={{color: 'brown' , textDecoration: 'none' }}  exact to="/home" id="home"  className="paddnav menu-item"><i class="fas fa-home "  ></i> Home</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/amoca" id="amoca"   className="paddnav menu-item"><i class="fas fa-users"></i> AMOCA</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/about" id="about"   className="paddnav menu-item"><i class="fas fa-question"></i> About</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/curators" id="curators"   className="paddnav menu-item"><i class="fas fa-users"></i> Curators</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/gethere" id="gethere"   className="paddnav menu-item"><i class="fas fa-map-marker-alt"></i> Getting here</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/partners" id="partners"   className="paddnav menu-item"><i class="fas fa-handshake"></i> Partners</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/history" id="archive"   className="paddnav menu-item"><i class="fas fa-archive"></i> History</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/contact" id="contact"   className="paddnav menu-item"><i class="fas fa-headphones"></i> Contact</NavLink>
  </ReactMenu>
  </div>
    );
  }
}

export default Burger;