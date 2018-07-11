import { slide as   ReactMenu } from 'react-burger-menu';
import {NavLink} from 'react-router-dom';

import React, { Component } from 'react';


import './Burger.css';


class Burger extends Component {
  state = {
    menuOpen: false

  }
  closeMenu () {
    this.setState({menuOpen: false})
  }

  listenResizeEvent = e =>{
    const mq = window.matchMedia( "(min-width: 768px)" );
    if (mq.matches) {
      //desktop version - menu should be closed
      this.closeMenu();
    } else {
      //mobile version - nothing should happen
    }

  }
  componentDidMount() {
    window.addEventListener("resize", this.listenResizeEvent);

 
  }
  render() {

    return (
        <div >

        <ReactMenu isOpen={this.state.menuOpen}  className="menu" width={'200px'} >
  
        <NavLink activeStyle={{color: 'brown' , textDecoration: 'none' }}  exact to="/" id="home"  className="paddnav menu-item"><i className="fas fa-home "  ></i> Home</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/amoca" id="amoca"   className="paddnav menu-item"><i className="fas fa-users"></i> AMOCA</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/about" id="about"   className="paddnav menu-item"><i className="fas fa-question"></i> About</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/curators" id="curators"   className="paddnav menu-item"><i className="fas fa-users"></i> Curators</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/where" id="gethere"   className="paddnav menu-item"><i className="fas fa-map-marker-alt"></i> Where?</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/partners" id="partners"   className="paddnav menu-item"><i className="fas fa-handshake"></i> Partners</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/history" id="archive"   className="paddnav menu-item"><i className="fas fa-archive"></i> History</NavLink>
        <NavLink activeStyle={{ color: 'brown' , textDecoration: 'none' }} exact to="/contact" id="contact"   className="paddnav menu-item"><i className="fas fa-headphones"></i> Contact</NavLink>
  </ReactMenu>
  </div>
    );
  }
}

export default Burger;