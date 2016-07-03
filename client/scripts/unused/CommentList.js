var React = require('react');

var Comment = React.createClass({
  render: function() {
    return (
    	// accessing properties that were passed to this Comment on creation. 
        //they can be dropped into the react tree by surrounding with braces
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author} 
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
  	//make a variable to map each comment to a comment node. This looks a lot like creating the object directly (below)
  	//except instead they are being set to variables
  	//we are grabbing the variables from the .props
  	var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
    	//this is how we can pass the properties to component directly: <Comment author="Pete Hunt">This is one comment</Comment> 
         //the {} variable contains the comment nodes made above
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

module.exports = CommentList;