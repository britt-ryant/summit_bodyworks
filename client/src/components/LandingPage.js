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
import { Parallax } from 'react-parallax';

import imageOne from '../images/backgroundOne.png';
import imageTwo from '../images/backgroundTwo.png';
import imageThree from '../images/photoTwo.jpg';


class LandingPage extends Component {
  constructor(props){
    super(props);
  }
  scrollToFuction(data){
    switch(data) {
      case "Carousel":
      scrollToComponent(this.Carousel, { offset: 0, align: 'top', duration: 1500})
        break;
      case "Instructors":
      scrollToComponent(this.Instructors, {offset: 0, aligh: 'top', duration: 1500})
        break;
      case "Classes":
      scrollToComponent(this.Classes, {offset: 0, aligh: 'top', duration: 1500})
        break;
      default:
      scrollToComponent(this.Carousel, { offset: 0, align: 'top', duration: 1500})
    }
  }

  render(){
    const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
    return(
      <div className="main_app_container">
            {/* <nav> */}
              {/* <ul> */}
                {/* <li><button className="nav_button" onClick={() => this.scrollToFuction("Carousel")}>Top</button></li> */}
                {/* <li><button className="nav_button" onClick={() => this.scrollToFuction("Instructors")}>Instructors</button></li> */}
                {/* <li><button className="nav_button" onClick={() => this.scrollToFuction("Classes")}>Classes</button></li> */}
                {/* <Link to="/scheduling">Scheduling</Link> */}
              {/* </ul> */}
            {/* </nav> */}
            <div>
              <Parallax bgImage={imageOne}
                strength={500}>
                <div className='background-div' style={{height: '100vh'}}>
                  <div style={insideStyles}>HTML inside the parallax</div>
                </div>
              </Parallax>
              <div className="padding-div">
                <Carousel />
              </div>
              <Parallax bgImage={imageTwo} strength={500}>
                <div className='background-div' style={{height: '100vh'}}>
                  <div style={insideStyles}>Dynamic Blur</div>
                </div>
              </Parallax>
              <h1>| | |</h1>
              <Parallax bgImage={imageThree} strength={500}>
                <div className='background-div' style={{height: '100vh'}}>
                  <div style={insideStyles}>Reverse direction</div>
                </div>
              </Parallax>
            </div>
            {/* <div className="sections_container">
              <section className="Carousel" ref={(section) => {this.Carousel = section; }}><Carousel /></section>
              <section className="Instructors" ref={(section) => {this.Instructors = section; }}><Instructors /></section>
              <section className="Classes" ref={(seciton) => {this.Classes = seciton; }}><Classes /></section>
            </div> */}
      </div>
    )
  }
}

export default LandingPage;
