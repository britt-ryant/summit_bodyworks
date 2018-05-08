import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  PropsRoute
} from 'react-router-dom';
import LandingPage from './LandingPage';
import Scheduling from './Scheduling';
import ErrorComponent from './ErrorComponent';

class RouterComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="router_container">
        <Router>
          <div className="router_child_div">
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/scheduling" component={Scheduling} /> */}
            <Route path="/*" component={ErrorComponent} />
          </div>
        </Router>
      </div>
    )
  }
}

export default RouterComponent;
