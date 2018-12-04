import React, { Component } from 'react';
import './index.css';

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <h1>Best Match</h1>
                <p>{this.props.zone.house} våning {this.props.zone.level}</p>
            </div>
        );
    }
}