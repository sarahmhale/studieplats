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
    //<img src={logo} className="best-image" alt=''/>

    render() {

        return (
            <div className="best-container">
                {this.createStars()}
                <h3>Most seats available at</h3>
                <h1>{this.props.zone.house}huset</h1>
                <h2>Floor {this.props.zone.floor}</h2>
                <div className="location-button" alt=''>
                    <p>Show me</p>
                </div>
                <div className="image-cover"/>
            </div>
        );
    }
}