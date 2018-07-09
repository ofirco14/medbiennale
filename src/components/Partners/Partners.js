
import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import  Navigation from '../Navigation/Navigation';
import './Partners.css';

class Curators extends Component {

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
    
  
          <h1 style={{textDecoration:'underline'}}>The biennale's partners</h1><br/>
          
          </div>
         
          </div>
          </div>
          <div style={{fontWeight:'bold'}} className="row text-center">
  
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        
            <p style={{textDecoration:'underline'}}>Main partner:</p>
            
            <img src= {require('../../img/partners/pais.png')}/>
          </div>
          </div>
          <div className="row text-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
         
          </div>
          </div>
          <br/>
          <div style={{fontWeight:'bold'}} className="row text-center">
  
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        
            <p style={{textDecoration:'underline'}}>partner:</p>
            
            <img src= {require('../../img/partners/haaretz.png')}/>
          </div>
          </div>
          <div style={{fontWeight:'bold'}} className="row text-center">
  
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        
            <p style={{textDecoration:'underline'}}>Ministries:</p>
            
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/galil.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/negev-galil.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/sports-culture.png')}/>
            
          </div>
          
          </div>
        <br/>
          <div style={{fontWeight:'bold'}} className="row text-center">
  
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        
            <p style={{textDecoration:'underline'}}>Embassies and Culture Price::</p>
            
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/prohelvetia.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/portugal.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/switzerland.png')}/>
            
          </div>
          </div>
          <br/>
          <div style={{fontWeight:'bold'}} className="row text-center">

          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/cinemateca.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/camoes.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/austrian-cultural-forum.png')}/>
            
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <br/>

          <img src= {require('../../img/partners/goethe.png')}/>
            
          </div>
          </div>
        <br/>
          <div style={{fontWeight:'bold'}} className="row text-center">
  
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        
            <p style={{textDecoration:'underline'}}>Saknin:</p>
            
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/araba.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/sakhnin.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/dir-hana.png')}/>
            
          </div>

          </div>

        
        
          <br/>
          <div style={{fontWeight:'bold'}} className="row text-center">
  
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        
            <p style={{textDecoration:'underline'}}>Personal partners:</p>
            
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/frac.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/gesher.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        
          <img src= {require('../../img/partners/green.png')}/>
            
          </div>

          </div>
        <br/>
          <div style={{fontWeight:'bold'}} className="row text-center">
  
     

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
        
          <img src= {require('../../img/partners/ohel.png')}/>
            
          </div>
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">        
          <img src= {require('../../img/partners/first-course.png')}/>
            
          </div>
          </div>


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

export default Curators;