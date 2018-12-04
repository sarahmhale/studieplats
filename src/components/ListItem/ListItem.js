import React, { Component } from 'react';
import './index.css';


export default class ListItem extends Component {
  render() {
    return (
      <div className="list-item-container">
        <p className="rank-text">{this.props.index + 1}</p><br />
        <div className="list-item-expand">
          <p>{this.props.zone.house} {this.props.zone.level}</p>
        </div>
      </div>
    );
  }
}