import React, { Component } from 'react';
import Intro from './components/Intro/Intro';
import  Home from './components/Home/Home';

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
     <Router>

     <div>

     
     {/*
  
      <Route exact path="/amoca" component={Amoca}  />
      <Route exact path="/about" component={About}  />
      <Route exact path="/curators" component={Curators}  />
      <Route exact path="/gettinghere" component={GettingHere}  />
      <Route exact path="/partners" component={Partners}  />
      <Route exact path="/archive" component={Archive}  />
      <Route exact path="/contact" component={Contact}  />
     */}

     
      <Route exact path="/" component={Intro}  />
      <Route exact path="/home" component={Home}  />
      </div>
      </Router>

  </div>
     
    );
  }
}

export default App;
