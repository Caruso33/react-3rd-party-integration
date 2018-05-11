import React, { Component } from 'react';

// Google Map as 3rd Party
import GoogleMap from './google_map';

export default class App extends Component {
  state = { lat: 13.736717, lng: 100.523186 };
  render() {
    const { lat, lng } = this.state;
    return (
      <div>
        Map me!
        <button
          onClick={() =>
            this.setState({
              lat: 18.796143,
              lng: 98.979263
            })
          }
        >
          Chiang Mai
        </button>
        <GoogleMap lat={lat} lng={lng} />
      </div>
    );
  }
}
