var React = require('react');
import Map from 'google-maps-react';
import Marker from 'google-maps-react';

var MapTwo = React.createClass({

  getInitialState: function() {
    return { 
      center: [59.938043, 30.337157],
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };
  },

  render: function() {
    return (
    	<Map google={this.props.google} />
	);
  }
});

module.exports = MapTwo;