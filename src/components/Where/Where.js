
import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import  Navigation from '../Navigation/Navigation';
import  Map from '../Map/Map';

import './Where.css';


class About extends Component {

  render() {


    return (
      <div>
      <Navigation/>
      <Burger/>
     <div className="container">
     <div className="alwaystop">
      <div className="row">

      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      
     <div className="text-center">
  
     <div className="animated fadeIn">

        <h1 style={{textDecoration:'underline'}}>Where its happening</h1><br/>
        </div>
        </div>
      </div>
      </div>
      <div className="row text-center">

      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div style={{height:'100vh'}}>
      <Map/>
      </div>
      </div>
      </div>
      <br/>
      <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>
   
      <div className="row">

      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      
     <div className="text-center">
  

        <h1 style={{textDecoration:'underline'}}>Brussels Airlines promotional rates</h1><br/>
        </div>
      </div>
      </div>
      <div className="row ">
      <div style={{fontWeight:'bold'}} className="col-12 col-sm-12 col-md-12 col-lg-12">
      <h3>Get up to 15% discount on Brussels Airlines flights
       to Tel Aviv  from Europe with promo code- 
       11119393</h3>
 
<p>To claim your discount, please use the promo code when
 booking your flights online at 
 <a href="http://www.brusselsairlines.com" rel="noopener noreferrer" target="_blank">Brussels Airlines
 </a><br/>
All visitors and participants may go to our web
 site and book tickets with this code and receive 
 15% discount.<br/>
Discount on the price excludes taxes and supplements. 
This offer is valid on all bookings made between now and
 28Feb 2013, for all  returns trips from Europe to Tel Aviv 
 via Brussels between 10 April till 20 May 2013, only on 
 flights operated by Brussels Airlines, not including any
  code share partners.</p>
 
<p>How to use your promotion code?</p>
 
<p>At <a href="http://www.brusselsairlines.com" rel="noopener noreferrer" target="_blank">Brussels Airlines</a> 
simply fill in your airport of departure and your destination
 in the red panel on the left, tick the box 
 "I have a promocode" and fill in the relevant promocode
  displayed above.<br/>
Click BOOK NOW and proceed with your reservation.
 You will receive a routing and price proposal including
  discount. Payment  by credit card only.</p>
</div>
</div>
        <br/>
             {/*ABOUT COMPONENT*/}
   <div className="row text-center">
   <div className="col">
   <br/>
   <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>

   <div style={{fontWeight:'bold'}} className="copyrights">
   Copyright © The Mediterranean Biennale 2018.<br/>
   Portrait Photography: Jonathan Bloom from the project "Open studio in Sakhnin"<br/>
   Developed by <a href="https://ofirthedev.github.io/"  rel="noopener noreferrer" target="_blank" style={{color:'#b8ad82'}}>Ofir Cohen</a>
   </div>

   </div>
   </div> 
    {/*ABOUT COMPONENT*/} 
      

        </div>
        </div>
        </div>

    );
  }
}

export default About;