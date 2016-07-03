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
          <div className="result-photo-float-box"> 1 space available </div>
          <ImageTag url='http://placehold.it/400x300' alt='' classes='logo-photo'/>
        </div>
        <div className="result-info">
          <div className="two-thirds">
            <div className={classNames('venue-name', 'text-left')}>Ryans Venue</div>
            <div className="distance-box">5 mi.</div>
          </div>
          <div className="one-third">
            <div className={classNames('price', 'text-right')}>$25.00</div>
            <div className={classNames('package-type-box', 'text-right')}> FLAT </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Result;