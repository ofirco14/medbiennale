
import React, { Component } from 'react';
import pgimage from '../../img/land.jpg';
import {
  BrowserRouter as
  Route,
  Link
} from 'react-router-dom';
import './Intro.css';


let pgimagestyle = {
  backgroundImage: `url(${pgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  
}
let overlay = {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
}

class Intro extends Component {

  render() {

    return (
      
      <div className="trns" style={pgimagestyle}>
      <div style={overlay}>
      <div className="container">
      <div className="row justify-content-center">
            <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">

            <div style={{fontSize:'5vh',color:'white',position:'relative',top:'3vh'}}>The Middeterian Biennale • הביאנלה הים תיכונית</div>
            </div>
            </div>
   

            <div className="row  ">
            <div className="col ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">

            <div className="middle">
            <div className="space">
            <Link  id="home"  className="btn btn-outline-secondary space btn-lg" exact to="/home"  style={{marginRight:'3vw',fontSize:'3vh'}}>English</Link>
            <Link exact to="/he" id="band"   className="btn btn-outline-secondary space btn-lg" style={{marginRight:'3vw',fontSize:'3vh'}} >עברית</Link>
            <Link exact to="/ar" id="releases"   className="btn btn-outline-secondary space btn-lg" style={{marginRight:'3vw',fontSize:'3vh'}} >أَلْعَرَبِيَّة</Link>
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

export default Intro;