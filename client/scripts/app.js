// var CommentBox = require('./CommentBox');
var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;
var SearchTool = require('./SearchTool');

ReactDOM.render(
    <SearchTool />,
    document.getElementById('content')
);