import React, { Component } from 'react';
import './App.css';
import ZonesList from './ZonesList.js';
import logo from './logo.svg'; 

class App extends Component {

  render() {
    return (
      <div className="App">
        <ZonesList/>
        <div className="image-cover">
          <img src={logo} className="best-image" alt=''/>
        </div>
      </div>

    );
  }
}

export default App;
