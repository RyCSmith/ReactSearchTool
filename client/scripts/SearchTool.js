var React = require('react');
var HomfieldGoogleMap = require('./HomfieldGoogleMap')

var SearchTool = React.createClass({

  getInitialState: function() {
    return { 
      center: [59.938043, 30.337157],
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };
  },

  render: function() {
    return (
      <div className="results-and-map-box">
         <HomfieldGoogleMap />
      </div>
    );
  }
});

module.exports = SearchTool;