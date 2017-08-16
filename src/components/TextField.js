import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


let TextFieldFloat = React.createClass({
  getInitialState: function() {
    return {editing: false}
  },
  edit: function () {
      this.setState({editing: true});
      console.log('test')
      console.log(this.state)
  },
  delete: function () {
    console.log("Removing");
  },
  save: function () {
      this.setState({editing: false});
      // console.log(this.state)
  },

  renderNormal: function () {
    return (
      <div className="textContainer">

        <TextField hintText="Add a Title" floatingLabelText="Title" /> <br/>
        <TextField hintText="Message Field" floatingLabelText="MultiLine and FloatingLabel"
            multiLine={true} rows={2} /> <br/>
        <FlatButton onClick={this.edit} label="Edit" secondary={true} />
        <FlatButton onClick={this.delete} label="Delete" primary={true} />
      </div>
   );
  },

  renderForm: function () {
    return (
      <div className="commentContainer">
        <TextField hintText="Add a Title" floatingLabelText="Title" /> <br/>
        <TextField hintText="Message Field" floatingLabelText="MultiLine and FloatingLabel"
            multiLine={true} rows={2} /> <br/>
        <FlatButton onClick={this.save} label="Save" secondary={true} />
      </div>
   );
  },

  render:function () {
    // console.log(this.state.editing)
    if(this.state.editing) {
      return this.renderForm();
    }else{
      return this.renderNormal();
    }
  }
})

export default TextFieldFloat;
