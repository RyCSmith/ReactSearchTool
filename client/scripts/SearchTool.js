var React = require('react');
var SimpleMap = require('./SimpleMap');
var FilterBox = require('./FilterBox');
var ResultsBox = require('./ResultsBox');
var URLTools = require('./HomfieldURLTools');

var SearchTool = React.createClass({

  getInitialState: function() {
    return { 
      results : []
    };
  },

  doSearch: function(filters) {
    $.ajax({
      url: this.props.searchURL,
      type : 'GET', 
      dataType: 'json',
      data: filters,
      cache: false,
      success: function(searchResponseV1) {
        console.log(searchResponseV1);
        this.setState({results: searchResponseV1.results});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    var searchParams = URLTools.getJsonFromUrl(false);
    console.log(searchParams);
    this.doSearch(searchParams);
  },

  render: function() {
    return (
      <div className="search-box-outer-frame">
        <div className="results-and-filters-box">
            <FilterBox onFilterChange={this.doSearch} />
            <ResultsBox data={this.state.results} />
        </div>
        <SimpleMap onCoordsChange={this.doSearch} />
      </div>
    );
  }
});

module.exports = SearchTool;

//<MapTwo google={window.google} />