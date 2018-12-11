import React, { Component } from 'react';
import ListItem from './ListItem/ListItem.js';
import './index.css';

export default class ZoneList extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="list-container">
                {this.props.zones.map((zone, index) => {
                    if (index === 0) {
                        return <div key={index} />;
                    } else {
                        return <ListItem
                            zone={zone}
                            key={index}
                            index={index}
                        />;
                    }
                })}
            </div>
        );
    }
}

