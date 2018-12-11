import React, { Component } from 'react';
import './index.css';
import logo from '../../Diagram.svg';
import plats from '../../Plats.png';

export default class ListItem extends Component {
    render() {
        return (
            <div className="best-container">
                <h1>Största chans för plats {'\u2728'} </h1>
                <p>{this.props.zone.house}huset - Plan {this.props.zone.level}</p>
                <img src={logo} className="best-image" alt=''/>
                <div className="location-button" alt=''>
                    <p>Ta mig hit</p>
                    <img src={plats} alt="" className="location-image"/>
                </div>
                <div className="image-cover"/>
            </div>
        );
    }
}