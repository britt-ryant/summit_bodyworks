import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import '../App.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

<<<<<<< HEAD
import Carousel from './Carousel';
=======
import Carousel from './CarouselComponent'
>>>>>>> dbcfa938feb40989d78d00853ba3c02db84c7198
import Classes from './Classes';
import Instructors from './Instructors';
import Scheduling from './Scheduling';
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

<<<<<<< HEAD
  render() {
    return (
      <div className="main_app_container">
        <nav>
          <ul>
            <li>
              <button
                className="nav_button"
                onClick={() => this.scrollToFuction('Carousel')}
              >
                Top
              </button>
            </li>
            <li>
              <button
                className="nav_button"
                onClick={() => this.scrollToFuction('Instructors')}
              >
                Instructors
              </button>
            </li>
            <li>
              <button
                className="nav_button"
                onClick={() => this.scrollToFuction('Classes')}
              >
                Classes
              </button>
            </li>
            {/* <Link to="/scheduling">Scheduling</Link> */}
          </ul>
        </nav>
        <div className="sections_container">
          <section
            className="Carousel"
            ref={section => {
              this.Carousel = section;
            }}
          >
            <Carousel />
          </section>
          <section
            className="Instructors"
            ref={section => {
              this.Instructors = section;
            }}
          >
            <Instructors />
          </section>
          <section
            className="Classes"
            ref={seciton => {
              this.Classes = seciton;
            }}
          >
            <Classes />
          </section>
        </div>
=======
  render(){
    const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
    return(
      <div className="main_app_container">
            <div>
              <Parallax bgImage={imageOne}
                strength={500}>
                {/* <nav>
                  <ul>
                    <li><button className="nav_button" onClick={() => this.scrollToFuction("Carousel")}>Top</button></li>
                    <li><button className="nav_button" onClick={() => this.scrollToFuction("Instructors")}>Instructors</button></li>
                    <li><button className="nav_button" onClick={() => this.scrollToFuction("Classes")}>Classes</button></li>
                    <Link to="/scheduling">Scheduling</Link>
                  </ul>
                </nav> */}
                <div className='background-div' style={{height: '100vh'}}>
                  <div style={insideStyles}>HTML inside the parallax</div>
                </div>
                <div className="title">
                <TrackVisibility offset={20}>
                 <Fade>Photos</Fade>
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
>>>>>>> dbcfa938feb40989d78d00853ba3c02db84c7198
      </div>
    );
  }
}

export default LandingPage;
