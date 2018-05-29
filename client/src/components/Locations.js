import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import TrackVisibility from 'react-on-screen';



class Locations extends Component{
  constructor(){
    super();
  }
  renderFade(){
    return(
      <div className="locations-div">
        <Fade>
          <h1>Locations</h1>
          <h2>Summit</h2>
          <p>1234 Summit St. Summit, NJ 07901</p>
          <p>Phone: (908) 403-1694</p>
          <p>Email: Neile@gmail.com</p>
        </Fade>
      </div>
    )
  }
  render(){
    return(
      <div className="content-div">
        <TrackVisibility>
          {this.renderFade()}
        </TrackVisibility>
      </div>
    )
  }
}


export default Locations;
