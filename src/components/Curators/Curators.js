
import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import  Navigation from '../Navigation/Navigation';
import './Curators.css';
import belu from '../../img/curators/belu.jpg';
import avital from '../../img/curators/avital.jpg';

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
    
       <div className="animated fadeIn">

          <h1 style={{textDecoration:'underline'}}>The Curators</h1><br/>
          </div>
          </div>
          <div className="row">
  
          <div style={{fontWeight:'bold'}} className="col-12 col-sm-12 col-md-7 col-lg-8">
         <h2> Belu-Simion Fainaru</h2>
          Artist, curator and initiator of the Mediterranean
           Biennale born in  1959 in Romania, Belu-Simion Fainaru
            lives and works in Haifa, Israel and Antwerpen, Belgium.
             He holds a B.A. degree in Art and Philosophy from Haifa
              University and a M.F.A. in Art and Design fromUniversity
               of Chicago, USA. Further studies include Domus Academy,
                Milan, Italy and the Bruxelles Royal Academy of Art,
                 Belgium.
          Fainaru‘s works were exhibited at the 1992 Documenta in Kassel,
           the 1993 Venice Biennale, the Sonsbeek, Biennale in 
           Holland and the 2006 Biennale in Havana, Cuba.
            Previous solo exhibitions include Israel Museum in
             Jerusalem, S.M.A.K. Museum in Ghent, M HKA in Antwerpen, 
             Lehmbruck Museum in Germany and Saitama Museum in Japan. 
             He is a guest lecturer at universities in Belgium and Japan,
              and has been teaching in the Department of Architecture at
               the Wizo Academy, Haifa, Israel since 1984. In 2008 he
                initiated the Mediterranean Biennale and since 2010 
                Belu-Simion Fainaru has been the artistic director 
                and curator 
          of the Mediterranean Biennale of Contemporary Art, Israel.
        
        
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-4 align-self-center text-center">
          <br/>

          <img alt="" src={belu} />
        
          </div>
          </div>
          <br/>
          <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>
        <br/>
          <div className="row">
  
          <div style={{fontWeight:'bold'}} className="col-12 col-sm-12 col-md-7 col-lg-8">
          <h2>Avital Bar-Shay</h2> 
          Artist, designer, architect and  initiator of  the Mediterranean Biennale was born in 1966 in Israel.  She lives and  work in Israel. Bar-shay holds an B.Arch degree and B.A in Fine art.
          
          Bar-shay exhibited in Israel and abroad, 
          she has vast experience in Public space projects
            and works as a cultural entrepreneur over six years.
             She specializes in artistic activity in the periphery. 
             In 2008 she initiated the Mediterranean Biennale and
              since 2010 Avital Bar-shay has been the curator and 
              the art producer of 
          the Mediterranean Biennale of Contemporary Art, Israel.
        
        
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-4 align-self-center text-center">
          <br/>

          <img alt="" src={avital} />
        
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
          </div>
          </div>
          
  
           
  
  
    );
  }
}

export default Curators;