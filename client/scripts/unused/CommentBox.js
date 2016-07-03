var React = require('react');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');
var GoogleMap = require('./GoogleMap');

var CommentBox = React.createClass({
   loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  //this is the method that should fire when a new comment is submitted
  //this function is passed to the child component as a callback (below)
  handleCommentSubmit: function(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
    console.log("setInterval");
    console.log(this.props.pollInterval);
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  //note how the function is being passed to this child - this is because it makes sense to do comment-data update in this component
  //who owns the data - the child can then trigger this with args when needed 
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />   
    </div>
    );
  }
});

module.exports = CommentBox;