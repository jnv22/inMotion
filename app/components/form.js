import React from "react"
import components from "./mdlComponents"

var Form = React.createClass({
  render: function() {
    var updatedMovieComponent = this.props.updatedMovieComponent || '';
    return (
      <div>
        <h1 className="title">Add Movie</h1>
        <form ref="addForm" onSubmit={this.props.saveMovie}>
         {this.props.movieComponents.map((component, i) => {
          return <span className="formComponents">
            <components.InputField
              type="text"
              id={component}
              key={i}
              value={updatedMovieComponent[component] || ''}
              handleChange={this.props.handleChange}
              label={component.toUpperCase()}
            />
          </span>
         })}
        </form>
      </div>
    )
  }
})

var Dialog = React.createClass({
  render: function() {
    return <components.Dialog {...this.props}><Form {...this.props}/></components.Dialog>
  }
})

module.exports = Dialog
