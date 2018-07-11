
import React, { Component } from 'react';
import pgimage from '../../img/land.jpg';
import {Link} from 'react-router-dom';
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
            <div className="animated fadeIn">

            <div style={{fontSize:'40px',color:'white',position:'relative',top:'3vh'}}>The Middeterian Biennale • הביאנלה הים תיכונית</div>
           </div>
            </div>
            </div>
   
        <div style={{position:'relative',top:'20vh'}}>
            <div className="row text-center ">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4  d-flex align-items-stretch">

            <div class="card text-center bg-light mb-3 mx-auto" style={{maxWidth: '18rem'}}>
            <div class="card-header">עברית</div>
            <div class="card-body">
              <h5 class="card-title">ברוך הבא</h5>
              <p class="card-text">לחצו כאן אם ברצונכם לראות את האתר בעברית</p>
            <p>       
            <Link to="/he"><button type="button" class="btn btn-outline-info btn-lg">הכנס</button></Link>
            </p>
              </div>
          </div>
            </div>
            <div style={{fontWeight:'bold'}} className="col-12 col-sm-12 col-md-4 col-lg-4 d-flex align-items-stretch">

            <div class="card text-center bg-light mb-3 mx-auto " style={{maxWidth: '18rem'}}>
            <div class="card-header">English</div>
            <div class="card-body">
              <h5 style={{fontWeight:'bold'}} class="card-title">Welcome</h5>
              <p class="card-text">Click here to view the site in English.</p>
            <p>       
            <Link to="/home"><button style={{fontWeight:'bold'}} type="button" class="btn btn-outline-info btn-lg">Enter</button></Link>
            </p>
              </div>
          </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4  d-flex align-items-stretch">

            <div class="card text-center bg-light mb-3 mx-auto" style={{maxWidth: '18rem'}}>
            <div class="card-header">عربى</div>
            <div class="card-body">
              <h5 class="card-title">أهلا بك</h5>
              <p class="card-text">انقر هنا إذا كنت ترغب في عرض باللغة العربية <br/><br/></p>
            <p>       
            <Link to="/ar"><button type="button" class="btn btn-outline-info btn-lg">أدخل</button></Link>
            </p>
              </div>
          </div>
            </div>
            </div>
            </div>
            {/*
            <Link exact to="/he" id="band"   className="btn btn-outline-secondary space btn-lg" style={{marginRight:'3vw',fontSize:'3vh'}} >עברית</Link>
            <Link exact to="/ar" id="releases"   className="btn btn-outline-secondary space btn-lg" style={{marginRight:'3vw',fontSize:'3vh'}} >أَلْعَرَبِيَّة</Link>
              */}
   
      </div>      








    </div>

      </div>


    );
  }
}

export default Intro;