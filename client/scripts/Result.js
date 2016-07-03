var React = require('react');
var classNames = require('classnames');

var ImageTag = React.createClass({
    render: function() {
        return <img src={this.props.url} alt={this.props.alt} className={this.props.classes}/>;
    }
});

var Result = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    
  },

  render: function() {
    return (
      
      <div className={classNames('result-frame', 'margin-right', 'border-bottom')}>
        <div className="result-photo">
          <ImageTag url='http://placehold.it/400x300' alt='' classes='preview-image'/>
          <div className="result-photo-float-box">
          1 space available
          </div>
          <ImageTag url='http://placehold.it/400x300' alt='' classes='logo-photo'/>
        </div>
    </div>
    );
  }
});

module.exports = Result;