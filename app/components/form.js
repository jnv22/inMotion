import React from "react"
import components from "./mdlComponents"
import FlatButton from 'material-ui/FlatButton';


module.exports = React.createClass({
  render: function() {
    console.log(this.props.movieComponents)
    var updateMovieComponent = this.props.movieComponents || ''
    var movieComponents = ["genre", "actors", "title", "year", "rating"];
    return (
      <div>
        <h1 className="title">Add Movie</h1>
        <form  ref="addForm" onSubmit={this.props.saveMovie}>
         {movieComponents.map((component, i) => {
          return <span className="formComponents"><components.InputField {...this.props} key={i} value={updateMovieComponent[component] || ''} id={component} label={component.toUpperCase()} type="text"/></span>
        })}
        </form>
      </div>
    )
  }
})
