import React from "react"
import components from "./mdlComponents"
import Search from "../components/search";


module.exports = React.createClass({
  getInitialState: function() {
    return({
      filteredSearchResults: []
    })
  },
  updateFilteredResults: function(results) {
    this.setState({filteredSearchResults: results})
  },
  render: function() {
    var searchResults = this.state.filteredSearchResults
    return (
      <div>
      <Search {...this.props} updateFilteredResults={this.updateFilteredResults}/>
      <components.Table {...this.props} movies={searchResults.length > 0 ?  searchResults : this.props.movies}/>
      </div>
    )
  }
})
