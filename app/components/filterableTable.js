import React from "react"
import components from "./mdlComponents"
import SearchComponent from "../components/searchComponent";


module.exports = React.createClass({
  getInitialState: function() {
    return({filteredSearchResults: []})
  },
  updateFilteredResults: function(results) {
    this.setState({filteredSearchResults: results})
  },
  render: function() {
    var searchResults = this.state.filteredSearchResults
    return (
      <div>
      <SearchComponent {...this.props} updateFilteredResults={this.updateFilteredResults}/>
      <components.Table {...this.props} movies={searchResults.length > 0 ? searchResults : this.props.movies}/>
      </div>
    )
  }
})
