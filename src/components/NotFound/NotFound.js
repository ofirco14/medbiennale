
import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import  Navigation from '../Navigation/Navigation';
import './NotFound.css';



class NotFound extends Component {

  render() {


    return (

        <div style={{position:'relative',top:'10vh',fontWeight:'bold'}}>
        <h1>Oppppssss...</h1>
<p class="zoom-area"><b>Sorry!</b> page not found! </p>
<section class="error-container">
  <span>4</span>
  <span><span class="screen-reader-text">0</span></span>
  <span>4</span>
</section>
<div class="link-container">
  <a  href="http://localhost:3000/" class="more-link">Visit Home!</a>
</div>
        
        </div>
    );
  }
}

export default NotFound;