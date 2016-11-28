import React from "react"
import components from "../components/mdlComponents"
import Dialog from "../components/dialog"

module.exports = React.createClass({
  getInitialState: function() {
      return {
        modalOpen: false,
        drawerOpen: false,
      }
  },

  componentDidMount: function() {
  },

  toggleModal: function(modal) {

    this.setState({
      modalOpen: !this.state.modalOpen,
      currentModalView: modal,

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

  },

  handleChange: function(e) {
    this.setState({
      [e.target.id]: e.target.value
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
