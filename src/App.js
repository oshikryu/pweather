import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './Home';
import Help from './Help';
import CityView from './CityView';
import InstallPWA from './InstallPWA';

class App extends Component {
  render() {
    return (
      <>
        <h1>PWeather 1.0</h1>
        <InstallPWA />
        <nav>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/help">Help</Link></li>
          </ul>                    
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/help" component={Help} /> 
        <Route path="/cities/:city" component={CityView} /> 
      </>
    );
  }
}

export default App;
