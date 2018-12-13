import React, { Component } from 'react';
import './index.css';
import Star from '../StarComponent/Star.js';
//import Map from '../../Karta.png';
import marker from '../../screen/marker.png'
import Popup from "reactjs-popup";
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay';

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

    createStars = () => {
        let stars = []

        for (let j = 0; j < 50; j++) {
            stars.push(<Star />)
        }
        return stars;
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
                {this.createStars()}

                <div className="best-info-container">
                    <h1>Most seats available at</h1>
                    <h1>{this.props.zone.house}huset</h1>
                    <h2>Floor {this.props.zone.floor}</h2>
                    {this.level(this.props.zone.level)}
                    <div className="location-button" alt='' onClick={this.openModal}>
                        <p>Show me</p>
                    </div>
                </div>
                
                <Popup
                open={this.state.open}
                closeOnDocumentClick
                onClose={this.closeModal}
                position={'top center'}
                contentStyle={{width: window.innerWidth*0.75, height: window.innerHeight*0.75}}>

<<<<<<< HEAD
                    <div style={{width:window.innerWidth*0.75, height: window.innerHeight*0.75}}>
=======
                <Popup
                    trigger={
                        <div className="location-button" alt=''>
                            <p>Show me</p>
                        </div>}
                    position="center center"
                    arrow={false}>
                    <div style={{ width: '75vw', height: '25vh' }}>
>>>>>>> a90a7695f36b0f0137474845d7e37b761356eab2
                        <Map center={[63.819740, 20.307033]}
                            zoom={16}>
                            <Overlay anchor={[63.819740, 20.307033]} offset={[0, 0]}>
                                <img src={marker} width={24} height={30} alt='' />
                            </Overlay>
                        </Map>
                    </div>
                </Popup>

                <div className="image-cover" />
            </div>
        );
    }
}