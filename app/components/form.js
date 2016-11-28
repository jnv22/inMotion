import React from "react"
import components from "./mdlComponents"
import FlatButton from 'material-ui/FlatButton';


module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="title">Add Movie</h1>
        <form  ref="addForm" onSubmit={this.props.saveMovie}>
          <span className="formComponents"><components.InputField {...this.props} id="genre" label="Genre" type="text"/></span>
          <span className="formComponents"><components.InputField {...this.props} id="actors" label="Actors" type="text"/></span>,
          <span className="formComponents"><components.InputField {...this.props} id="title" label="Title" type="text"/></span>
          <span className="formComponents"><components.InputField {...this.props} id="year" label="Year" type="number"/></span>
          <span className="formComponents"><components.InputField {...this.props} id="rating" label="Rating" type="text"/></span>
        </form>
      </div>
    )
  }
})
