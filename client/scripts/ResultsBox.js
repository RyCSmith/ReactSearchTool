var React = require('react');
var Result = require('./Result');
var classNames = require('classnames');
import Loader from 'react-loader-advanced';
import { default as FaSpinner } from "react-icons/lib/fa/spinner";

var ResultsBox = React.createClass({

  getInitialState: function() {
    return {
      data: []
    };
  },

  render: function() {
    var spinner2 = <div className="test" style={{ height: "100%" }}>
                <FaSpinner
                  style={{
                    display: "block",
                    width: 75,
                    height: 75,
                    margin: "auto",
                    animation: "fa-spin 2s infinite linear",
                  }}/>
              </div>
    return (
      <Loader message={spinner2} show={this.props.loading}>
        <div className="results-box">
          <div>ResultsBox</div> 
            <Result />
         </div>
      </Loader>
        
     
    );
  }
});

module.exports = ResultsBox;