import React, { Component } from 'react';
import './App.css';
import Sensor from './SensorData.js';
import ListItem from './components/ListItem/ListItem.js';

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
          <div className="list-container">  
          <ListItem>
            <Sensor id="a"/>
          </ListItem>

          <ListItem>
            <Sensor id="b"/>
          </ListItem>
        </div>  
      </div>
    );
  }
}

export default App;
