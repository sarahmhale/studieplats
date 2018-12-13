import React, { Component } from 'react';
import './App.css';
import Zones from './screen/Zones.js';
import Demo from './screen/Map'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Demo /> */}
        <Zones />
      </div>
    );
  }
}

export default App;
