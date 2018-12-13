import React, { Component } from 'react';
import './index.css';
import Star from '../StarComponent/Star.js';
import Map from '../../Karta.png';
import Popup from "reactjs-popup";

export default class ListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            style:{},
        }
    }

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

                <div className="best-info-container">
                    <h3>Most seats available at</h3>
                    <h1>{this.props.zone.house}huset</h1>
                    <h2>Floor {this.props.zone.floor}</h2>
                </div>

                <Popup 
                    trigger={
                    <div className="location-button" alt=''>
                        <p>Show me</p>
                    </div>} 
                    position="top center"
                    overlayStyle={{borderRadius: '12px'}}>
                        <img src={Map} alt="map" style={{height: '50%', width: '50%'}}/>
                </Popup>

                <div className="image-cover"/>
            </div>
        );
    }
}