import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import TrackVisibility from 'react-on-screen';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      lat: 40.7125386,
      lng: -74.3609247,
      zoom: 15,
    };
  }

  renderFade() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="locations-div">
        <Fade>
          <h1>Locations</h1>
          <h2>Summit</h2>
          <p>1234 Summit St. Summit, NJ 07901</p>
          <p>Phone: (908) 403-1694</p>
          <p>Email: Neile@gmail.com</p>
        </Fade>
      </div>
    );
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="content-div">
        <TrackVisibility>{this.renderFade()}</TrackVisibility>
        <div className="map-div">
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    );
  }
}

export default Locations;
