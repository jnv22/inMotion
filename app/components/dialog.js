import React from "react"
import components from "./mdlComponents"
import FlatButton from 'material-ui/FlatButton';
import Form from "./form"

var actions;

function DialogTemplate() {
    return  <Form {...this.props} />
}

var Dialog = React.createClass({
  render: function() {
    var currentView = DialogTemplate.call(this)
    return <components.Dialog {...this.props} actions={actions}> {currentView} </components.Dialog>
  }
})

module.exports = Dialog
