import React from "react"
import components from "./mdlComponents"
import RaisedButton from 'material-ui/RaisedButton';
import SearchBar from './searchbar'

module.exports = React.createClass({
  getInitialState: function() {
    return({
      selectedMovieComponent: "genre",
      searchValue: ''
    })
  },

  handleSearchChange: function(e) {
    this.setState({searchValue: e.target.value})
  },

  search: function(e) {
    e.preventDefault();
    var returnedMovies = [];
    var searchValue = this.state.searchValue;
    var movieComponent = this.state.selectedMovieComponent;
    this.props.movies.map((movie) => {
      var movieMatch;
      var re = new RegExp(searchValue, 'i');

      //perform search on number
      if (movieComponent === 'rating' || movieComponent === 'year') {
         movieMatch = (movie[movieComponent] === searchValue ? movie : null)
      }
      else {
         movieMatch = movie[movieComponent].match(re)
      }
      if (movieMatch !== null && searchValue !== '') returnedMovies.push(movie)
    })

    this.props.updateFilteredResults.call(null, returnedMovies)
  },

  changeSearchSelection: function(e, i, value) {
    this.setState({selectedMovieComponent: value});
  },

  render: function() {
    return (
      <div id="Search">
        <form onSubmit={this.search}>
          <SearchBar
            searchValue={this.state.searchValue}
            handleChange={this.handleSearchChange}
          />
          <components.DropDown
            movieComponents={this.props.movieComponents}
            selectedMovieComponent={this.state.selectedMovieComponent}
            changeSearchSelection={this.changeSearchSelection}
          />
          <RaisedButton label="Search" primary={true} type="submit" />
        </form>
      </div>
    )
  }
})
