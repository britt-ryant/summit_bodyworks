import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import '../App.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Carousel from './CarouselComponent'
import Classes from './Classes';
import Instructors from './Instructors';
import Scheduling from './Scheduling';
import Locations from './Locations';


import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import TrackVisibility from 'react-on-screen';
import Fade from 'react-reveal/Fade';

import imageOne from '../images/backgroundOne.png';
import imageTwo from '../images/backgroundTwo.png';
import imageThree from '../images/photoTwo.jpg';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  scrollToFuction(data) {
    switch (data) {
      case 'Carousel':
        scrollToComponent(this.Carousel, {
          offset: 0,
          align: 'top',
          duration: 1500,
        });
        break;
      case 'Instructors':
        scrollToComponent(this.Instructors, {
          offset: 0,
          aligh: 'top',
          duration: 1500,
        });
        break;
      case 'Classes':
        scrollToComponent(this.Classes, {
          offset: 0,
          aligh: 'top',
          duration: 1500,
        });
        break;
      default:
        scrollToComponent(this.Carousel, {
          offset: 0,
          align: 'top',
          duration: 1500,
        });
    }
  }

  render(){
    const insideStyles = {background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))', padding: 20, position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%,-50%)'};
    return(
      <div className="main_app_container">
            <div>
              <Parallax bgImage={imageOne}
                strength={500}>
                <div className='background-div' style={{height: '100vh'}}>
                  <div className="title-div">
                    <Fade>Summit Health & Body Works</Fade>
                  </div>
                  <div className="scroll-arrow">Scroll Down <br></br><i class="fa fa-angle-down" ></i></div>
                </div>
                <div className="title">
                <TrackVisibility offset={20}>
                 <Fade>Gallery</Fade>
                </TrackVisibility>
              </div>
              </Parallax>
              <div className="padding-div">
                <section className="Carousel" ref={(section) => {this.Carousel = section; }}><Carousel /></section>
              </div>
              <Parallax bgImage={imageTwo} strength={500}>
                <div className='background-div' style={{height: '100vh'}}>
                  <Classes />
                </div>
              </Parallax>
              <Instructors />
              <Parallax bgImage={imageThree} strength={500}>
                <div className='background-div' style={{height: '100vh'}}>
                  <Locations />
                </div>
              </Parallax>
            </div>
            {/* <div className="sections_container">
              <section className="Carousel" ref={(section) => {this.Carousel = section; }}><Carousel /></section>
              <section className="Instructors" ref={(section) => {this.Instructors = section; }}><Instructors /></section>
              <section className="Classes" ref={(seciton) => {this.Classes = seciton; }}><Classes /></section>
            </div> */}
      </div>
    );
  }
}

export default LandingPage;
