import React, { Component } from 'react';
import './App.css';
import Zones from './ZonesData.js';

class App extends Component {

  /*
  constructor(props){
    super(props);
    this.state = {
      styles: {
        sensorContainer: {backgroundColor: '#000', width: '100vw', height: '10vh',},
      },
    }
  }
  */

  render() {
    return (
      <div className="App">
        <Zones />
      </div>
    );
  }
}

export default App;
