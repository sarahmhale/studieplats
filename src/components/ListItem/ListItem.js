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
            {this.props.children}
        </div>
    );
  }
}