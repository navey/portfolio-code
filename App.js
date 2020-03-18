import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import './App.css';
import './naveyStyle.css';

import Home from './Home';
import Education from './Education';
import Projects from './Projects'

export default class App extends React.Component{
  render(){
    return (
      <HashRouter>
        <div>
            <div className="header">
              <div className="name">
                Naveenan Yogeswaran
              </div>
  
              <div className="navigate">
                <a><NavLink to="/contact">Contact Me</NavLink></a>
                <a><NavLink to="/skills">Skills</NavLink></a>
                <a><NavLink to="/projects">Projects</NavLink></a>
                <a><NavLink to="/experience">Experience</NavLink></a>
                <a><NavLink to="/education">Education</NavLink></a>
                <a><NavLink to="/">Home</NavLink></a>
              </div> 
            </div>
            <div>
              <Route exact path='/' component={Home}/>
              <Route path='/education' component={Education}/>
              <Route path='/projects' component={Projects}/>
            </div>
        </div>
      </HashRouter>
    );
  };
}

