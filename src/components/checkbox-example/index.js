import React from 'react'
import Checkbox from 'react-toolbox/lib/checkbox';

export default class CheckboxExample extends React.Component {

  state = {
    check1: true,
    check2: false
  };

  handleChange = (field, value) => {
    this.setState({...this.state, [field]: value});
  };

  render () {
    return (
      <div>
        <Checkbox
          checked={this.state.check1}
          label="Checked option"
          onChange={this.handleChange.bind(this, 'check1')}
        />
        <Checkbox
          checked={this.state.check2}
          label="Unchecked option"
          onChange={this.handleChange.bind(this, 'check2')}
        />
        <Checkbox
          checked
          disabled
          label="Disabled checkbox"
        />
      </div>
    );
  }

}
