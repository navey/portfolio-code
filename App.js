import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './naveyStyle.css';

import Home from './Components/Home';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Skills from './Components/Skills'
import ContactMe from './Components/ContactMe';

export default class App extends React.Component{
  render(){
    return (
      <HashRouter>
        <div>
            <div className="header">
              <div className="first-name">
                Naveenan
              </div>
              <div className='last-name'>
                Yogeswaran
              </div>
  
              <div className="navigate">
                <NavLink to="/contactme">Contact Me</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink exact to="/">Home</NavLink>
              </div> 
            </div>

            <div>
              <Route exact path='/' component={Home}/>
              <Route path='/education' component={Education}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/skills' component={Skills}/>
              <Route path='/contactme' component={ContactMe}/>
            </div>
        </div>
      </HashRouter>
    );
  };
}

