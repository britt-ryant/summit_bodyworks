import React from 'react';



export default class MainNavBar extends React.Component {
  constructor(props){
    super(props);
  }
  scrollToFuction(term){
    this.props.scrollToFuction(term)
  }
  render(){
    return(
      <div className="main-nav-bar">
        <div className="menu-div">
          <nav className="test_button">
            <div className="visible-navbar">
              <h1>Summit Health and Body Works</h1>
              <button className="actual-test-button" onClick={() => this.scrollToFuction("LandingPage")} value="LandingPage"> Home  | </button>
              <button className="actual-test-button" onClick={() => this.scrollToFuction("Carousel")} value="Carousel">Gallery  | </button>
              <button className="actual-test-button" onClick={() => this.scrollToFuction("Classes")} value="Classes">Classes  | </button>
              <button className="actual-test-button" onClick={() => this.scrollToFuction("Instructors")} value="Instructors">Instructors  | </button>
              <button className="actual-test-button" onClick={() => this.scrollToFuction("Locations")} value="Locations">Locations</button>
            </div>
            <div className="mouse-hover"></div>
          </nav>
        </div>
      </div>
    )
  }
}
