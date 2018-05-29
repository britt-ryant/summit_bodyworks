import React from 'react';
import Slider from 'react-slick';

import imageOne from '../assets/cornelius_photo1.jpg';
import imageTwo from '../assets/madlynn_photo1.jpg';

class Instructors extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'center',
      centerMode: true,
      centerPadding: '0px',
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={imageOne} alt="Cornelius" style={{ margin: 'auto' }}/>
        </div>
        <div>
          <img src={imageTwo} alt="Madlynn" />
        </div>
      </Slider>
    );
  }
}

export default Instructors;
