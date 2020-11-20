import React from 'react';

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
      <div>
          <Navigation />
          <Home />
          <Education />
          <Projects />
          <Skills />
          <Experience />
          <ContactMe />
      </div>
    );
  };
}

