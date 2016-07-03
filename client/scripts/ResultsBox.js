var React = require('react');
var Result = require('./Result');
var classNames = require('classnames');

var ResultsBox = React.createClass({

  getInitialState: function() {
    return {
      loading: true, 
      data: []
    };
  },

  componentDidMount: function() {
    
  },

  render: function() {
    var overlay;
    if (this.state.loading) {
      <div id="overlay"><i className={classNames('fa', 'fa-spinner', 'fa-spin', 'spin-big')}></i></div>
    }
    return (
      <div className="results-box">
        <div id="overlay"><i className={classNames('fa', 'fa-spinner', 'fa-spin', 'spin-big')}></i></div>
        <h1>ResultsBox</h1> 
        <Result />
    </div>
    );
  }
});

module.exports = ResultsBox;