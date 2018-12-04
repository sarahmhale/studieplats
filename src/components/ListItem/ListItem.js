import React, { Component } from 'react';
import style from './index.css';

export default class ListItem extends Component {
/*
  constructor(props){
    super(props);
    this.state = {
      styles: {
        container: {backgroundColor: '#000',},
      },
    }
  }
*/

  render() {
    return (
        <div className="list-item-container">
            <p className="rank-text">{this.props.index+1}</p><br/>
            <div className="list-item-expand">
              <p>{this.props.zone.house} {this.props.zone.level}</p> 
            </div>
        </div>
    );
  }
}