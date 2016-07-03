/*
 * Base Google Map example
 */
var React = require('react');
import GoogleMap from 'google-map-react';
var MapMarker = require('./MapMarker');

var HomfieldGoogleMap = React.createClass({

  getInitialState: function() {
    return { 
      center: [59.938043, 30.337157],
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };
  },

  render: function() {
    return (
      <div className="map-box">
         <GoogleMap
          // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
          center={this.state.center}
          zoom={this.state.zoom}>
          <MapMarker lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        </GoogleMap>
      </div>
    );
  }
});

module.exports = HomfieldGoogleMap;