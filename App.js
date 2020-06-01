import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import './App.css';
import './naveyStyle.css';

import Home from './Components/Home';
import Education from './Components/Education';
import Projects from './Components/Projects'

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
                <a><NavLink to="/skills">Skills</NavLink></a>
                <a><NavLink to="/experience">Experience</NavLink></a>
                <a><NavLink to="/projects">Projects</NavLink></a>
                <a><NavLink to="/education">Education</NavLink></a>
                <a><NavLink exact to="/">Home</NavLink></a>
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

