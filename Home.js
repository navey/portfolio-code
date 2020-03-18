import React from 'react';

import './App.css';
import './naveyStyle.css';

import grievous from './Images/grievous.jpg';

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
  
              <h1 className="intro">
                  *Suspenseful Music*
              </h1>
  
              <p>
                <button className="quote" onClick={this.response}>
                  Hello there
                </button>
              </p>
  
              <img className="center" id="grievousPIC" src={grievous} style={{display:'none'}}/>
              <h1 className="response" id="grievous"></h1>
  
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
