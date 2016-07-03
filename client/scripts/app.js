var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;
var SearchTool = require('./SearchTool');

ReactDOM.render(
    <SearchTool searchURL='/search/rest/' />,
    document.getElementById('content')
);