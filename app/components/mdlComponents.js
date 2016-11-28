import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import AddNewMovie from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



const Components = {

Header: React.createClass({
  render: function() {
    return <AppBar
      title="InMotion"
      iconElementLeft={
        <IconButton
        onTouchTap={this.props.toggleModal}
        ><AddNewMovie /></IconButton>
      }
    />
  }
}),

Dialog: React.createClass({
  render: function() {
    const actions = [<FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.toggle} />,
    <FlatButton
        label="Save"
        primary={true}
        type="submit"
        keyboardFocused={true}
        onTouchTap={this.props.saveMovie} />]
    return (
      <div>
      <Dialog
        title={this.props.currentDialog}
        actions={actions}
        modal={false}
        contentClassName="modal"
        open={this.props.open}
        onRequestClose={this.props.toggle}
      >
        {this.props.children}
      </Dialog>
    </div>
    )
  }
}),

Drawer: React.createClass({
  render: function() {
    return (
        <Drawer open={this.props.open} className="drawer">
          <AppBar iconElementLeft={<IconButton></IconButton>}/>
          {this.props.currentView}
        </Drawer>
    );
  }
}),

  InputField: React.createClass({
    render: function() {
      return (
        <TextField
          type={this.props.type}
          id={this.props.id}
          onChange={this.props.handleChange}
          floatingLabelText={this.props.label}>
        </TextField>
      )
    }
  })
}
export default Components;
