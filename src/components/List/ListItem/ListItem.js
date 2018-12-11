import React, { Component } from 'react';
import './index.css';
import plats from '../../../Plats.png';

export default class ListItem extends Component {
  render() {
    return (
      <div className="list-item-container">
        <div className="title-container">
          <p>{this.props.zone.house}huset - Plan {this.props.zone.level}</p>
          <img src={plats} className="location-image-small" alt=''/>
        </div>

        <div className="list-item-expand">
          <p>{this.props.zone.house} {this.props.zone.level}</p>
        </div>
      </div>
    );
  }
}