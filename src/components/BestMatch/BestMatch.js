import React, { Component } from 'react';
import './index.css';
import logo from '../../Diagram.svg';
import plats from '../../Plats.png';

export default class ListItem extends Component {
    render() {
        return (
            <div className="best-container">
                <h1>Största chans för plats</h1>
                <p>{this.props.zone.house}huset - Plan {this.props.zone.level}</p>
                <img src={logo} className="best-image" alt=''/>
                <img src={plats} className="location-image" alt=''/>
                <div className="image-cover"/>
            </div>
        );
    }
}