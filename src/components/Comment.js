import React, { Component } from 'react';


let Comment = React.createClass({
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
  },

  renderNormal: function () {
    return (
      <div className="commentContainer">
        <div className="commentText">{this.props.children}</div>
        <button onClick={this.edit} className="button-primary">Edit</button>
        <button onClick={this.delete} className="button-danger">Delete</button>
      </div>
   );
  },

  renderForm: function () {
    return (
      <div className="commentContainer">
         <input type="text" ref="Paragraph" placeholder="Paragraph 1"/> //<textInput defaultValue={this.props.children} /> 
        <button onClick={this.save} className="button-success">Save</button>
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

export default Comment
