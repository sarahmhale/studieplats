import React, { Component } from 'react';
import ListItem from './ListItem/ListItem.js';
import './index.css';

export default class ZoneList extends Component {

    get_blob(name, color) {
        return (
            <div className="value-container">
                <div className='value-color value-item' style={{ backgroundColor: color }} />
                <p className='value-item'>{name}</p>
            </div>
        )
    }
    render() {
        console.log(this.props)
        return (
            <div className="list-container">
                <div className='list-header'>
                    <h3>Find your seat!</h3>
                    <div className="legend-container">
                        {this.get_blob('calm', '#4BB9EC')}
                        {this.get_blob('moderate', '#FFDC81')}
                        {this.get_blob('busy', '#FF4F19')}

                    </div>
                </div>

                {this.props.zones.map((zone, index) => {
                    return <div>
                        <ListItem
                            zone={zone}
                            key={index}
                            index={index}
                        />
                        <div className="list-item-border" />
                    </div>;
                })}
            </div>
        );
    }
}

