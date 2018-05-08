import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {
  Link
} from 'react-router-dom';

class Scheduling extends Component {
  render(){
    return(
      <div className="main_container">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <h2>I am the scheduling component</h2>
      <div className="calendar_container">
        <Calendar />
      </div>
      </div>
    )
  }
}

export default Scheduling;
