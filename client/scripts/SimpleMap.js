import { default as React, Component } from "react";
import { default as update } from "react-addons-update";
import { default as FaSpinner } from "react-icons/lib/fa/spinner";

import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader";
import { GoogleMap, Marker } from "react-google-maps";

var SimpleMap = React.createClass({
  render: function() {
    return (
      <div className="map-box">
          <ScriptjsLoader
            hostname={"maps.googleapis.com"}
            pathname={"/maps/api/js"}
            query={{ v: "3.${ AsyncGettingStarted.version }", libraries: "geometry,drawing,places" }}
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
                ref={(map) => console.log(map)}
                defaultZoom={3}
                defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
              >
              </GoogleMap>
            }/>
      </div>
    );
  }
});

module.exports = SimpleMap;