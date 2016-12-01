import React from "react"
import components from "./mdlComponents"

module.exports = React.createClass({
  render: function() {
    return (
     <span className="formComponents">
      <components.InputField
        type="text"
        id="search"
        value={this.props.searchValue || ''}
        handleChange={this.props.handleChange}
        label="Search"
      />
     </span>
    )
  }
});
