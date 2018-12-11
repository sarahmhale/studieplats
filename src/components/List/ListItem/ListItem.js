import React, { Component } from 'react';
import './index.css';
import plats from '../../../Plats.png';

export default class ListItem extends Component {
  
  render() {
    console.log(this.props.zone);

    return (
      <div className="list-item-container">
        <div className="title-container">
          <p>{this.props.zone.house}huset - Plan {this.props.zone.floor}</p>
        </div>
      </div>
    );
  }
}