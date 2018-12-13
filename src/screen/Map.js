import React, { Component } from 'react';
import Map from 'pigeon-maps'
// import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import pigeon from './pigeon.jpg'

export default class Demo extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <Map center={[50.879, 4.6997]}
                    zoom={12}
                    width={600}
                    height={400}>

                </Map>
            </div>
        )
    }
}