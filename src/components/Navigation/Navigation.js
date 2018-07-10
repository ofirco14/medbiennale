
import React, { Component } from 'react';
import './Navigation.css';
import Burger from '../Burger/Burger';
import {NavLink} from 'react-router-dom';
class Navigation extends Component {

  state = {
    navColor: '#003C40',

  }

  listenScrollEvent = e => {
    if (window.scrollY > 200) {
      this.setState({navColor: '#FFF8FF'})
    } else {
      this.setState({navColor: '#003C40'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    window.addEventListener("resize", this.listenResizeEvent);

 
  }
  
  render() {

    return (

      <div>

      <Burger />
      <div id="navbarbg" style={{backgroundColor : this.state.navColor}} className=""> 
      <div className="">


				<div  className="" id="navbar">
       
        <div className="hover">
        <div className="container">
        <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <NavLink   className="paddnav1" exact to="/home"   activeStyle={{ color: '#b8ad82' , textDecoration: 'none'}}>Home</NavLink>
        <NavLink exact to="/amoca"   className="paddnav1" activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>Amoca</NavLink>
        <NavLink exact to="/about"    className="paddnav1" activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>About</NavLink>
        <NavLink exact to="/curators"    className="paddnav1" activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>Curators</NavLink>
        <NavLink   className="paddnav1" exact to="/where"   activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>Where?</NavLink>
        <NavLink exact to="/partners"   className="paddnav1" activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>Partners</NavLink>
        <NavLink exact to="/history"    className="paddnav1" activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>History</NavLink>
        <NavLink exact to="/contact"    className="paddnav1" activeStyle={{ color: '#b8ad82' , textDecoration: 'none' }}>Contact</NavLink>
        </div>
        </div>

        </div>

          </div>
            </div>
     
      </div>
        </div>
        </div>

    );
  }
}

export default Navigation;