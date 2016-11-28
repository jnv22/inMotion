import React from "react";
import components from "../components/mdlComponents";
import Dialog from "../components/dialog";
import update from 'react-addons-update';
var LocalStorageMixin = require('react-localstorage');


module.exports = React.createClass({

  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return {
      modalOpen: false,
      drawerOpen: false,
      movieComponents: {},
      movies:[]
    }
  },

  componentDidMount: function() {
  },

  toggleModal: function(modal) {
    this.setState({
      modalOpen: !this.state.modalOpen,
      movieComponents: {}
    })
  },

  toggleDrawer: function() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  },

  updateLocation: function(location) {

  },

  saveMovie: function(e) {
    e.preventDefault()

    //treat this.state as immutable as per react docs
    let movies = this.state.movies.slice()
    movies.push(this.state.movieComponents)
    this.setState({
      movies: movies,
    })
    this.toggleModal();
  },

  handleChange: function(e) {
    let movieComponents = update(this.state.movieComponents, {
       [e.target.id]: {$set: e.target.value}
    });
    this.setState({
      movieComponents: movieComponents
    })
  },

  render: function() {
    return (
      <div className="content">
      <components.Header toggleModal={this.toggleModal}/>
        <Dialog
          toggle={this.toggleModal}
          currentView={this.state.currentModalView}
          open={this.state.modalOpen}
          handleChange={this.handleChange}
          saveMovie={this.saveMovie}
        />
      </div>
    )
  }
});
