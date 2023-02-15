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
  placeholder = 'Enter value',
  errorMessage,
}) => {
  const element = useRef({});

  return (
    <div
      className={errorMessage ? 'app__field_wrapper error__field' : 'app__field_wrapper'}
    >
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
        placeholder={placeholder}
      />
      {errorMessage ? <p className='field__error_mesage'>{errorMessage}</p> : null}
    </div>
  );
};

AppField.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};
