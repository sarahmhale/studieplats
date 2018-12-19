import React, { Component } from 'react';
import './index.css';
import chair from '../../desk.svg';

export default class BestMatch extends Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }

    openModal() {
        this.setState({ open: true })
    }

    closeModal() {
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

    openMaps() {
        const url = 'https://www.google.com/maps/place/Naturvetarhuset,+Universitetsv%C3%A4gen,+901+87+Ume%C3%A5/@63.8195457,20.3056102,17z/data=!3m1!4b1!4m5!3m4!1s0x467c5afc66554fbd:0xd9481094b451062!8m2!3d63.8195433!4d20.3077989';
        window.open(url, '_blank');
    }
    render() {
        return (
            <div className="best-container">
                <h2>Best chance is at:</h2>
                <img className="best-image" src={chair} alt='seat' />
                <h1>{this.props.zone.house}huset</h1>
                <h3>Floor {this.props.zone.floor}</h3>
                {/* {this.level(this.props.zone.level)} */}
                <button
                    className="location-button"
                    onClick={this.openMaps}>
                    <p>Take me there</p>
                </button>
            </div>
        );
    }
}