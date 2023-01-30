import './AppField.scss';

import PropTypes from 'prop-types';
import { Component } from 'react';

export class AppField extends Component {
  render() {
    const {
      value,
      onInputChange,
      label,
      type = 'text',
      width = '488px',
      name,
    } = this.props;

    return (
      <div className='app__field_wrapper'>
        {label ? (
          <label title='hello'>
            <p>{label}</p>
          </label>
        ) : null}
        <input
          style={{ width: width }}
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

AppField.propTypes = {
  label: PropTypes.string,
};
