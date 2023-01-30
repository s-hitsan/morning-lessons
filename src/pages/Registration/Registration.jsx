import Rect, { Component } from 'react';

import { AppButton, AppField, AppModal } from '../../components';

export class Registration extends Component {
  state = {
    formValues: {
      email: '',
      login: '',
      password: '',
      modalInputValue: '',
    },
    isModalShow: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formValues: { ...prevState.formValues, [name]: value },
    }));
  };
  setModalShow = () => {
    this.setState(() => ({
      isModalShow: true,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setModalShow();
    console.log(this.state.formValues);
  };

  setModalHide = () => {
    this.setState(() => ({
      isModalShow: false,
    }));
  };

  render() {
    const {
      state: { formValues, isModalShow },
      handleChange,
      handleSubmit,
      setModalShow,
      setModalHide,
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
        <h1>Create account</h1>
        <form autoComplete='none' onSubmit={handleSubmit}>
          <AppField
            label='Email'
            value={formValues.email}
            onInputChange={handleChange}
            name='email'
          />
          <AppField
            label='Login'
            value={formValues.login}
            onInputChange={handleChange}
            name='login'
          />
          <AppField
            label='Password'
            value={formValues.password}
            onInputChange={handleChange}
            name='password'
            type='password'
          />
          <AppButton type='submit' tittle='Registartion' />
        </form>
        {isModalShow ? (
          <AppModal
            isShow={isModalShow}
            inputValue={formValues.modalInputValue}
            onInputChange={handleChange}
            onHide={setModalHide}
          />
        ) : null}
      </div>
    );
  }
}
