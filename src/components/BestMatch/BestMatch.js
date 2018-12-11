import React, { Component } from 'react';
import './index.css';
import logo from '../../Diagram.svg';
import plats from '../../Plats.png';
import Star from '../StarComponent/Star.js';

export default class ListItem extends Component {

    createStars = () => {
        let stars = []

        for (let j = 0; j < 50; j++) {
            stars.push(<Star/>)
        }
        return stars;
    }

    render() {

        return (
            <div className="best-container">
                {this.createStars()}
                <h1>Största chans för plats {'\u2728'} </h1>
                <p>{this.props.zone.house}huset - Plan {this.props.zone.floor}</p>
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