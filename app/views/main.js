import React from "react";
import components from "../components/mdlComponents";
import Dialog from "../components/dialog";
import Search from "../components/search";

import update from 'react-addons-update';

var movies = JSON.parse(localStorage.getItem('movies')) || [];


module.exports = React.createClass({

  getInitialState: function() {
    return {
      modalOpen: false,
      drawerOpen: false,
      movieComponents: {},
      movies:[],
      editedMovie: null,
    }
  },

  componentDidMount: function() {
    this.setState({
      movies: movies
    })
  },

  toggleModal: function(modal) {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  },

  handleChange: function(e) {
    let movieComponents = update(this.state.movieComponents, {
       [e.target.id]: {$set: e.target.value}
    });
    this.setState({
      movieComponents: movieComponents
    })
  },


  saveMovie: function(e) {
    e.preventDefault()

    //treat this.state as immutable as per react docs
    let movies = this.state.movies.slice()
    let index = this.state.editedMovie
    if (index !== null) {
      movies[index] = this.state.movieComponents;
    }
    else {
      movies.push(this.state.movieComponents)
    }

    this.setState({
      movies: movies,
      editedMovie: null
    })
    localStorage.setItem('movies', JSON.stringify(movies));
    this.cancelModal();
  },

  editMovie: function(movie, i) {
    this.setState({movieComponents: movie, editedMovie: i});
    localStorage.setItem('movies', JSON.stringify(movies));
    this.toggleModal();
  },

  cancelModal: function() {
    this.setState({
      movieComponents: {},
      modalOpen: !this.state.modalOpen
    })
  },
  removeMovie: function(movie, i) {
    let movies = this.state.movies.slice()
    let index = this.state.editedMovie
    movies.splice(index, 1);
    this.setState({
      movies: movies
    })
    localStorage.setItem('movies', JSON.stringify(movies));
  },

  render: function() {
    var movieComponents = ["genre", "actors", "title", "year", "rating"];
    return (
      <div className="content">
      <components.Header toggleModal={this.toggleModal}/>
      <Search
        movieComponents={movieComponents}
        movies={this.state.movies}
      />
      <components.Table
       movies={this.state.movies}
       editMovie={this.editMovie}
       removeMovie={this.removeMovie}/>
      <Dialog
        cancelModal={this.cancelModal}
        currentView={this.state.currentModalView}
        open={this.state.modalOpen}
        updatedMovieComponent={this.state.movieComponents}
        movieComponents={movieComponents}
        handleChange={this.handleChange}
        saveMovie={this.saveMovie}
      />
      </div>
    )
  }
});
