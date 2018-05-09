import React, { Component } from 'react';
// import Slider from 'react-slick'
import {Slide} from "react-slideshow-image";
import imageOne from "../images/photoOne.png";
import imageTwo from "../images/photoTwo.jpg";
import imageThree from '../images/photoThree.jpg';
import ImageGallery from 'react-image-gallery';





class CarouselComponent extends Component {
  render(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel_container">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src={imageOne} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={imageTwo} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={imageThree} alt="Third slide" />
            </div>
          </div>
        </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    )
  }
}


export default CarouselComponent;
