import React, { Component } from 'react';
import './index.css';

export default class StarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dx: 0.01 + Math.random()/5,
            dy: 0.01 + Math.random()/5,
            size: 0.1 + this.getRandomInt(5),
            xpos: Math.floor(this.getRandomInt(window.innerWidth)),
            ypos: (window.innerHeight) - Math.floor(this.getRandomInt(window.innerHeight/4)),
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random()*Math.floor(max));
    }

    componentDidMount() {
       setInterval( () => this.updatePosition(), 10);
    }

    componentWillUnmount(){
        clearInterval(this.userComponentId);
    }

    updatePosition() {

        var dx = this.state.dx;
        var dy = this.state.dy;

        // if (this.state.xpos >= window.innerWidth-this.state.size || this.state.xpos <= 0) {
        //     dx = -dx;
        // }
        if (this.state.xpos > window.innerWidth){
            this.setState({xpos: 0, dy: Math.random()});
        } else if (this.state.xpos >= window.innerWidth/2){
            this.setState({xpos: this.state.xpos+dx, ypos: this.state.ypos-dy});
        } else if (this.state.xpos < window.innerWidth/2){
            this.setState({xpos: this.state.xpos+dx, ypos: this.state.ypos+dy});
        } else 
        // if (this.state.ypos <= window.innerHeight/2 || this.state.ypos >= window.innerHeight - this.state.size) {
        //     dy = -dy;
        // }
        this.setState({
            dx: dx,
            dy: dy,
            xpos: this.state.xpos - dx,
            ypos: this.state.ypos - dy,
        })
    }

    render() {
        var pos = {
            left: this.state.xpos,
            bottom: this.state.ypos,
            width: this.state.size,
            height: this.state.size,
        };

        return (
            <div className="star-container" style={pos}/>
        );
    }
}