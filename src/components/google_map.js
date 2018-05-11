import React, { Component } from 'react';

export default class GoogleMap extends Component {
  shouldComponentUpdate() {
    // component will never update
    return false;
  }

  componentWillReceiveProps(nextProps) {
    // though never re-rendered, the component will receive new props here
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }

  componentDidMount() {
    // component reaching DOM by setting ref attribute in jsx
    this.map = new global.google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }
  render() {
    return <div style={{ height: '50vh' }} ref="map" />;
  }
}
