import React from "react"
import components from "./mdlComponents"
import FlatButton from 'material-ui/FlatButton';


module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="title">Add Movie</h1>
        <form  ref="addForm" onSubmit={this.props.saveMovie}>

        </form>
      </div>
    )
  }
})
