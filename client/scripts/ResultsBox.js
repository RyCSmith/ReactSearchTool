var React = require('react');
var Result = require('./Result');

var ResultsBox = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    
  },

  render: function() {
    return (
      <div className="results-box">
        <h1>ResultsBox</h1> 
        <Result />
    </div>
    );
  }
});

module.exports = ResultsBox;