import React, { Component } from 'react';
import  Home from './components/Home/Home';
import  Curators from './components/Curators/Curators';
import  Amoca from './components/Amoca/Amoca';
import  About from './components/About/About';
import  Partners from './components/Partners/Partners';
import  Where from './components/Where/Where';
import  Contact from './components/Contact/Contact';
import  Thanks from './components/Thanks/Thanks';
import  ScrollToTopAfterLink from './components/ScrollToTopAfterLink/ScrollToTopAfterLink';
import  NotFound from './components/NotFound/NotFound';


import ScrollToTop from 'react-scroll-up';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from 'react-router-dom';



class App extends Component {
  
  render() {
    return (
      <div>
      <ScrollToTop style={{zIndex:'9999'}} showUnder={160} duration={1000}>
      <span><i class="far fa-arrow-alt-circle-up fa-3x"></i></span>
    </ScrollToTop>
     <Router >
     <ScrollToTopAfterLink>

     <div>
     <Switch>

      <Route exact path="/thanks" component={Thanks}  />
      <Route exact path="/contact" component={Contact}  />
      <Route exact path="/where" component={Where}  />
      <Route exact path="/partners" component={Partners}  />
      <Route exact path="/about" component={About}  />
      <Route exact path="/curators" component={Curators}  />
      <Route exact path="/amoca" component={Amoca}  />
      <Route exact path="/" component={Home}  />
      <Route component={NotFound}  />

      </Switch>

      </div>
      </ScrollToTopAfterLink>

      </Router>
  </div>
     
    );
  }
}

export default App;
