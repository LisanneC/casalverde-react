import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

export default class SelectFieldExampleSimple extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Title"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Ms." />
          <MenuItem value={2} primaryText="Mrs." />
          <MenuItem value={3} primaryText="Miss" />
          <MenuItem value={4} primaryText="Mr." />
        </SelectField>

      </div>
    );
  }
}
