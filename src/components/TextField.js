import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


const TextFieldFloat = () => (
  <div>
		<TextField
      hintText="Add a Title"
      floatingLabelText="Title" /> <br/>
    <TextField
      hintText="Add a Remark"
      floatingLabelText="Remarks" /> <br/>
     <FlatButton label="Save" secondary={true} />
     <FlatButton label="Delete" primary={true} />

  </div>


);

export default TextFieldFloat;
