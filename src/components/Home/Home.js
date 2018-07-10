
import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import  Navigation from '../Navigation/Navigation';
import ImageGallery from 'react-image-gallery';
import ResponsiveEmbed from 'react-responsive-embed';

import './Home.css';
import {Link} from 'react-router-dom';

class Home extends Component {

  render() {


    let images1 = [];

    for (var x = 0; x <= 24; x++) {
      images1[x] = {original: require(`../../img/gallery/slide-${x+1}.jpg`)};
    }

    return (
      <div>
      <Navigation />
      <Burger/>
     <div className="container">
     <div className="alwaystop">
      <div className="row">

      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      
     <div className="text-center">
  
     <div className="animated fadeIn">
        <h1 style={{textDecoration:'underline'}}>The Mediterriane Biennale</h1><br/>
        </div>
        </div>
        </div>
        </div>

             <div className="row">

      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      
        <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>
        <div className="gallery">
        <br/>
        <ImageGallery
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
     
         items={images1} 
         />
         </div>
         </div>
         </div>
         <br/>
         <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>


         <div style={{fontWeight:'bold'}} className="row text-center">
         <div className="col-12 col-sm-12 col-md-12 col-lg-12">
         <h3>The 3rd Mediterranean Biennale in Sakhnin Valley</h3>
          <h4 style={{textDecoration:'underline'}}>OUT OF PLACE!</h4>
        <p>
        The Third Mediterranean Biennale offers an alternative 
        platform which emphasizes the local processes being 
        created in the region and enhances their cultural 
        impact by means of art directed toward the community,
         art that bridges cultures, emerges from the museum walls,
          integrates into the city and turns the city into a museum.

          The Mediterranean Biennale will serve as a venue
           for raising issues such as: How to restore art to 
           the public; what is the relevance of art in today's
            consumer society; and art as a bridge between cultures.
        </p>
        
      <Link to='/about'> Continue...</Link>
     
      
         </div>
         </div>

     
         <br/>
         <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>

     <div className="row">
     <div className="col-12 col-sm-12 col-md-6 col-lg-6">

   <ResponsiveEmbed 
   src='https://www.youtube.com/embed/wE3_Mt-AXUg'
    allowFullScreen
    ratio='16:9'
    />

     </div>
     <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{fontWeight:'bold'}}>
      <div>
     The Arab Museum of Contemporary Art in Sakhnin,
      AMOCA, is the first museum of its kind to be established
       in an Arab city in Israel. AMOCA holds a collection of 
       over 200 contemporary international works of art that 
       combine local contemporary art and international contemporar
       , showcasing artists from Arab and Mediterranean countries.
        The vision of AMOCA is to promote peace and dialogue by 
        means of art activities, mutual confidence building 
        between neighbors and a strengthening of the values of 
        equality and mutuality, leading towards the creation of 
        an infrastructure
      for human dialogue and coexistence between communities.<br/>
      <br/>
      <Link to='/amoca'> Continue...</Link>
     
      
      </div>
      </div>
     </div>
     <br/>
     <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>
     <div className="row">

     <div  style={{fontWeight:'bold'}} className="col-12 col-sm-8 col-md-8 col-lg-8 text-center align-self-center">
     <h3>
      Meet <Link to='/curators'>the  curators</Link> behind the scenes
      <br/>
      <a 
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/mediterranean.biennale">
      <i className="fab fa-facebook-square fa-2x"></i>
      </a>
      </h3>
     </div>
     <div  style={{fontWeight:'bold'}} className="col-12 col-sm-4 col-md-4 col-lg-4 text-center">
    

     <h3>
     <Link to='/contact'>Contact Us</Link>

     </h3>
<p>
Phone: 04-8235789<br/>

Mobile: 0544-235790<br/>

Mobile: 0547-505789<br/>

fainaru@012.net.il


</p>
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

export default Home;