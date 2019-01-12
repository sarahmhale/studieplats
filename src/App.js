import React, { Component } from 'react';
import './App.css';
import Zones from './screen/Zones.js';
import Star from './components/StarComponent/Star.js';

class App extends Component {

  createStars = () => {
    let stars = []

    for (let j = 0; j < 50; j++) {
      stars.push(<Star />)
    }
    return stars;
  }

  render() {
    return (
      <div className="App">
        <div className="stars-container">
          {this.createStars()}
        </div>
        <Zones />
      </div>
    );
  }
}

export default App;
