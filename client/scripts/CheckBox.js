var CheckBox = React.createClass({

    getInitialState: function() {
      return {checkedState : this.props.checkVal};
    },

    handleCheckChange: function() {
      this.props.reportChange(this.props.nameVal, !this.state.checkedState)
      this.setState({checkedState: !this.state.checkedState});
    },

    render: function() {
      return (
        <input type="checkbox" name={this.props.nameVal} checked={this.state.checkedState} onChange={this.handleCheckChange} /> 
      );
    }
});

module.exports = CheckBox;