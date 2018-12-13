import React, { Component } from 'react';
import Map from 'pigeon-maps'
// import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import marker from './marker.png'

export default class Demo extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: 50, height: 100 }}>
                <Map center={[63.819740, 20.307033]}
                    zoom={16}
                    width={600}
                    height={400}>
                    <Overlay anchor={[63.819740, 20.307033]} offset={[0, 0]}>
                        <img src={marker} width={24} height={30} alt='' />
                    </Overlay>
                </Map>
                <h1>Naturhuset våning 3</h1>
            </div>
        )
    }
}