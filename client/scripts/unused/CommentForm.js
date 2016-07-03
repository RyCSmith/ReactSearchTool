var React = require('react');

var CommentForm = React.createClass({
  //set initial state of input fields (saving this as variables)
  getInitialState: function() {
    return {author: '', text: ''};
  },

  //change handlers attached to the input fields - they save the input text in the state variables
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },

  //this will be called when the form is submitted
  //note - instead of posting to the server directly, this is invoking a function that was passed to it as a prop by its parent
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''}); //clear input fields after sending
  },

  //this creates a form
  //not that the input element have been assigned changehandlers
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange} />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange} />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CommentForm;