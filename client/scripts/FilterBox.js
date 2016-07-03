var React = require('react');
var CheckBox = require('./CheckBox');

var FilterBox = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.function
  // },

  getInitialState: function() {
    return {
      filters : {
        'filter1' : true,
        'filter2' : false
      }
    };
  },

  handleFilterChange: function(filterName, filterState) {
    var updatedFilters = this.state.filters;
    updatedFilters[filterName] = filterState;
    this.setState({filters : updatedFilters});
    this.props.submitFiltersForSearch(updatedFilters);
    this.props.submitFiltersForQueryString(filterName, filterState);
  },

  render: function() {
    var rows = [];
    for (var key in this.state.filters) {
        rows.push(<CheckBox checkVal={this.state.filters[key]} nameVal={key} reportChange={this.handleFilterChange} />);
    }

    return (
      <div className="filter-box">
        <h1>FilterBox</h1> 
        <form className="filter-form">
          {rows}
        </form>
    </div>
    );
  }
});

module.exports = FilterBox;
