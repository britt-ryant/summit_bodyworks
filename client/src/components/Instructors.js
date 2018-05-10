import React from 'react';
import photo1 from '../assets/madlynn_photo1.jpg';
import photo2 from '../assets/cornelius_photo1.jpg';

const images = [ photo1, photo2 ];

const Instructors = () => (
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img className="d-block img-fluid" src={photo1} alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block img-fluid" src={photo2} alt="Second slide" />
      </div>
    </div>
  </div>
);

export default Instructors;
