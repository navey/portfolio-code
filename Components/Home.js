import React from 'react';

import '../App.css';
import '../naveyStyle.css';

import profile from '../Images/profile.jpg';

import github from '../Images/github.png';
import resume from '../Images/CS2022_NaveenanY.pdf';
import resume_pic from '../Images/resume.png';
import linkedin from '../Images/linkedin.png';
import hackerrank from '../Images/hackerrank.jpg';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.response = this.response.bind(this);
  }

  response() {
    document.getElementById("grievousPIC").style.display="block";
    document.getElementById("grievous").innerHTML = "<p class=\"response\">General Kenobi...</p>";
  }

  render(){
    return (
      <div>
          <body>
            <div className="main">

              <img src={profile} className='profile-pic' alt='Profile'/>
              <h1 className='home-name'>Naveenan Yogeswaran</h1>
              <h1 className='home-info'>naveenan.r.y@gmail.com</h1>
              
              <div>
                <a href="https://github.com/navey" target="_blank" rel="noopener noreferrer"><img src={github} className='home-pic' alt='Github'/></a>
                <a href={resume} target="_blank" rel="noopener noreferrer"><img src={resume_pic} className='home-pic' alt='resume'/></a>
                <a href="https://www.linkedin.com/in/naveenan-yogeswaran/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className='home-pic' alt='linkedin'/></a>
                <a href="https://www.hackerrank.com/naveenan_r_y" target="_blank" rel="noopener noreferrer"><img src={hackerrank} className='home-pic' alt='hackerrank'/></a>
              </div>

              <h1 className='home-info'>About Me</h1>
              <div className='home-intro'>
                Hi! I am a Computer Science student at Rutgers University. I've been programming since my senior year of high school
                and I have been interested in computers since eighth grade.
                When I'm not programming, I enjoy watching and discussing movies, cooking, playing board games and video games, and going for walks outside.
              </div>
  
            </div>
  
            <main>
              {this.props.children}
            </main>
  
          </body>
  
      </div>
    );
  }
}
export default Home;
