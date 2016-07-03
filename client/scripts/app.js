var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;
var SearchTool = require('./SearchTool');
import { Router, Route, Link} from 'react-router';
import { browserHistory } from 'react-router';

// const history = createHistory();

var SearchToolWrapper = React.createClass({
	render: function () {
    return (
        <SearchTool searchURL='/search/rest/' location={this.props.location} />
    );
  }
});

// console.log(this.props.location.pathname);

ReactDOM.render((
	<Router history={browserHistory} >
		<Route path="/altsearch" component={SearchToolWrapper} />
    </Router>
    ),
    document.getElementById('content')
);