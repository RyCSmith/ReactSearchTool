var React = require('react');
var SimpleMap = require('./SimpleMap');
var FilterBox = require('./FilterBox');
var ResultsBox = require('./ResultsBox');
var URLTools = require('./HomfieldURLTools');
import { browserHistory } from 'react-router'

var SearchTool = React.createClass({

  getInitialState: function() {
    return { 
      loading : true,
      results : []
    };
  },

  updateQueryString: function(filterName, filterState) {
    if (filterState) {
      this.props.location.query[filterName] = filterState;
    } else {
      if (this.props.location.query[filterName] != null) {
        delete this.props.location.query[filterName];
      }
    }
    browserHistory.push({
      pathname: this.props.location.pathname,
      query: this.props.location.query
    });
  },

  doSearch: function(filters) {
    this.setState({loading : true});
    $.ajax({
      url: this.props.searchURL,
      type : 'GET', 
      dataType: 'json',
      data: filters,
      cache: false,
      success: function(searchResponseV1) {
        console.log(searchResponseV1);
        this.setState({
          results : searchResponseV1.results,
          loading : false
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.doSearch(this.props.location.search);
  },

  render: function() {
    return (
      <div className="search-box-outer-frame">
        <div className="results-and-filters-box">
            <FilterBox 
              submitFiltersForSearch={this.doSearch} 
              submitFiltersForQueryString={this.updateQueryString}
              location={this.props.location} />
            <ResultsBox data={this.state.results} loading={this.state.loading} location={this.props.location} />
        </div>
        <SimpleMap onCoordsChange={this.doSearch} />
      </div>
    );
  }
});

module.exports = SearchTool;

//<MapTwo google={window.google} />