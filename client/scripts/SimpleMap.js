import { default as React, Component } from "react";
import { default as update } from "react-addons-update";
import { default as FaSpinner } from "react-icons/lib/fa/spinner";

import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";

var SimpleMap = React.createClass({
  getInitialState: function() {
    return {
      center : { lat: 37.7749, lng: -122.4194 },
      zoom : 8,
      markers: [
        {
          position: {
            lat: 37.7749,
            lng: -122.4194,
          },
          key: "Taiwan",
          defaultAnimation: 2,
          showInfo: false
        }
    ],
    showInfo: false
    };
  },

  testDragend: function() {
    console.log(this.refs);
    var latLng = new google.maps.LatLng(39, -75);
    console.log(latLng);
    console.log(this.refs.map.getBounds());
    console.log("Dragend Occurred.")
  },

  // componentDidMount: function() {
  //   this.setState({markers : [
  //     {position: new google.maps.LatLng(39, -75) }
  //     ]});
  // },

  testZoomChanged: function() {
    console.log("Zoom Change Occurred.")
  },
  handleMarkerRightclick: function(event) {
    console.log("Marker firing");
    this.state.markers[0].showInfo = true;
    this.setState(this.state);
    // this.setState({showInfo:true});
    // this.setState({markers: [{
    //   position: {
    //     lat: 37.7749,
    //     lng: -122.4194,
    //   },
    //   key: "Taiwan",
    //   defaultAnimation: 2,
    // }]});
  },
  renderInfoWindow: function(marker) {
    return (
       <InfoWindow content={marker.key}
        onCloseclick={this.handleMarkerClose} />
    );
  },
  handleMarkerClose: function() {
    this.state.markers[0].showInfo = false;
    this.setState(this.state);
  },

  render: function() {
    var rows = [];
    for (var key in this.state.markers) {
      console.log(key);
        rows.push(
          <Marker 
            position={this.state.markers[key].position} 
            onClick={this.handleMarkerRightclick}>
            {this.state.markers[key].showInfo ? this.renderInfoWindow(this.state.markers[key]) : null}
          </Marker>
        );
    }
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
              {rows}
              
              </GoogleMap>
            }/>
      </div>
    );
  }
});

module.exports = SimpleMap;

// <Marker position={{lat: 25.0112183, lng: 121.52067570000001 }}>
//               </Marker>