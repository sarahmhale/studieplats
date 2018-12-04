import React, { Component } from 'react';
import './App.css';
import Sensor from './ZonesData.js';

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
        <Sensor/>
      </div>
    );
  }
}

export default App;
