import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    require('dotenv').config();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Button className="btn">Click me!</Button> */}
        <button className="btn btn-warning">Click me two!</button>
      </div>
    );
  }
}

export default App;
