import Rect, { Component } from 'react';

import { AppButton, AppField } from '../../components';

export class Registration extends Component {
  state = {
    formValues: {
      email: '',
      login: '',
      password: '',
    },
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formValues: { ...prevState.formValues, [name]: value },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.formValues);
  };

  render() {
    const {
      state: { formValues },
      handleChange,
      handleSubmit,
    } = this;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <form autoComplete='none' onSubmit={handleSubmit}>
          <AppField value={formValues.email} onInputChange={handleChange} name='email' />
          <AppField value={formValues.login} onInputChange={handleChange} name='login' />
          <AppField
            value={formValues.password}
            onInputChange={handleChange}
            name='password'
            type='password'
          />
          <AppButton type='submit' tittle='Registartion' />
        </form>
      </div>
    );
  }
}
