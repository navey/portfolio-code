import React from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './naveyStyle.css';

import Navigation from './Components/Navigation'
import Home from './Components/Home';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Skills from './Components/Skills'
import ContactMe from './Components/ContactMe';

export default class App extends React.Component{
  render(){
    return (
      <HashRouter>
        <div>
            <Navigation />

            <div>
              <Route exact path='/' component={Home}/>
              <Route path='/education' component={Education}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/skills' component={Skills}/>
              <Route path='/experience' component={Experience}/>
              <Route path='/contactme' component={ContactMe}/>
            </div>
        </div>
      </HashRouter>
    );
  };
}

