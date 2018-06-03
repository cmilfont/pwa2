import React from 'react';
import { connect } from 'react-redux';
import { Map, LayerGroup } from 'react-leaflet';
import { GoogleApiLoader, GoogleMutant } from 'react-leaflet-googlemutant';
import Marker from './markers/marker';

class BeerswarmMap extends React.Component {
  render() {
    const {bounds, center, zoom} = this.props;
    const options = {
      maxZoom: 18,
      minZoom: 0,
      zoomControl: false,
      doubleClickZoom: true,
      keyboard: false,
    };
    const viewport = { center, zoom };
    if (bounds.length) {
      options.bounds = bounds;
    }
    const places = bounds.map(item => (
      <Marker coords={item} />
    ));
    return (
      <div>
        <GoogleApiLoader apiKey="AIzaSyBOFWxLBbQtSKwhKjdgLQFTfYgEMJk7ACY">
          <Map
            attributionControl={false}
            viewport={viewport}
            {...options}
          >
            <GoogleMutant type="roadmap" />
            <LayerGroup>
              {places}
            </LayerGroup>
          </Map>
        </GoogleApiLoader>
        Mapa
      </div>
    )
  }
}

export default connect(
  state => {
    const {bounds, center, zoom } = state.get('map').toJS();
    return {
      bounds, center, zoom
    }
  }
)(BeerswarmMap);