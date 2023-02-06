import './AppField.scss';

import PropTypes from 'prop-types';
import { Component, useEffect, useRef } from 'react';

export const AppField = ({
  value,
  onInputChange,
  label,
  type = 'text',
  width = '488px',
  name,
}) => {
  const element = useRef({});

  return (
    <div className='app__field_wrapper'>
      {label ? (
        <label title='hello'>
          <p>{label}</p>
        </label>
      ) : null}
      <input
        ref={element}
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
};

AppField.propTypes = {
  label: PropTypes.string,
};
