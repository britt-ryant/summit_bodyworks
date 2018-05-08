import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TestComponent from './components/TestComponent';
// import LandingPage from './components/LandingPage';
import RouterComponent from './components/RouterComponent';


const App = () => (
  <MuiThemeProvider>
    <RouterComponent />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
