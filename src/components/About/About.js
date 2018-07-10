
import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import  Navigation from '../Navigation/Navigation';
import './About.css';


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

        <h1 style={{textDecoration:'underline'}}>About the biennale</h1><br/>
        </div>
        </div>
      </div>
      </div>
      <div className="row">

      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      <h3 style={{fontWeight:'bold'}}>The Mediterranean Biennale</h3>

      <p style={{fontWeight:'bold'}}>
      <p>
        The Third Mediterranean Biennale offers an alternative platform which emphasizes the local processes being created in the region and enhances their cultural impact by means of art directed toward the community, art that bridges cultures, emerges from the museum walls, integrates into the city and turns the city into a museum. 
      </p>
      <p>
        The Mediterranean Biennale will serve as a venue for raising issues such as: How to restore art to the public; what is the relevance of art in today's consumer society; and art as a bridge between cultures. 
      </p>
      <p>
        The Mediterranean Biennale aims to bring a new approach to the region by means of artistic activities in the hope of creating the basis for a dialogue between people and coexistence between communities living in conflict as well as promoting education for peace, tolerance and non-violence through cooperation based on equality and reciprocity. The Biennale aims to restore mutual trust, to bridge gaps in the perception of the other and encourage diversity and coexistence in order to create an environment where individuals and groups of diverse religion and ethnicity share common values and coexist peacefully. 
      </p>
      <p>
        This Mediterranean Biennale becomes a regional biennale held in the Sakhnin Valley, in Israel in the communities of Misgav, Sakhnin, Arraba and Deir Hanna, and creating a course of various places, people and congregations that are exposed to the general public by means of art while instigating a platform for dialogue. Widening the Biennale creates a channel for cooperation between communities living in the area under the concept of a face-to-face rather than a back-to-back situation.
      </p>
      <p>
        The Mediterranean Biennale will take place under the title of: Out of Place. The exhibition Out of Place relates to issues of identity, place, time and individualty in an era of global culture while critically addressing the topics of place, local identity and culture in view of the changes occurring today. The exhibition Out of Place aims to establish a dialogue between people and create a place where everyone can have their say in a discussion where there are no winners or losers. The exhibition reminds us that we are not independent of the manner in which the present refugee crisis is developing: we are part of the crisis but we are also part of its possible solution. The nature of the exhibition Out of Place can be one that highlights disillusionment and hopelessness, or on the contrary one that opens up possibilities of acting against current incitement by means of solidarity, common ideals and sense of community.
      </p>
      </p>
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