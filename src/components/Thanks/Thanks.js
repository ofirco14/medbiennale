
import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import  Navigation from '../Navigation/Navigation';

import './Thanks.css';



class Thanks extends Component {

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
    
        
          <h1 style={{textDecoration:'underline'}}>Thank you !

          </h1><br/>
         <h2>Your message has been sent successfully!</h2>
          </div>

          </div>
          </div>
          </div>


               {/*ABOUT COMPONENT*/}
    
      <div className="thankscopyright">
     <div className="row text-center">
     <div className="col-12 col-sm-12 col-md-12 col-lg-12">
     <hr style={{borderColor:'rgba(0,0,0,.2)' ,width:'80vw', height:'1px'}}/>

     <div style={{fontWeight:'bold'}} className="copyrights">
     Copyright © The Mediterranean Biennale 2018.<br/>
     Portrait Photography: Jonathan Bloom from the project "Open studio in Sakhnin"<br/>
     Developed by <a href="https://ofirthedev.github.io/"  rel="noopener noreferrer" target="_blank" style={{color:'#b8ad82'}}>Ofir Cohen</a>
     </div>

     </div>
     </div> 
     </div>
      {/*ABOUT COMPONENT*/} 
         


          </div>
          </div>
          
  
           
  
  
    );
  }
}

export default Thanks;