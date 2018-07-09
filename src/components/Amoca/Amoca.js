
import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import  Navigation from '../Navigation/Navigation';
import './Amoca.css';
import ImageGallery from 'react-image-gallery';
import {Link} from 'react-router-dom';


class Amoca extends Component {

  render() {

    let images1 = [];

    for (var x = 0; x <= 5; x++) {
      images1[x] = {original: require(`../../img/amoca/e0${x+1}.jpg`)};
    }

    return (
        <div>
        <Navigation/>
        <Burger/>
       <div className="container">
       <div className="alwaystop">
        <div className="row">
  
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        
       <div className="text-center">
    
    
          <h1 style={{textDecoration:'underline'}}>The Arab Museum of Contemporary Art
          </h1><br/>
       <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>
          <ImageGallery
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
       
           items={images1} 
           />
           <br/>
           <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>
          </div>
          </div>
          </div>
          <div className="row text-left">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <h3 style={{fontWeight:'bold',textDecoration:'underline'}}>Opening Wed, June 17th, 2015 at 17:00</h3>
          <p style={{fontWeight:'bold'}}>
         

          <p>The Arab Museum of Contemporary Art in Sakhnin, AMOCA, is the first museum of its kind to be established in an Arab city in Israel. AMOCA holds a collection of over 200 contemporary international works of art that combine local contemporary art and international contemporary art, showcasing artists from Arab and Mediterranean countries.  The vision of AMOCA is to promote peace and dialogue by means of art activities, mutual confidence building between neighbors and a strengthening of the values of equality and mutuality, leading towards the creation of an infrastructure for human dialogue and coexistence between communities.</p>
      
          <p>The opening exhibition of AMOCA is titled HIWAR. The word “HIWAR” in Arabic has two main definitions: either to describe a calm conversation between two or more people, or (especially in a political or conflict context) to describe a process by which two or more parties engage in a conversation that is calm and free from animosity with the aim of reaching an agreement on a certain issue. These two definitions are exactly the same ones found in dictionaries to define the English word Dialogue. “HIWAR” dialogue is a process that allows people, usually in small groups, to share their perspectives and experiences with one another about difficult issues. “HIWAR”, dialogue is not about winning an argument or coming to an agreement but about understanding and learning. Dialogue can lead to both personal and collaborative action. “HIWAR” dialogue is a spiritual, transformative journey of understanding the other. </p>
      
          <p>AMOCA, the Arab Museum of Contemporary Art and Heritage, Sakhnin, is presently hosted in the Bet Netufa Association of Cities – Environmental Center. The aim of AMOCA is to enhance the dimension of mobility, to expose the works of art of the local and the world's best artists to people in various regions of the Galilee and the periphery, and to stay in places that are not normally exposed to contemporary art exhibitions. AMOCA, the Arab Museum of Contemporary Art, opens its gates in Sakhnin with the aim of making contemporary art accessible to the Arab and Jewish population living in the region through the display of art in direct contact with the people and in co-operation with them, art that creates contacts in the local and international dimensions. The vision of AMOCA is to create dialogue, meeting and co-operation between Jews and Arabs by means of contemporary art in change-generating projects with the aim of creating a platform for building mutual trust and resolution of disputes in alternative ways. In a likewise outlook, initiated by the Director General of the Association of Cities and the Sakhnin Municipality, a center for conflict resolution and management, "Beyt al-Sulh", has been set up in the place in order to enable a dialogue and to arrive at solutions and agreements between the sides. This incorporation of AMOCA, the Arab Museum of Contemporary Art, with the Conflict Settlement Center is an expression of the desire to create co-operative activity based on the need to accept the other while increasing awareness of alternative approaches to dialogue and agreement.</p>
        </p>
        
        <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>
        <h3 style={{textDecoration:'underline'}}>Artists</h3>

        <p style={{fontWeight:'bold'}}>
        Marina Abramović, Larry Abramson, Anna Andres, Abir Athalla, Asad Azi, Mahmud Badarnah, Avital Bar-Shay, Raed Bawayah,  Bejeranu Matei   , Nathalie Mba Bikoro, Bashir Borlakov, Daniel Buren, Thorsten Brinkmann, Barbara Eichhorn, Mounir Fatmi
    
    Belu-Simion Fainaru, Mekhitar Garabedian, Jeanno Gaussi, Moshe Gershuni, Maïmouna Patrizia Guerresi, Rawan Ismail, Nidal Jabarin, Huda Jamal, Menashe Kadishman, Muhammad Said Kallash, Dani Karavan, Jannis Kounellis, Mehdi-Georges Lahlou, Almagul Menlibayeva
    
    Bohtaina Abu Milhem, Ciprian Muresan, Shirin Neshat, Herman Nitsch, Zohdy Qadry, Anahita Razmi, Valentin Ruhry, Angelika Sher, Eva Shlegel, Sengiz Tekin, Jesica Vaturi, Maria Vedder, Johannes Vogl, Micha Ullman, David Wakstain, Runi  Zarawi.
    
    </p>
    
          </div>
          </div>
          <hr style={{borderColor:'rgba(0,0,0,.2)' , height:'1px'}}/>

          <div className="row">

          <div  style={{fontWeight:'bold'}} className="col-12 col-sm-6 col-md-6 col-lg-6 text-center">
          <br/>

          <h3>
          Opening Hours
          <br/>
          </h3>

          Sun-Thu 10:00-16:00<br/>

During Ramadan 18/6-20/7 : <br/> Sun-Thu 10:00-14:00
          </div>
          <div  style={{fontWeight:'bold'}} className="col-12 col-sm-6 col-md-6 col-lg-6 text-center">
         
          <br/>

          <h3>
          <Link to='/curators'>Contact Us</Link>
     
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

export default Amoca;