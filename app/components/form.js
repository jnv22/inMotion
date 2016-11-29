import React from "react"
import components from "./mdlComponents"
import FlatButton from 'material-ui/FlatButton';


module.exports = React.createClass({
  render: function() {
    console.log(this.props.movieComponents)
    var updatedMovieComponent = this.props.updatedMovieComponent || ''
    return (
      <div>
        <h1 className="title">Add Movie</h1>
        <form  ref="addForm" onSubmit={this.props.saveMovie}>
         {this.props.movieComponents.map((component, i) => {
          return <span className="formComponents"><components.InputField {...this.props} key={i} value={updatedMovieComponent[component] || ''} id={component} label={component.toUpperCase()} type="text"/></span>
        })}
        </form>
      </div>
    )
  }
})
