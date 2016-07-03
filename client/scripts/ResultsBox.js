var React = require('react');
var Result = require('./Result');
var classNames = require('classnames');


var ResultsBox = React.createClass({

  getInitialState: function() {
    return {
      data: []
    };
  },

  render: function() {
    
    return (
      
        <div className="results-box">
          <div>ResultsBox</div> 
            <Result />
         </div>
        
     
    );
  }
});

module.exports = ResultsBox;