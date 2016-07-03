import { default as React, Component } from "react";
import { default as update } from "react-addons-update";
import { default as FaSpinner } from "react-icons/lib/fa/spinner";

import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader";
import { GoogleMap, Marker } from "react-google-maps";

var SimpleMap = React.createClass({
  getInitialState: function() {
    return {
      center : { lat: 37.7749, lng: -122.4194 },
      zoom : 10
    };
  },

  testDragend: function() {
    console.log(this.refs);
    var latLng = new google.maps.LatLng(39, -75);
    console.log(this.refs.map.getBounds());
    console.log("Dragend Occurred.")
  },

  testZoomChanged: function() {
    console.log("Zoom Change Occurred.")
  },

  render: function() {
    return (
      <div className="map-box">
          <ScriptjsLoader
            hostname={"maps.googleapis.com"}
            pathname={"/maps/api/js"}
            query={{ v: "3", key: "AIzaSyBGaqMSbjMuySDnLfvZglTVSxHK5kZpzCw", libraries: "geometry,drawing,places" }}
            loadingElement={
              <div className="test" style={{ height: "100%" }}>
                <FaSpinner
                  style={{
                    display: "block",
                    width: 75,
                    height: 75,
                    margin: "100px auto",
                    animation: "fa-spin 2s infinite linear",
                  }}/>
              </div>
            }
            containerElement={
              <div className="test2" style={{ height: "100%" }} />
            }
            googleMapElement={
              <GoogleMap
                ref="map"
                defaultZoom={this.state.zoom}
                defaultCenter={this.state.center}
                onDragend={this.testDragend}
                onZoomChanged={this.testZoomChanged}
              >
              </GoogleMap>
            }/>
      </div>
    );
  }
});

module.exports = SimpleMap;