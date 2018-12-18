import React, { Component } from 'react';
import './index.css';
import plats from '../../../Plats.png';
import { throwServerError } from 'apollo-link-http-common';

export default class ListItem extends Component {
  
constructor(props){
  super(props);
  this.state = {
    color: 'red',
  }
}

componentWillMount(){
  switch (this.props.zone.level) {
    case 1:
      this.setState({color: '#4BB9EC'});
      break;
    case 2:
      this.setState({color: '#FFDC81'});
      break;
    case 3:
      this.setState({color: '#FF4F19'});
      break;
    case 4:
      this.setState({color: 'red'});
      break;
    default:
      this.setState({color: 'white'});
      break;
  }
}

  render() {
    console.log(this.props.zone);

    return (
      <div className="list-item-container">
        <span className="title-container">
          <span className="index-container"><p>{this.props.index+1}</p></span>
          <p style={{flex: 4}}>{this.props.zone.house}huset</p>
          <p style={{flex: 2, marginLeft: 0}}> - Plan {this.props.zone.floor}</p>
          <span className="value-color" style={{backgroundColor: this.state.color}}/>
        </span>
      </div>
    );
  }
}