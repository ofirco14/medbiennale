
import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import  Navigation from '../Navigation/Navigation';
import ImageGallery from 'react-image-gallery';

import './Home.css';


class Home extends Component {

  render() {
    let images1 = [];

    for (var x = 0; x <= 24; x++) {
      images1[x] = {original: require(`../../img/gallery/slide-${x+1}.jpg`)};
    }
  
console.log(images1);
    return (
      
     <div>
     <Navigation/>

     
     <Burger/>
     <main id="page-wrap">
      <div className="container">
      <div className="row">

      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      
     <div className="introduce text-center">
  

        <h1>The Mediterriane Biennale</h1><br/>
        <h3>The 3rd Mediterranean Biennale in Sakhnin Valley - OUT OF PLACE!</h3>
      
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
     </div>
     </div>
        </main>

     </div>


    );
  }
}

export default Home;