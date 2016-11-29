import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import AddNewMovie from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ActionEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



const Components = {

Table: React.createClass({
  render: function() {
    let iconStyle = {
      "margin-top": "7px",
      margin: "20px",
      cursor: "pointer",
      padding: "5px",
      "background-color": "#EEEEEE"
    }
    return <Table
      selectable={false}
    >
    <TableHeader
      adjustForCheckbox={false}
      displaySelectAll={false}
    >
      <TableRow>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Year</TableHeaderColumn>
        <TableHeaderColumn>Rating</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
    {this.props.movies.map((movie, i) => {
      return (
        <TableRow key={i}>
          <TableRowColumn>{movie.title}</TableRowColumn>
          <TableRowColumn>{movie.year}</TableRowColumn>
          <TableRowColumn>{movie.rating}</TableRowColumn>
          <ActionEdit style={iconStyle} onTouchTap={this.props.editMovie.bind(null, movie, i)}/>
          <ActionDelete style={iconStyle} onTouchTap={this.props.removeMovie.bind(null, movie, i)}/>
        </TableRow>
      )
    })}
    </TableBody>
  </Table>
  }
}),

Header: React.createClass({
  render: function() {
    return <AppBar
      title="InMotion"
      iconElementLeft={
        <IconButton
        onTouchTap={this.props.toggleModal}
        >
          <AddNewMovie />
        </IconButton>
      }
    />
  }
}),

Dialog: React.createClass({
  render: function() {
    const actions = [<FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.cancelModal} />,
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
          value={this.props.value}
          onChange={this.props.handleChange}
          floatingLabelText={this.props.label}>
        </TextField>
      )
    }
  })
}
export default Components;
