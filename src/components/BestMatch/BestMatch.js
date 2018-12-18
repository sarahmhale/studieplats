import React, { Component } from 'react';
import './index.css';
import chair from '../../chair.png';
import marker from '../../Plats.png';

export default class BestMatch extends Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    
    }

    openModal (){
    this.setState({ open: true })
    }

    closeModal () {
    this.setState({ open: false })
    }

    level(level) {
        console.log(level)
        switch (level) {
            case 1:
                return (<div><p>Really easy to find a seat</p></div>)
            case 2:
                return (<div><p>Easy to find a seat</p></div>)
            case 3:
                return (<div><p>Hard to find a seat</p></div>)
            case 4:
                return (<div><p>Really hard to find a seat</p></div>)
            default:

        }
    }

    render() {
        return (
            <div className="best-container">
                <h2>Best chance is at:</h2>
                <img className="best-image" src={chair} alt='seat'/>
                <h1>{this.props.zone.house}huset</h1>
                <h3>Floor {this.props.zone.floor}</h3>
                {/* {this.level(this.props.zone.level)} */}
                <div className="location-button">
                    <span>
                    
                    <p>
                    <img className="location-icon" src={marker} alt='location'/>
                    Take me there</p></span>
                </div>
´            </div>
        );
    }
}