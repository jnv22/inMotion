import React from "react";
import components from "../components/mdlComponents";
import Form from "../components/form";
import FilterableTable from "../components/filterableTable"
import update from 'react-addons-update';

var movies = JSON.parse(localStorage.getItem('movies')) || [];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      modalOpen: false,
      movieComponents: {},
      movies:[],
      editedMovieIndex: null,
    }
  },

  getDefaultProps: function() {
    return {
       movieComponents: ["genre", "actors", "title", "year", "rating"]
    }
  },

  componentDidMount: function() {
    this.setState({movies: movies})
  },

  toggleModal: function(modal) {
    this.setState({modalOpen: !this.state.modalOpen})
  },

  handleInputChange: function(e) {
    let movieComponents = update(this.state.movieComponents, {
       [e.target.id]: {$set: e.target.value}
    });

    this.setState({movieComponents: movieComponents})
  },

  saveMovie: function(e) {
    e.preventDefault();

    //treat this.state as immutable as per react docs
    let movies = this.state.movies.slice();
    let index = this.state.editedMovieIndex;

    //if updating list, update. else push new movies to array
    (index !== null) ? (movies[index] = this.state.movieComponents) : movies.push(this.state.movieComponents)

    this.setState({editedMovieIndex: null});
    this.updateMovie(movies);
    this.cancelModal();
  },

  removeMovie: function(movie, i) {
    let movies = this.state.movies.slice();
    movies.splice(i, 1);
    this.updateMovie(movies)
  },

  updateMovie: function(movies) {
    this.setState({movies: movies})
    localStorage.setItem('movies', JSON.stringify(movies));
  },

  editMovie: function(movie, i) {
    this.setState({movieComponents: movie, editedMovieIndex: i});
    this.toggleModal();
  },

  cancelModal: function() {
    this.setState({movieComponents: {}})
    this.toggleModal()
  },

  render: function() {
    return (
      <div className="content">
        <components.Header toggleModal={this.toggleModal}/>
        <FilterableTable
          movies={this.state.movies}
          movieComponents={this.props.movieComponents}
          editMovie={this.editMovie}
          removeMovie={this.removeMovie}
        />
        <Form
          cancelModal={this.cancelModal}
          open={this.state.modalOpen}
          updatedMovieComponent={this.state.movieComponents}
          movieComponents={this.props.movieComponents}
          handleChange={this.handleInputChange}
          saveMovie={this.saveMovie}
        />
      </div>
    )
  }
});
