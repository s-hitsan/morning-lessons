import './AppField.scss';

import { Component } from 'react';

export class AppField extends Component {
  props = this.props;

  render() {
    const { value, onInputChange, type = 'text', name } = this.props;

    return (
      <div className='app__field_wrapper'>
        <input
          autoComplete='new-password'
          type={type}
          name={name}
          value={value}
          onChange={onInputChange}
          placeholder='Enter value'
        />
      </div>
    );
  }
}
