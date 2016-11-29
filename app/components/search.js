import React from "react"
import components from "./mdlComponents"
import RaisedButton from 'material-ui/RaisedButton';

var SearchBar = React.createClass({
  render: function() {
    return (
     <span className="formComponents"><components.InputField {...this.props} key={0} value={this.props.searchValue || ''} id="search" label="Search" type="text"/></span>
    )
  }
})


module.exports = React.createClass({
  getInitialState: function() {
    return({
      searchMovieComponent: "genre",
      searchValue: ''
    })
  },
  handleSearchChange: function(e) {
    this.setState({searchValue: e.target.value})
  },
  search: function() {
    var returnedMovies = [];
    var searchValue = this.state.searchValue;
    var movieComponent = this.state.searchMovieComponent;

    this.props.movies.map((movie) => {
      var movieMatch = movie[movieComponent].match(/[searchValue]/i)
      console.log(movieMatch)
      if (movieMatch !== null) returnedMovies.push(movie)
    })
    console.log(returnedMovies, searchValue, movieComponent)
  },

  changeSearchSelection: function(e, i, value) {
    this.setState({searchMovieComponent: value})
  },
  render: function() {
    console.log(this.state.searchValue, this.state.searchMovieComponent)
    return (
      <div id="Search">
        <SearchBar {...this.props}
        searchValue={this.state.searchValue}
        handleChange={this.handleSearchChange}
        />
        <components.DropDown {...this.props}
          searchMovieComponent={this.state.searchMovieComponent}
          changeSearchSelection={this.changeSearchSelection}
          />
        <RaisedButton label="Search" onClick={this.search} primary={true} />
      </div>
    )
  }
})
