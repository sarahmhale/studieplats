import React, { Component } from 'react';
import ListItem from './ListItem/ListItem.js';
import './index.css';

export default class ZoneList extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="list-container">
                <div className='list-header'>
                    <h3>Other seats:</h3>
                    <div className="legend-container">
                        <span className="value-container">
                            <p>
                            <span className='value-color' style={{backgroundColor: '#4BB9EC'}}/>
                            calm</p>
                        </span>
                        <span className="value-container">
                            <p>
                            <span className='value-color' style={{backgroundColor: '#FFDC81'}}/>
                            moderate</p>
                        </span>
                        <span className="value-container">
                            <p>
                            <span className='value-color' style={{backgroundColor: '#FF4F19'}}/>
                            busy</p>
                        </span>
                    </div>
                </div>
                {this.props.zones.map((zone, index) => {
                        return <div>
                            <ListItem
                                zone={zone}
                                key={index}
                                index={index}
                            />
                            <div className="list-item-border"/>
                        </div>;
                })}
            </div>
        );
    }
}

