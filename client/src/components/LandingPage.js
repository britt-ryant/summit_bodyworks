import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import '../App.css';

import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Carousel from './CarouselComponent'
import Classes from './Classes';
import Instructors from './Instructors';
import Scheduling from './Scheduling';

// import { Parallax } from 'react-scroll-parallax';
import randomImage from '../images/boat.jpg';
import {
  Parallax,
  Background
} from 'react-parallax';
import * as $ from 'jquery'


class LandingPage extends Component {
render(){
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };
  const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
  const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  const image2 = "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  return(
    <div style={styles}>
    <Carousel />
    <Parallax bgImage={image1}
      strength={500}>
      <div style={{height: '100vh'}}>
        
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image3} strength={500}>
      <div style={{height: '100vh'}}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image2} strength={500}>
      <div style={{height: '100vh'}}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
  </div>
  )
}
}

export default LandingPage;
